# Content Guide

这份文档说明如何维护站点内容、替换图片和扩展页面。

## Site Info

站点基本信息在 `src/data/site.ts` 的 `siteConfig` 中：

```ts
export const siteConfig = {
  name: "Alex Blog",
  description: "一个记录技术、分享思考与持续创造的静态个人博客。",
  author: "Alex",
  role: "AI 工程师｜全栈开发者｜独立开发者｜开源爱好者"
};
```

修改站名、作者身份、邮箱和社交链接时，从这里开始。

## Articles

文章数据位于 `articles` 数组。每篇文章包含：

- `title`：文章标题。
- `slug`：文章标识，后续迁移动态路由时可作为 URL。
- `excerpt`：摘要。
- `date` / `updated`：发布日期和更新时间。
- `readTime`：阅读时间。
- `category`：分类。
- `tags`：标签。
- `cover`：封面图路径。
- `featured`：是否在首页精选区域展示。

当前 `/post` 是演示详情页。后续可以改成动态路由：

```text
src/pages/post/[slug].astro
```

## Projects

项目数据位于 `projects` 数组。建议每个项目包含：

- 项目名称。
- 一句话说明。
- 技术栈。
- GitHub 链接。
- Demo 链接。
- 项目缩略图。

## Images

图片放在 `public/images/`。页面引用方式：

```astro
<img src="/images/example.svg" alt="图片说明" width="720" height="420" />
```

建议：

- 文章封面保持 `720x420`。
- 项目缩略图保持 `640x400`。
- Hero 插画保持 `900x720`。
- 装饰图片使用 `alt=""`。
- 重要内容图片写清楚 `alt`。

## Tags and Categories

分类和标签用于首页、文章列表、标签页和搜索页。更新 `categories` 和 `tags` 后，相关页面会自动读取新数据。

## Copywriting

这个站点的文案基调是：

- 清晰具体。
- 少用营销式夸张表达。
- 技术内容优先描述问题、方法和经验。
- 按中文阅读习惯保持短句和明确段落。

