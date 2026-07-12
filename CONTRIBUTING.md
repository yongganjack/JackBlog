# Contributing

欢迎为 Alex Blog 提交改进。这个项目目前更接近个人博客模板，贡献重点是让代码更清晰、页面更稳定、文档更容易维护。

## Development Setup

```bash
npm install
npm run dev
```

提交前请至少运行：

```bash
npm run build
```

## Branch Naming

建议使用以下命名：

```text
feat/add-pagefind-search
fix/mobile-header-overflow
docs/update-deployment-guide
chore/update-dependencies
```

## Commit Style

推荐使用简洁的 Conventional Commits：

```text
feat: add article search
fix: correct mobile header spacing
docs: update deployment guide
chore: refresh dependencies
```

## Pull Request Checklist

- 页面或组件改动已通过 `npm run build`。
- 新增图片放在 `public/images/`，并在页面中设置明确的 `width` 和 `height`。
- 交互控件有可访问名称，例如 `aria-label` 或可见文本。
- 文案变更已同步到相关文档。
- 没有提交 `node_modules/`、`dist/`、`.astro/` 或本地环境变量。

## Design Principles

- 内容优先，视觉服务阅读。
- 保持大留白、低噪声和稳定排版。
- 优先使用本地静态资源，减少外部依赖。
- 添加功能时先保持简单，再考虑扩展。

