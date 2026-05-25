# 常见问题：版本与更新

## 如何知道有新版本发布？

可以通过以下方式关注新版本：

1. 在 [GitHub 仓库](https://github.com/hanshaoUi/hopeflow-toolbox) Watch Releases。
2. 订阅 GitHub Releases RSS：

```text
https://github.com/hanshaoUi/hopeflow-toolbox/releases.atom
```

3. 在插件设置面板底部查看当前版本号，与 Releases 页面比对。

::: info 关于旧版本更新提示
v3.1.410 开始，HopeFlow Toolbox 会在插件启动后检查 GitHub Latest Release；如果发现比当前安装版本更新的正式版本，会在主界面顶部显示更新提示，也可以在设置页「关于」里手动检查。

v3.1.409 及更早版本本身没有检查器，无法自动弹出升级到 v3.1.410 的插件内提示。这批用户仍需要通过 GitHub Watch Releases、RSS 或手动访问 Releases 页面获知本次更新；安装 v3.1.410 或更新版本后，后续版本发布才会收到插件内提示。
:::

## 如何更新到新版本？

### Windows

1. 下载最新版 Windows 发布包。
2. 解压。
3. 关闭 Illustrator。
4. 双击 `HopeFlow-Installer.bat`。
5. 点击 `Install / Update`。
6. 重启 Illustrator。

新版安装器会自动覆盖旧版安装目录，并备份旧文件。

### macOS

1. 下载最新版发布包。
2. 解压。
3. 运行 `install.sh`。
4. 重启 Illustrator。

## v3.x 各版本差异

| 版本 | 主要变化 |
|---|---|
| v3.1.410 | 新增插件内检查更新：启动后读取 GitHub Latest Release，主界面提示新版本，设置页支持手动检查和打开下载页 |
| v3.1.409 | 智能排料优化接入 C++ helper，支持真实轮廓、多角度旋转、C++ 加速、自测和打包自动编译；图形浮雕完成改名 |
| v3.1.407 | 新增图形浮雕工具，支持面板生成、选区模式、预览和 Native 加速 |
| v3.1.406 | 新增批量画矩形专用面板和超级分割工具，增强 AI 色号产生器，并补全脚本中文说明 |
| v3.1.405 | 增强脚本管理器，新增收藏、运行次数、自定义标签、脚本描述读取、右键菜单和设置页赞赏入口 |
| v3.1.404 | 新增数据合并指南与示例视频，增强数据合并脚本和 AI Engine 服务 |
| v3.1.403 | 新增 Illustrator 菜单命令参考资料与对齐操作文档，并优化转曲和交集分组脚本 |
| v3.1.402 | 新增 AI 增强能力、扩展路径/导出/效果脚本，并同步更新 Windows 打包与安装脚本 |
| v3.1.401 | 优化大尺寸导出自动拼接，修复中文路径、分片缝隙、拼接后 DPI 元数据和 PNG/JPEG 缩放上限导致的拼接问题 |
| v3.1.4 | 新增画板尺寸表格导出、XLSX 图示、单价金额公式、Windows 图形安装器，并修复图示变形、PARM 和不可编辑图层问题 |
| v3.1.3 | 新增拼接切割、随机色卡填充、对象标号编组及测量脚本增强 |
| v3.1.2 | 修复长路径导出问题并优化排料性能 |
| v3.1.0 | 新增素材库分类入口，改善面板加载速度 |
| v3.0.0 | 完整重写，新增批量操作、色彩管理模块，面板 UI 全新设计 |

查看完整更新历史：[更新日志](/changelog)

## 旧版本在哪里下载？

所有历史版本保留在 [GitHub Releases](https://github.com/hanshaoUi/hopeflow-toolbox/releases)。
