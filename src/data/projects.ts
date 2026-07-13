import { getCollection, type CollectionEntry } from "astro:content";

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  href: string;
  image: string;
  order: number;
};

type ProjectMetadata = Omit<Project, "description" | "href"> & {
  fallbackDescription: string;
};

const projectMetadata: Record<string, ProjectMetadata> = {
  README_LLM: {
    slug: "llm",
    name: "LLM Research Project",
    fallbackDescription:
      "大模型入门学习与实践项目，从 API 调用逐步深入到 LangChain、结构化输出、Agent 工具调用和本地知识检索。",
    stack: ["Python", "LangChain", "Ollama", "DeepSeek", "Agent"],
    github: "https://github.com/yongganjack/LLM",
    image: "/images/project-agent.svg",
    order: 1
  },
  README_PersonalBlog: {
    slug: "personalblog",
    name: "PersonalBlog",
    fallbackDescription:
      "基于 Astro 和 Tailwind CSS 的静态个人博客，内置内容集合、深色模式、搜索、标签分类和响应式布局。",
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yongganjack/PersonalBlog",
    image: "/images/project-blog.svg",
    order: 2
  }
};

const stripMarkup = (value: string) =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/[`*_~>|#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value: string, maxLength = 112) =>
  value.length > maxLength ? `${value.slice(0, maxLength).trim()}...` : value;

const getProjectKey = (entry: CollectionEntry<"project">) => entry.id.replace(/\.mdx?$/, "");

const titleFromBody = (body: string) => {
  const htmlTitle = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const markdownTitle = body.match(/^#\s+(.+)$/m)?.[1];
  const title = stripMarkup(htmlTitle ?? markdownTitle ?? "");
  return title || undefined;
};

const descriptionFromBody = (body: string) => {
  const introSection = body.match(/##\s+.*项目简介.*\r?\n([\s\S]*?)(?:\r?\n---|\r?\n##\s+)/)?.[1];
  const source = introSection ?? body;
  const paragraph = source
    .split(/\r?\n\r?\n/)
    .map((block) => stripMarkup(block))
    .find((block) => block.length > 28 && !block.includes("img.shields.io") && !block.includes("github.com"));

  return paragraph ? truncate(paragraph) : undefined;
};

const stackFromBody = (body: string) =>
  Array.from(body.matchAll(/alt="([^"]+)"/g), (match) => stripMarkup(match[1]))
    .filter((item) => item && !/status|commit|repo size|license|progress/i.test(item))
    .slice(0, 5);

export const toProject = (entry: CollectionEntry<"project">): Project | undefined => {
  const key = getProjectKey(entry);
  const metadata = projectMetadata[key];
  if (!metadata) return undefined;

  const bodyStack = stackFromBody(entry.body);

  return {
    slug: metadata.slug,
    name: entry.data.title ?? metadata.name ?? titleFromBody(entry.body),
    description: entry.data.description ?? descriptionFromBody(entry.body) ?? metadata.fallbackDescription,
    stack: entry.data.stack.length > 0 ? entry.data.stack : bodyStack.length > 0 ? bodyStack : metadata.stack,
    github: entry.data.github ?? metadata.github,
    demo: entry.data.demo,
    href: `/projects/${metadata.slug}`,
    image: entry.data.image ?? metadata.image,
    order: entry.data.order ?? metadata.order
  };
};

export async function getProjects() {
  const entries = await getCollection("project");
  return entries
    .map(toProject)
    .filter((project): project is Project => Boolean(project))
    .sort((projectA, projectB) => projectA.order - projectB.order);
}

export async function getProjectEntries() {
  const entries = await getCollection("project");
  return entries
    .map((entry) => {
      const project = toProject(entry);
      return project ? { entry, project } : undefined;
    })
    .filter((item): item is { entry: CollectionEntry<"project">; project: Project } => Boolean(item))
    .sort((itemA, itemB) => itemA.project.order - itemB.project.order);
}
