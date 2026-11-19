import SwiftUI

@main
struct DachuXiaojiApp: App {
    var body: some Scene {
        WindowGroup {
            WebAppView()
                .ignoresSafeArea()
                .background(Color(red: 0.98, green: 0.969, blue: 0.949))
        }
    }
}
