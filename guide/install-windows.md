# Windows 安装指南

## 系统要求

| 项目 | 要求 |
|---|---|
| 操作系统 | Windows 10 / 11 推荐 |
| Illustrator | 支持 CEP 的 Illustrator 版本 |
| 安装包 | HopeFlow Toolbox Windows Release zip |

## 推荐方式：图形安装器

1. 从 [GitHub Releases](https://github.com/hanshaoUi/hopeflow-toolbox/releases) 下载最新版 Windows zip。
2. 解压 zip。
3. 完全退出 Illustrator。
4. 双击 `HopeFlow-Installer.bat`。
5. 点击 `Install / Update`。
6. 安装完成后重启 Illustrator。
7. 在 Illustrator 中打开 `窗口 > 扩展 > HopeFlow Toolbox`。

安装器会自动：

- 检查发布包是否完整。
- 写入当前用户的 CEP 调试加载开关。
- 安装或覆盖旧版本。
- 将插件复制到当前用户 CEP 扩展目录。

安装路径：

```text
%APPDATA%\Adobe\CEP\extensions\com.hopeflow.toolbox
```

## 命令行方式

如果图形安装器无法打开，可以运行：

```bat
install.bat
```

检查发布包：

```bat
install.bat -Check
```

卸载：

```bat
install.bat -Uninstall
```

## 验证安装

1. 重启 Illustrator。
2. 打开 `窗口 > 扩展 > HopeFlow Toolbox`。
3. 面板底部显示 `v3.1.4` 即安装成功。

## 常见问题

### 安装后找不到扩展菜单

请确认：

- Illustrator 已完全退出并重新打开。
- 安装器显示安装成功。
- 安装目录中存在 `CSXS/manifest.xml` 和 `dist/index.html`。

### 其他电脑安装失败

从 v3.1.4 开始，Windows 发布包不要求用户电脑安装 Node.js，也不需要运行 `npm install` 或 `npm run build`。请确认使用的是 `HopeFlow-Toolbox-3.1.4-Windows.zip` 或更新版本。
