export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  image: string;
};

export type FriendLink = {
  name: string;
  description: string;
  url: string;
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
  name: "Jack Blog",
  description: "一个记录技术、分享思考与持续创造的静态个人博客。",
  author: "Alex",
  role: "AI 工程师｜全栈开发者｜独立开发者｜开源爱好者",
  socials: {
    github: "https://github.com/yongganjack",
    email: "mailto:jack1824871823@163.com",
    rss: "/rss.xml",
    x: "https://x.com"
  }
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "文章", href: "/archive" },
  { label: "标签", href: "/tags" },
  { label: "项目", href: "/projects" },
  { label: "友链", href: "/links" },
  { label: "关于", href: "/about" }
];

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

export const friendLinks: FriendLink[] = [
  {
    name: "伙伴小站",
    description: "记录技术学习、项目实践和日常思考的个人博客。",
    url: "https://example.com"
  },
  {
    name: "Code Notes",
    description: "分享全栈开发、工具链和效率工作流的技术笔记。",
    url: "https://example.dev"
  },
  {
    name: "AI Lab",
    description: "关注大模型应用、Agent 实验和科研工具探索。",
    url: "https://example.org"
  }
];

export const timeline = [
  { year: "2026.9-至今", title: "重庆邮电大学（在读）", body: "软件工程（专硕）" },
  { year: "2022.9-2026.6", title: "湘潭理工学院", body: "数据科学与大数据技术" },
  
];
