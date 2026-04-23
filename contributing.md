# 参与贡献

感谢你对 HopeFlow Toolbox 的兴趣！以下是参与贡献的方式。

## 贡献类型

### 提交 Bug 报告

在 [GitHub Issues](https://github.com/hanshaoUi/hopeflow-toolbox/issues) 提交，请包含：

- Illustrator 版本和操作系统
- 复现步骤
- 期望行为 vs 实际行为
- 截图或录屏（如有）

### 提交新工具

1. Fork 仓库
2. 在 `src/scripts/<分类>/` 下创建 `.jsx` 脚本文件
3. 在 `src/registry/scripts/<分类>.ts` 注册工具元数据
4. 提交 PR，说明工具功能和适用场景

建议先开 Issue 讨论，确认方向后再开始开发。

### 改进文档

每篇文档底部有"**在 GitHub 上编辑此页**"入口，直接在 GitHub 修改 Markdown 文件即可，无需本地环境。

### 分享与推广

- 在社交媒体上分享使用体验
- 向同行设计师推荐

## 开发环境

```bash
# 克隆仓库
git clone https://github.com/hanshaoUi/hopeflow-toolbox.git

# 安装插件依赖
cd hopeflow-toolbox
npm install
npm run dev

# 常用检查
npm run build
npm run lint
npm run typecheck

# 开发文档站
cd hopeflow-docs
npm install
npm run docs:dev
```

## 脚本开发规范

- 文件名使用 kebab-case 或现有目录风格，保持与仓库同类脚本一致
- 脚本顶部添加注释说明功能、参数和注意事项
- 操作前检查选区，空选区时给出友好提示
- 如涉及复杂功能，补充 `src/registry/scripts/*.ts` 参数配置，确保面板侧可以直接调用
- 避免修改文档属性（单位、颜色模式等），除非这是工具的明确目的
