---
title: "从零开始搭建现代化个人博客"
excerpt: "Astro、Tailwind、MDX 与静态部署的组合，让博客足够快，也足够好维护。"
date: "2026-06-15"
updated: "2026-06-16"
readTime: "10 分钟阅读"
category: "开发"
tags: ["Astro", "Tailwind", "静态站点"]
cover: "/images/cover-blog.svg"
featured: true
---

## 为什么选择 Astro

这个站点以内容为中心，首要目标是快速加载和稳定阅读。Astro 的 islands 架构让页面默认输出静态 HTML，只在必要时为搜索、主题切换等区域添加轻量脚本。

> 博客的核心不是框架复杂度，而是你能否持续写作、持续整理，并让读者快速进入内容。

## 项目结构设计

初版把站点信息、文章、分类、标签和项目集中维护在数据模块中。迁移到内容集合后，Markdown 文件成为文章源，页面只负责排版和消费数据。

```bash
npm create astro@latest my-blog
cd my-blog
npm install
npm run dev
```

## 写作体验优化

正文宽度控制在约 760px，行高保持在 1.8 以上，代码块、引用和图片都使用稳定的间距节奏。读者在长文章中需要的是清晰路径，而不是视觉噪声。

## 静态部署策略

静态站点可以部署到 Vercel、Cloudflare Pages 或任意对象存储。构建产物简单，缓存策略清晰，也更容易把性能预算控制在合理范围内。

## 总结

这个博客的第一版先把导航、文章、项目、搜索和关于页搭起来。它不是一次完成所有功能，而是为后续 RSS、Pagefind、Giscus 和 MDX 写作流打好底座。
