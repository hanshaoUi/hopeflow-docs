# 常见问题：开源与贡献

## 这个插件永久免费吗？

**永久免费，不会转为付费。**

以 **MIT 开源协议**发布，完整源代码托管在 GitHub。即使作者停止维护，代码仍然永久可用，任何人都可以继续维护或 Fork 开发。

## 我想贡献新的脚本工具，怎么做？

1. Fork [GitHub 仓库](https://github.com/hanshaoUi/hopeflow-toolbox)
2. 在 `scripts/` 对应分类目录下添加 `.jsx` 脚本文件
3. 在 `src/data/tools.js` 中注册工具元数据（`id`、`name`、`desc`、`category`）
4. 本地测试确认功能正常
5. 提交 Pull Request，描述功能和使用场景

::: tip 建议先开 Issue 讨论
贡献前先开一个 [Issue](https://github.com/hanshaoUi/hopeflow-toolbox/issues) 说明你的想法，可以避免重复工作，也能提前确认这个功能是否符合项目方向。
:::

## 发现 Bug 怎么反馈？

在 [GitHub Issues](https://github.com/hanshaoUi/hopeflow-toolbox/issues) 新建一个 Issue，请尽量包含：

- **Illustrator 版本**（如 Illustrator 2024 v28.x）
- **操作系统**（如 Windows 11 22H2 / macOS 14.x）
- **复现步骤**：具体操作了什么，期望结果是什么，实际结果是什么
- **截图或录屏**（如果有）

## 可以在商业项目中使用吗？

完全可以。MIT 协议允许在任何项目（包括商业项目）中使用，无需注明来源，也无需开放你自己项目的源代码。

## 如何支持作者？

如果这个工具帮到了你，欢迎：

- 在 GitHub 上给仓库点 ⭐
- 通过主站的[支持作者](https://hanshaoui.github.io/hopeflow-docs/support)页面赞赏
- 向设计师朋友推荐这个工具

## 文档内容有错误，怎么提交修改？

每篇文档底部都有"**在 GitHub 上编辑此页**"链接，点击后可直接在 GitHub 上提交修改建议。不需要懂代码，GitHub 会引导你完成整个流程。
