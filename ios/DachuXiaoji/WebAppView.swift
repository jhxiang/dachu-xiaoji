import SwiftUI
import WebKit
import UIKit

// MARK: - Local Bundle Scheme Handler (dachu://app/...)
final class LocalWebSchemeHandler: NSObject, WKURLSchemeHandler {
    private let rootDir: URL

    init(rootDir: URL) {
        self.rootDir = rootDir
        super.init()
    }

    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        guard let reqURL = urlSchemeTask.request.url else {
            urlSchemeTask.didFailWithError(NSError(domain: "DachuScheme", code: 400))
            return
        }

        var path = reqURL.path
        if path.isEmpty || path == "/" {
            path = "/index.html"
        }
        let cleanPath = path.hasPrefix("/") ? String(path.dropFirst()) : path
        let fileURL = rootDir.appendingPathComponent(cleanPath).standardizedFileURL

        guard fileURL.path.hasPrefix(rootDir.standardizedFileURL.path),
              FileManager.default.fileExists(atPath: fileURL.path),
              let data = try? Data(contentsOf: fileURL) else {
            let notFound = HTTPURLResponse(
                url: reqURL,
                statusCode: 404,
                httpVersion: "HTTP/1.1",
                headerFields: ["Content-Type": "text/plain; charset=utf-8"]
            )!
            urlSchemeTask.didReceive(notFound)
            urlSchemeTask.didReceive(Data("Not Found".utf8))
            urlSchemeTask.didFinish()
            return
        }

        let mime = Self.mimeType(for: fileURL.pathExtension.lowercased())
        let response = HTTPURLResponse(
            url: reqURL,
            statusCode: 200,
            httpVersion: "HTTP/1.1",
            headerFields: [
                "Content-Type": mime,
                "Content-Length": "\(data.count)",
                "Cache-Control": "no-cache"
            ]
        )!
        urlSchemeTask.didReceive(response)
        urlSchemeTask.didReceive(data)
        urlSchemeTask.didFinish()
    }

    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {}

    private static func mimeType(for ext: String) -> String {
        switch ext {
        case "html", "htm": return "text/html; charset=utf-8"
        case "css": return "text/css; charset=utf-8"
        case "js", "mjs": return "application/javascript; charset=utf-8"
        case "json", "webmanifest": return "application/json; charset=utf-8"
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "svg": return "image/svg+xml"
        case "webp": return "image/webp"
        default: return "application/octet-stream"
        }
    }
}

// MARK: - SwiftUI WKWebView Wrapper
struct WebAppView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.defaultWebpagePreferences.allowsContentJavaScript = true

        if let webRoot = Bundle.main.url(forResource: "WebApp", withExtension: nil) {
            let handler = LocalWebSchemeHandler(rootDir: webRoot)
            config.setURLSchemeHandler(handler, forURLScheme: "dachu")
        }

        config.userContentController.add(context.coordinator, name: "dachuBridge")

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.uiDelegate = context.coordinator
        webView.navigationDelegate = context.coordinator
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 0.98, green: 0.969, blue: 0.949, alpha: 1.0)
        webView.scrollView.backgroundColor = webView.backgroundColor
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.scrollView.bounces = true

        context.coordinator.webView = webView

        if let startURL = URL(string: "dachu://app/index.html") {
            webView.load(URLRequest(url: startURL))
        }
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    // MARK: - Coordinator (JS Alerts, Native Network, Native Share)
    final class Coordinator: NSObject, WKUIDelegate, WKNavigationDelegate, WKScriptMessageHandler {
        weak var webView: WKWebView?

        private func topViewController() -> UIViewController? {
            let scenes = UIApplication.shared.connectedScenes.compactMap { $0 as? UIWindowScene }
            let window = scenes.flatMap { $0.windows }.first(where: { $0.isKeyWindow }) ?? scenes.first?.windows.first
            var vc = window?.rootViewController
            while let presented = vc?.presentedViewController {
                vc = presented
            }
            return vc
        }

        // MARK: WKNavigationDelegate
        func webView(
            _ webView: WKWebView,
            decidePolicyFor navigationAction: WKNavigationAction,
            decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
        ) {
            guard let url = navigationAction.request.url else {
                decisionHandler(.allow)
                return
            }
            if url.scheme == "dachu" || url.scheme == "about" || url.scheme == "blob" || url.scheme == "data" {
                decisionHandler(.allow)
                return
            }
            if navigationAction.navigationType == .linkActivated,
               (url.scheme == "http" || url.scheme == "https" || url.scheme == "xhsdiscover") {
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
                return
            }
            decisionHandler(.allow)
        }

        // MARK: WKUIDelegate (Support JS alert / confirm / prompt)
        func webView(
            _ webView: WKWebView,
            runJavaScriptAlertPanelWithMessage message: String,
            initiatedByFrame frame: WKFrameInfo,
            completionHandler: @escaping () -> Void
        ) {
            guard let vc = topViewController() else {
                completionHandler()
                return
            }
            let alert = UIAlertController(title: "大厨小记", message: message, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "好", style: .default) { _ in completionHandler() })
            vc.present(alert, animated: true)
        }

        func webView(
            _ webView: WKWebView,
            runJavaScriptConfirmPanelWithMessage message: String,
            initiatedByFrame frame: WKFrameInfo,
            completionHandler: @escaping (Bool) -> Void
        ) {
            guard let vc = topViewController() else {
                completionHandler(false)
                return
            }
            let alert = UIAlertController(title: "大厨小记", message: message, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "取消", style: .cancel) { _ in completionHandler(false) })
            alert.addAction(UIAlertAction(title: "确定", style: .destructive) { _ in completionHandler(true) })
            vc.present(alert, animated: true)
        }

        // MARK: WKScriptMessageHandler (Native Bridge)
        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            guard message.name == "dachuBridge",
                  let body = message.body as? [String: Any],
                  let id = body["id"] as? String,
                  let action = body["action"] as? String else {
                return
            }
            let payload = body["payload"] as? [String: Any] ?? [:]

            switch action {
            case "shareFile":
                handleShareFile(id: id, payload: payload)
            case "fetchUrl":
                handleFetchUrl(id: id, payload: payload)
            case "fetchImage":
                handleFetchImage(id: id, payload: payload)
            case "openExternal":
                handleOpenExternal(id: id, payload: payload)
            default:
                resolveJS(id: id, ok: false, data: nil, error: "Unknown action")
            }
        }

        private func handleOpenExternal(id: String, payload: [String: Any]) {
            let primaryStr = payload["url"] as? String ?? ""
            let fallbackStr = payload["fallbackUrl"] as? String ?? ""
            DispatchQueue.main.async {
                if let url = URL(string: primaryStr), UIApplication.shared.canOpenURL(url) {
                    UIApplication.shared.open(url) { ok in
                        self.resolveJS(id: id, ok: ok, data: "opened", error: nil)
                    }
                } else if let fb = URL(string: fallbackStr) {
                    UIApplication.shared.open(fb) { ok in
                        self.resolveJS(id: id, ok: ok, data: "fallback", error: nil)
                    }
                } else {
                    self.resolveJS(id: id, ok: false, data: nil, error: "Cannot open URL")
                }
            }
        }

        private func handleShareFile(id: String, payload: [String: Any]) {
            guard let filename = payload["filename"] as? String,
                  let content = payload["content"] as? String else {
                resolveJS(id: id, ok: false, data: nil, error: "Invalid file payload")
                return
            }
            let tempURL = FileManager.default.temporaryDirectory.appendingPathComponent(filename)
            do {
                try content.write(to: tempURL, atomically: true, encoding: .utf8)
            } catch {
                resolveJS(id: id, ok: false, data: nil, error: error.localizedDescription)
                return
            }

            DispatchQueue.main.async {
                guard let vc = self.topViewController() else {
                    self.resolveJS(id: id, ok: false, data: nil, error: "No view controller")
                    return
                }
                let activity = UIActivityViewController(activityItems: [tempURL], applicationActivities: nil)
                if let popover = activity.popoverPresentationController {
                    popover.sourceView = vc.view
                    popover.sourceRect = CGRect(x: vc.view.bounds.midX, y: vc.view.bounds.midY, width: 1, height: 1)
                }
                vc.present(activity, animated: true) {
                    self.resolveJS(id: id, ok: true, data: "shared", error: nil)
                }
            }
        }

        private func handleFetchUrl(id: String, payload: [String: Any]) {
            guard let urlStr = payload["url"] as? String,
                  let url = URL(string: urlStr) else {
                resolveJS(id: id, ok: false, data: nil, error: "Invalid URL")
                return
            }
            let method = (payload["method"] as? String)?.uppercased() ?? "GET"
            var req = URLRequest(url: url, timeoutInterval: 30)
            req.httpMethod = method
            req.setValue("Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", forHTTPHeaderField: "User-Agent")

            if let headers = payload["headers"] as? [String: String] {
                for (k, v) in headers {
                    req.setValue(v, forHTTPHeaderField: k)
                }
            }
            if let bodyStr = payload["body"] as? String {
                req.httpBody = bodyStr.data(using: .utf8)
            }

            URLSession.shared.dataTask(with: req) { data, response, error in
                if let error = error {
                    self.resolveJS(id: id, ok: false, data: nil, error: error.localizedDescription)
                    return
                }
                guard let data = data,
                      let http = response as? HTTPURLResponse else {
                    self.resolveJS(id: id, ok: false, data: nil, error: "No HTTP response")
                    return
                }
                let text = String(data: data, encoding: .utf8) ?? String(data: data, encoding: .isoLatin1) ?? ""
                if (200..<400).contains(http.statusCode) {
                    self.resolveJS(id: id, ok: true, data: text, error: nil)
                } else {
                    self.resolveJS(id: id, ok: false, data: text, error: "HTTP \(http.statusCode)")
                }
            }.resume()
        }

        private func handleFetchImage(id: String, payload: [String: Any]) {
            guard let urlStr = payload["url"] as? String,
                  let url = URL(string: urlStr) else {
                resolveJS(id: id, ok: false, data: nil, error: "Invalid image URL")
                return
            }
            URLSession.shared.dataTask(with: url) { data, _, error in
                if let error = error {
                    self.resolveJS(id: id, ok: false, data: nil, error: error.localizedDescription)
                    return
                }
                guard let data = data, let image = UIImage(data: data) else {
                    self.resolveJS(id: id, ok: false, data: nil, error: "Invalid image data")
                    return
                }
                let resized = Self.resizeImage(image, maxSide: 1080)
                guard let jpeg = resized.jpegData(compressionQuality: 0.82) else {
                    self.resolveJS(id: id, ok: false, data: nil, error: "Encode failed")
                    return
                }
                let dataURL = "data:image/jpeg;base64," + jpeg.base64EncodedString()
                self.resolveJS(id: id, ok: true, data: dataURL, error: nil)
            }.resume()
        }

        private static func resizeImage(_ image: UIImage, maxSide: CGFloat) -> UIImage {
            let size = image.size
            let longest = max(size.width, size.height)
            guard longest > maxSide, longest > 0 else { return image }
            let scale = maxSide / longest
            let target = CGSize(width: round(size.width * scale), height: round(size.height * scale))
            let renderer = UIGraphicsImageRenderer(size: target)
            return renderer.image { _ in
                image.draw(in: CGRect(origin: .zero, size: target))
            }
        }

        private func resolveJS(id: String, ok: Bool, data: String?, error: String?) {
            let encoder = JSONEncoder()
            let idJSON = (try? String(data: encoder.encode(id), encoding: .utf8)) ?? "\"\""
            let dataJSON: String
            if let d = data, let encoded = try? String(data: encoder.encode(d), encoding: .utf8) {
                dataJSON = encoded
            } else {
                dataJSON = "null"
            }
            let errJSON: String
            if let e = error, let encoded = try? String(data: encoder.encode(e), encoding: .utf8) {
                errJSON = encoded
            } else {
                errJSON = "null"
            }
            let js = "window.__dachuNativeResolve && window.__dachuNativeResolve(\(idJSON), \(ok ? "true" : "false"), \(dataJSON), \(errJSON));"
            DispatchQueue.main.async {
                self.webView?.evaluateJavaScript(js, completionHandler: nil)
            }
        }
    }
}
