# 介绍

HopeFlow Toolbox 是一款专为 **Adobe Illustrator** 设计师打造的开源效率插件，基于 CEP（Common Extensibility Platform）技术开发，直接集成到 Illustrator 面板中运行。

## 核心特点

- **85 个脚本工具**，覆盖对齐、批量操作、色彩管理、文本处理、路径工具、排料优化等 12 个分类
- **双平台支持**：Windows 7+ 和 macOS 10.12+
- **Illustrator CS6 至最新版 2025** 全版本兼容
- **MIT 开源协议**，完整源代码公开，永久免费

## 技术架构

| 层 | 技术 |
|---|---|
| 面板 UI | HTML / CSS / JavaScript（CEP） |
| 脚本执行 | ExtendScript（`.jsx`） |
| 宿主通信 | CSInterface |
| 构建工具 | 无（纯静态，零构建） |

## 快速开始

根据你的操作系统选择安装方式：

- [Windows 安装指南](./install-windows)
- [macOS 安装指南](./install-macos)

安装完成后，在 Illustrator 菜单栏选择 **窗口 → 扩展 → HopeFlow Toolbox** 即可打开面板。

## 版本信息

当前稳定版：**v3.1.2**

> v3.x 是完整重写版本，从 v2.x 升级请先完整卸载旧版，详见 [常见问题 → 版本与更新](/faq/update)。
