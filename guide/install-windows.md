# Windows 安装指南

## 系统要求

| 项目 | 要求 |
|---|---|
| 操作系统 | Windows 7 SP1 及以上（推荐 Windows 10/11） |
| Illustrator | CS6 及以上所有版本 |
| CEP 版本 | CEP 9+ |

## 方法一：自动安装（推荐）

1. 从 [GitHub Releases](https://github.com/hanshaoUi/hopeflow-docs/releases) 下载最新版 `.zip` 压缩包
2. 解压压缩包到任意位置
3. 右键点击 `install.bat` → **以管理员身份运行**
4. 看到"安装完成"提示后，**完全退出并重启 Illustrator**
5. 菜单栏 → 窗口 → 扩展 → **HopeFlow Toolbox**

::: warning 必须以管理员身份运行
否则无法写入注册表，插件将无法被 Illustrator 加载。
:::

## 方法二：手动安装

### 第一步：复制插件文件

将解压后的 `HopeFlow-Toolbox` 文件夹复制到：

```
C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\
```

### 第二步：开启调试模式

打开注册表编辑器（<kbd>Win</kbd> + <kbd>R</kbd> 输入 `regedit`），导航到：

```
HKEY_CURRENT_USER\SOFTWARE\Adobe\CSXS.11
```

新建字符串值：
- 名称：`PlayerDebugMode`
- 数据：`1`

::: tip CSXS 版本号说明
CSXS.11 对应 Illustrator 2021 及以上版本。如果你使用的是更早版本，数字可能是 `.10` 或 `.9`。如不确定，可同时在 `.9`、`.10`、`.11` 三个路径下都创建该键值。
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
C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\
```

可选：在注册表中删除 `PlayerDebugMode` 键值（不影响其他 CEP 插件）。

## 常见问题

**安装后找不到扩展菜单？**

最常见原因是 `PlayerDebugMode` 未正确写入。请确认：
1. 注册表路径是否正确（注意 CSXS 版本号）
2. 是否完整退出并重启了 Illustrator

**安装脚本提示"拒绝访问"？**

右键 `install.bat` → **以管理员身份运行**，不能双击直接运行。

更多问题请查看 [常见问题文档](/faq/)。
