# 大厨小记（iOS 安装包 + PWA 网页 App）

简约多彩的家庭做菜记录本：支持自己上传菜品/菜谱照片、一键 `+1` 记录制作次数、分类筛选与搜索、食材清单勾选、做法步骤心得、做菜日历、拿手菜 Top 10 排行、随机推荐「今天吃什么」、**联网在线搜菜谱 & 网址/文本智能导入**，以及 iCloud Drive 文件备份恢复。

---

## 方式一：云端自动打 iOS `.ipa` 安装包（免本机装 Xcode）

本仓库已内置完整的原生 iOS 工程（`ios/`）与 GitHub Actions 打包流水线（`.github/workflows/build-ios-ipa.yml`）：

1. 把整个 `dachu-xiaoji` 文件夹里的所有文件（含 `.github/` 和 `ios/`）推送到你的 GitHub 仓库（如 `dachu-xiaoji`）。
2. 打开 GitHub 仓库顶部的 **Actions** 标签页，等待 `Build iOS IPA (大厨小记)` 变成绿色对勾（约 2～3 分钟，也可以点 **Run workflow** 手动触发）。
3. 点进该次构建记录，在最下方 **Artifacts** 处点击下载 **`DachuXiaoji-iOS-IPA`**，解压得到 **`DachuXiaoji.ipa`**。
4. 安装到 iPhone：
   - **免费 Apple ID**：在 Mac 上安装免费工具 [Sideloadly](https://sideloadly.io/)（或 AltStore），用 Type-C 数据线连上 iPhone，把 `DachuXiaoji.ipa` 拖进去，输入 Apple ID 点 Start 即可装入手机（首次打开需在 iPhone「设置 → 通用 → VPN 与设备管理」信任自己的证书；免费账号每 7 天需连线续签一次）。
   - **付费开发者账号 / 企业证书**：用 Xcode 或签名工具直接签发，永久/一年免续签。

---

## 方式二：免数据线、永久不过期（GitHub Pages → Safari 添加到主屏幕）

同一个仓库也能同时作为 iPhone 桌面 PWA 使用：

1. 在 GitHub 仓库打开 **Settings → Pages** → Source 选 `Deploy from a branch` → Branch 选 `main`、`/(root)` → 点击 **Save**。
2. 用 iPhone **Safari** 打开生成的 `https://你的用户名.github.io/dachu-xiaoji/`。
3. 点击底部「分享」→ **「添加到主屏幕」**，即可获得永久不过期的桌面独立 App 图标。
