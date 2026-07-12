export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  updated?: string;
  readTime: string;
  category: string;
  tags: string[];
  cover: string;
  featured?: boolean;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  author: string;
  role: string;
  socials: {
    github: string;
    email: string;
    rss: string;
    x: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Alex Blog",
  description: "一个记录技术、分享思考与持续创造的静态个人博客。",
  author: "Alex",
  role: "AI 工程师｜全栈开发者｜独立开发者｜开源爱好者",
  socials: {
    github: "https://github.com",
    email: "mailto:alex@example.com",
    rss: "/rss.xml",
    x: "https://x.com"
  }
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "文章", href: "/archive" },
  { label: "标签", href: "/tags" },
  { label: "项目", href: "/projects" },
  { label: "关于", href: "/about" }
];

export const articles: Article[] = [
  {
    title: "如何构建一个 AI 驱动的个人知识库",
    slug: "ai-knowledge-base",
    excerpt: "从资料收集、嵌入检索到问答体验，记录一次面向长期写作的知识系统设计。",
    date: "2026-06-20",
    updated: "2026-06-24",
    readTime: "8 分钟阅读",
    category: "AI",
    tags: ["AI", "LLM", "RAG"],
    cover: "/images/cover-ai.svg",
    featured: true
  },
  {
    title: "我如何设计自己的独立开发工作流",
    slug: "indie-workflow",
    excerpt: "用轻量工具串起灵感、任务、发布和复盘，让个人项目保持稳定前进。",
    date: "2026-06-18",
    readTime: "6 分钟阅读",
    category: "独立开发",
    tags: ["效率", "产品设计", "工程实践"],
    cover: "/images/cover-workflow.svg",
    featured: true
  },
  {
    title: "从零开始搭建现代化个人博客",
    slug: "modern-personal-blog",
    excerpt: "Astro、Tailwind、MDX 与静态部署的组合，让博客足够快，也足够好维护。",
    date: "2026-06-15",
    updated: "2026-06-16",
    readTime: "10 分钟阅读",
    category: "开发",
    tags: ["Astro", "Tailwind", "静态站点"],
    cover: "/images/cover-blog.svg",
    featured: true
  },
  {
    title: "使用 LLM 构建智能问答系统的实践与思考",
    slug: "llm-qa-system",
    excerpt: "模型能力很重要，但上下文组织、评测集和失败兜底决定了系统是否可用。",
    date: "2026-06-12",
    readTime: "7 分钟阅读",
    category: "AI",
    tags: ["LLM", "Python", "评测"],
    cover: "/images/cover-llm.svg"
  },
  {
    title: "Rust 在后端服务中的错误处理模式",
    slug: "rust-error-patterns",
    excerpt: "从 thiserror 到 anyhow，再到接口边界的错误映射，整理我常用的实践。",
    date: "2026-06-10",
    readTime: "9 分钟阅读",
    category: "后端",
    tags: ["Rust", "后端", "工程实践"],
    cover: "/images/cover-rust.svg"
  },
  {
    title: "Next.js 14 的组件边界与渲染选择",
    slug: "next-component-boundaries",
    excerpt: "在 Server Components 与 Client Components 之间做选择，不只是性能问题。",
    date: "2026-06-08",
    readTime: "5 分钟阅读",
    category: "前端",
    tags: ["Next.js", "React", "性能"],
    cover: "/images/cover-next.svg"
  },
  {
    title: "Docker 常用命令总结",
    slug: "docker-cheatsheet",
    excerpt: "把镜像、容器、网络和日志命令整理成一份日常可查的速记表。",
    date: "2026-06-05",
    readTime: "5 分钟阅读",
    category: "工具",
    tags: ["Docker", "Linux", "DevOps"],
    cover: "/images/cover-docker.svg"
  },
  {
    title: "如何优雅地设计一个系统的权限模型",
    slug: "permission-model",
    excerpt: "从 RBAC、ABAC 到资源边界，讨论权限系统可维护性的几个关键问题。",
    date: "2026-06-02",
    readTime: "8 分钟阅读",
    category: "架构",
    tags: ["架构", "安全", "后端"],
    cover: "/images/cover-architecture.svg"
  }
];

export const categories = [
  { name: "AI", count: 24, description: "模型应用、RAG、Agent 与生产化实践" },
  { name: "开发", count: 36, description: "全栈开发、静态站点和工程效率" },
  { name: "前端", count: 18, description: "React、Next.js、交互与可访问性" },
  { name: "后端", count: 22, description: "Rust、Go、服务设计和数据接口" },
  { name: "运维", count: 12, description: "Linux、Docker、部署和监控" },
  { name: "生活", count: 16, description: "阅读、写作、习惯与个人复盘" },
  { name: "随笔", count: 10, description: "一些不需要归档到系统里的思考" },
  { name: "工具", count: 8, description: "我正在使用和打磨的小工具" }
];

export const tags = [
  ["AI", 24],
  ["LLM", 18],
  ["Python", 20],
  ["Go", 15],
  ["Rust", 12],
  ["React", 16],
  ["Next.js", 14],
  ["TypeScript", 13],
  ["Docker", 12],
  ["Kubernetes", 10],
  ["Linux", 16],
  ["工程实践", 8],
  ["架构", 10],
  ["前端", 8],
  ["后端", 13],
  ["开发工具", 6],
  ["测试", 6],
  ["运维", 8]
] as const;

export const projects: Project[] = [
  {
    name: "ChatBot",
    description: "基于 LLM 的轻量对话机器人，支持上下文记忆与工具调用。",
    stack: ["Next.js", "TypeScript", "OpenAI"],
    github: "https://github.com",
    demo: "#",
    image: "/images/project-chatbot.svg"
  },
  {
    name: "NoteFlow",
    description: "用于整理碎片化知识的笔记工作流，支持标签、关系和回顾。",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "#",
    image: "/images/project-noteflow.svg"
  },
  {
    name: "Blog Starter",
    description: "面向内容创作者的静态博客模板，内置主题、搜索和文章组件。",
    stack: ["Astro", "Tailwind CSS", "MDX"],
    github: "https://github.com",
    demo: "#",
    image: "/images/project-blog.svg"
  },
  {
    name: "AI Agent",
    description: "一个面向个人自动化任务的 Agent 实验项目。",
    stack: ["Python", "FastAPI", "OpenAI"],
    github: "https://github.com",
    demo: "#",
    image: "/images/project-agent.svg"
  },
  {
    name: "API Mock",
    description: "本地优先的 API Mock 工具，用于前端联调和契约验证。",
    stack: ["Node.js", "Express", "Monaco"],
    github: "https://github.com",
    demo: "#",
    image: "/images/project-api.svg"
  },
  {
    name: "DevTools",
    description: "把常用开发小工具打包进浏览器扩展。",
    stack: ["TypeScript", "Chrome Extension"],
    github: "https://github.com",
    demo: "#",
    image: "/images/project-devtools.svg"
  }
];

export const timeline = [
  { year: "2026", title: "AI 工程师", body: "专注智能应用、RAG 系统与个人生产力工具。" },
  { year: "2024", title: "独立开发者", body: "开始持续发布小产品，把工程能力转化为真实作品。" },
  { year: "2021", title: "全栈开发者", body: "参与前后端一体化项目，从用户体验到服务稳定性全链路打磨。" }
];
