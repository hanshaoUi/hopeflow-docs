# 常见问题：版本与更新

## 如何知道有新版本发布？

**方法一：GitHub Watch**

在 [GitHub 仓库页面](https://github.com/hanshaoUi/hopeflow-docs) 点击 **Watch → Custom → Releases**，新版本发布时会收到邮件通知。

**方法二：RSS 订阅**

```
https://github.com/hanshaoUi/hopeflow-docs/releases.atom
```

将此链接添加到你的 RSS 阅读器（如 Feedly、Reeder）即可。

**方法三：在面板中查看**

打开 HopeFlow Toolbox 面板，底部会显示当前版本号，可与 GitHub Releases 页面对比。

## 如何更新到新版本？

1. 先 [卸载当前版本](/guide/uninstall)
2. 重新下载并安装新版本
3. 重启 Illustrator

::: warning 不要直接覆盖
直接覆盖文件可能导致旧文件残留，建议先完整卸载再安装。
:::

## 从 v2.x 升级到 v3.x 需要注意什么？

**必须先完整卸载 v2.x 再安装 v3.x。**

v3.0 是完整重写版本：
- 插件文件夹名称从 `HopeFlow` 更改为 `HopeFlow-Toolbox`
- 直接覆盖安装会导致两个版本同时出现在扩展菜单
- v2.x 的用户配置不兼容 v3.x，安装后需重新配置偏好设置

v2.x 文件位置：
- Windows：`C:\Program Files\Common Files\Adobe\CEP\extensions\HopeFlow\`
- macOS：`~/Library/Application Support/Adobe/CEP/extensions/HopeFlow/`

## v3.x 各版本差异？

| 版本 | 主要变化 |
|---|---|
| v3.1.2 | 修复 Windows 长路径导出 Bug，优化排料算法性能 |
| v3.1.0 | 新增素材库分类（施工中），改善面板加载速度 |
| v3.0.0 | 完整重写，新增批量操作、色彩管理模块，面板 UI 全新设计 |

查看完整更新历史：[更新日志](/changelog)

## 旧版本在哪里下载？

所有历史版本均保留在 [GitHub Releases](https://github.com/hanshaoUi/hopeflow-docs/releases) 页面，可按需下载任意历史版本。
