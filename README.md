# Alex Blog

Alex Blog 是一个基于 Astro + Tailwind CSS 的静态个人博客模板。它围绕“内容优先、阅读舒适、静态优先”的目标设计，适合程序员、AI 工程师、独立开发者记录技术文章、项目经验和个人思考。

## Features

- Astro 静态站点，默认输出轻量 HTML。
- Tailwind CSS 主题系统，支持浅色/深色模式。
- 8 个页面：`/`、`/archive`、`/post`、`/tags`、`/projects`、`/about`、`/search`、`/404`。
- 数据集中维护，示例内容位于 `src/data/site.ts`。
- 本地 SVG 素材，无关键视觉外链依赖。
- 搜索页提供静态 Command Palette 风格筛选体验。
- 语义化结构、跳转主内容链接、可见焦点态和响应式布局。

## Tech Stack

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Local SVG assets

## Getting Started

```bash
npm install
npm run dev
```

开发服务器默认运行在：

```text
http://127.0.0.1:4321/
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

- `dev`：启动本地开发服务器。
- `build`：执行 `astro check` 并生成静态产物。
- `preview`：本地预览构建结果。

## Project Structure

```text
.
├── public/
│   └── images/              # 本地 SVG 插画、封面、项目缩略图
├── src/
│   ├── components/          # 页面复用组件
│   ├── data/                # 站点、文章、项目、标签示例数据
│   ├── layouts/             # 全局页面布局
│   ├── pages/               # Astro 路由页面
│   └── styles/              # 全局样式与设计变量
├── docs/                    # 维护、部署与架构说明
├── temp/                    # 原始设计参考资料
└── package.json
```

## Customize Content

大部分演示内容都集中在 [src/data/site.ts](src/data/site.ts)：

- `siteConfig`：站点名称、描述、作者身份和社交链接。
- `navItems`：导航项。
- `articles`：文章列表和详情页示例数据。
- `categories` / `tags`：分类和标签。
- `projects`：项目卡片。
- `timeline`：关于页时间线。

本地图片资源位于 [public/images](public/images)。替换图片时建议保持当前宽高比例，减少布局偏移。

## Deployment

推荐部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。详细步骤见 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)。

## Documentation

- [架构说明](docs/ARCHITECTURE.md)
- [内容维护指南](docs/CONTENT_GUIDE.md)
- [部署指南](docs/DEPLOYMENT.md)
- [路线图](docs/ROADMAP.md)
- [贡献指南](CONTRIBUTING.md)
- [安全策略](SECURITY.md)

## License

本项目采用 [MIT License](LICENSE)。

