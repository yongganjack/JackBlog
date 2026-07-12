# Architecture

Alex Blog 使用 Astro 的文件路由和静态生成能力构建。当前版本不依赖后端服务，所有演示内容来自本地 TypeScript 数据。

## Runtime Model

- 页面由 `src/pages/*.astro` 生成。
- 公共布局在 `src/layouts/BaseLayout.astro`。
- 复用 UI 组件在 `src/components/`。
- 示例内容在 `src/data/site.ts`。
- 本地静态素材在 `public/images/`。

## Data Flow

```text
src/data/site.ts
        ↓
Astro pages
        ↓
Reusable components
        ↓
Static HTML/CSS/JS
```

页面不直接重复写文章、项目、标签等内容。新增或修改内容时优先更新数据层，再让页面消费数据。

## Component Boundaries

- `Header` / `Footer`：全站导航和页脚。
- `ArticleCard`：文章摘要卡片，支持普通、紧凑和横向布局。
- `ProjectCard`：项目展示卡片。
- `SearchBox`：静态搜索筛选 UI。
- `ThemeToggle`：深色模式切换，使用 `localStorage` 记忆偏好。
- `Toc`：文章详情页目录。
- `CodeBlock`：代码块展示。

## Styling

全局设计变量位于 `src/styles/global.css`：

- 背景、文本、边框、主色等通过 CSS 变量控制。
- `.dark` 类控制深色模式。
- Tailwind 负责布局、间距和组件局部样式。

## Future Content Collection Migration

如果后续要迁移到 MDX，可新增 Astro Content Collections：

```text
src/content/blog/*.mdx
src/content/projects/*.mdx
```

然后保留现有组件，只替换数据来源。这样页面结构和视觉系统不需要重写。

