# 卸载插件

## Windows

删除以下路径中的 `HopeFlow-Toolbox` 文件夹：

```
C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\HopeFlow-Toolbox\
```

**可选**：清理注册表调试模式（不影响其他 CEP 插件）

打开注册表编辑器，找到 `HKEY_CURRENT_USER\SOFTWARE\Adobe\CSXS.11`，删除 `PlayerDebugMode` 键值。

## macOS

删除以下路径中的 `HopeFlow-Toolbox` 文件夹：

```
~/Library/Application Support/Adobe/CEP/extensions/HopeFlow-Toolbox/
```

**可选**：清理调试模式设置

```bash
defaults delete com.adobe.CSXS.11 PlayerDebugMode
```

## 卸载后重启 Illustrator

删除完成后，完全退出并重新启动 Illustrator，扩展菜单中的 HopeFlow Toolbox 入口将消失。

::: tip 从 v2.x 升级到 v3.x？
v3.0 是完整重写版本，v2.x 插件文件夹名称可能不同（如 `HopeFlow` 或 `HopeFlowToolbox`），请同时删除旧文件夹，再安装 v3.x。
:::
