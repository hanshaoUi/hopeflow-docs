# macOS 安装指南

## 系统要求

| 项目 | 要求 |
|---|---|
| 操作系统 | macOS 10.12 Sierra 及以上（推荐 macOS 13+） |
| Illustrator | CS6 及以上所有版本 |
| CEP 版本 | CEP 9+ |

## 方法一：自动安装（推荐）

1. 从 [GitHub Releases](https://github.com/hanshaoUi/hopeflow-docs/releases) 下载最新版 `.zip` 压缩包
2. 解压压缩包
3. 打开终端，`cd` 到解压目录
4. 执行安装脚本：

```bash
chmod +x install.sh && ./install.sh
```

5. 完全退出并重启 Illustrator
6. 菜单栏 → 窗口 → 扩展 → **HopeFlow Toolbox**

::: tip Apple Silicon (M1/M2/M3) 用户
脚本完全兼容 Apple Silicon，无需 Rosetta。如遇权限问题，在命令前加 `sudo`：
```bash
sudo ./install.sh
```
:::

## 方法二：手动安装

### 第一步：复制插件文件

将 `HopeFlow-Toolbox` 文件夹复制到：

```
~/Library/Application Support/Adobe/CEP/extensions/
```

::: info 目录不存在怎么办？
`~/Library` 默认隐藏。在 Finder 中按 <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd>，粘贴路径 `~/Library/Application Support/Adobe/CEP/extensions/`，如果 `extensions` 目录不存在，手动创建即可。
:::

### 第二步：开启调试模式

在终端执行：

```bash
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
```

::: tip CSXS 版本号说明
`CSXS.11` 对应 Illustrator 2021 及以上版本。如不确定，可分别对 `.9`、`.10`、`.11` 都执行一遍：
```bash
defaults write com.adobe.CSXS.9 PlayerDebugMode 1
defaults write com.adobe.CSXS.10 PlayerDebugMode 1
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
```
:::

### 第三步：重启 Illustrator

完全退出 Illustrator 后重新启动，在 **窗口 → 扩展** 中找到 HopeFlow Toolbox。

## 验证安装

1. 打开任意 Illustrator 文档
2. 菜单栏 → 窗口 → 扩展 → HopeFlow Toolbox
3. 面板顶部显示版本号 `v3.1.2` 即安装成功

## 卸载

删除以下路径中的 `HopeFlow-Toolbox` 文件夹：

```
~/Library/Application Support/Adobe/CEP/extensions/
```

可选：在终端执行以下命令移除调试模式设置：

```bash
defaults delete com.adobe.CSXS.11 PlayerDebugMode
```

## 常见问题

**安装后找不到扩展菜单？**

最常见原因是 `PlayerDebugMode` 未正确写入，或写入的 CSXS 版本号与你安装的 Illustrator 版本不匹配。可以通过 `defaults read com.adobe.CSXS.11 PlayerDebugMode` 验证是否返回 `1`。

**Gatekeeper 提示"无法打开"？**

在"系统设置 → 隐私与安全性"中允许运行即可，或在终端执行：

```bash
xattr -cr /path/to/HopeFlow-Toolbox
```

更多问题请查看 [常见问题文档](/faq/)。
