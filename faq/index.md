# 常见问题：安装与兼容

## 支持哪些版本的 Adobe Illustrator？

HopeFlow Toolbox 基于 **CEP（Common Extensibility Platform）** 技术开发，支持 **Illustrator CS6 及以上所有版本**，包括 CC 全系列和最新的 Illustrator 2025。

## Windows 和 macOS 都支持吗？

完全支持两个平台：

| 平台 | 最低版本 | 推荐版本 |
|---|---|---|
| Windows | Windows 7 SP1 | Windows 10 / 11 |
| macOS | macOS 10.12 Sierra | macOS 13 Ventura 及以上 |

Apple Silicon（M1/M2/M3）原生支持，无需 Rosetta。

## 安装后在 Illustrator 里找不到插件面板？

通常是 **PlayerDebugMode 未启用**导致的。

::: code-group

```powershell [Windows（注册表）]
# 打开注册表编辑器（Win+R 输入 regedit），导航到：
HKEY_CURRENT_USER\SOFTWARE\Adobe\CSXS.11
# 新建字符串值：PlayerDebugMode = 1
```

```bash [macOS（终端）]
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
```

:::

设置完成后，**完全退出并重启 Illustrator**。

> 使用自动安装脚本（`install.bat` 或 `install.sh`）的话，以上步骤已自动完成。

## 安装脚本提示权限不足？

- **Windows**：右键 `install.bat` → **以管理员身份运行**（不能双击）
- **macOS**：先执行 `chmod +x install.sh`，再运行 `sudo ./install.sh`

## 安装后 Illustrator 启动很慢？

加载 CEP 插件本身不会显著影响启动速度。如果启动变慢，可能是其他原因：

1. 检查是否安装了过多 CEP 扩展
2. 确认 `CEP/extensions` 目录下没有损坏的插件文件夹

## 可以同时安装多个版本吗？

不建议。v3.x 是完整重写版本，请先 [完整卸载旧版本](/guide/uninstall) 再安装新版，避免两个版本同时出现在扩展菜单。
