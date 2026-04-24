# macOS 安装指南

## 系统要求

| 项目 | 要求 |
|---|---|
| 操作系统 | macOS 10.12+ |
| Illustrator | 支持 CEP 的 Illustrator 版本 |

## 安装步骤

1. 从 [GitHub Releases](https://github.com/hanshaoUi/hopeflow-toolbox/releases) 下载最新版发布包。
2. 解压发布包。
3. 打开终端，进入插件目录。
4. 执行：

```bash
chmod +x install.sh
./install.sh
```

5. 重启 Illustrator。
6. 在 Illustrator 中打开 `窗口 > 扩展 > HopeFlow Toolbox`。

## 验证安装

面板底部显示 `v3.1.4` 即安装成功。

## 卸载

删除以下目录：

```text
~/Library/Application Support/Adobe/CEP/extensions/com.hopeflow.toolbox
```

然后重启 Illustrator。
