import { getCollection, type CollectionEntry } from "astro:content";

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
  featured: boolean;
};

export type Category = {
  name: string;
  count: number;
  description: string;
};

const categoryDescriptions: Record<string, string> = {
  AI: "模型应用、RAG、Agent 与生产化实践",
  独立开发: "个人产品、工作流和独立项目实践",
  开发: "全栈开发、静态站点和工程效率",
  后端: "Rust、Go、服务设计和数据接口",
  前端: "React、Next.js、交互与可访问性",
  工具: "我正在使用和打磨的小工具",
  架构: "系统设计、权限模型和长期可维护性",
  随笔: "不需要归档到固定主题里的记录与思考"
};

const toDateString = (date: Date) => date.toISOString().slice(0, 10);

const slugFromEntry = (entry: CollectionEntry<"blog">) => entry.slug;

const titleFromEntry = (entry: CollectionEntry<"blog">) => {
  const heading = entry.body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return entry.data.title ?? heading ?? slugFromEntry(entry);
};

const excerptFromEntry = (entry: CollectionEntry<"blog">) => {
  if (entry.data.excerpt) return entry.data.excerpt;

  const firstParagraph = entry.body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith("---") && !block.startsWith(">"));
  const plainText = (firstParagraph ?? titleFromEntry(entry))
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_~\\]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return plainText.length > 96 ? `${plainText.slice(0, 96)}...` : plainText;
};

const readTimeFromEntry = (entry: CollectionEntry<"blog">) => {
  const estimatedMinutes = Math.max(1, Math.ceil(entry.body.replace(/\s+/g, "").length / 500));
  return `${estimatedMinutes} 分钟阅读`;
};

export const toArticle = (entry: CollectionEntry<"blog">): Article => ({
  title: titleFromEntry(entry),
  slug: slugFromEntry(entry),
  excerpt: excerptFromEntry(entry),
  date: toDateString(entry.data.date ?? new Date("2026-07-13")),
  updated: entry.data.updated ? toDateString(entry.data.updated) : undefined,
  readTime: entry.data.readTime ?? readTimeFromEntry(entry),
  category: entry.data.category ?? "随笔",
  tags: entry.data.tags,
  cover: entry.data.cover ?? "/images/cover-blog.svg",
  featured: entry.data.featured
});

const byNewest = (articleA: Article, articleB: Article) =>
  new Date(articleB.date).getTime() - new Date(articleA.date).getTime();

const countBy = (items: string[]) =>
  items.reduce<Record<string, number>>((counts, item) => {
    counts[item] = (counts[item] ?? 0) + 1;
    return counts;
  }, {});

export async function getArticles() {
  const entries = await getCollection("blog");
  return entries.map(toArticle).sort(byNewest);
}

export async function getCategories(articles?: Article[]): Promise<Category[]> {
  const sourceArticles = articles ?? (await getArticles());
  return Object.entries(countBy(sourceArticles.map((article) => article.category))).map(([name, count]) => ({
    name,
    count,
    description: categoryDescriptions[name] ?? `${name} 相关文章`
  }));
}

export async function getTags(articles?: Article[]): Promise<Array<[string, number]>> {
  const sourceArticles = articles ?? (await getArticles());
  return Object.entries(countBy(sourceArticles.flatMap((article) => article.tags))).sort(
    ([tagA, countA], [tagB, countB]) => countB - countA || tagA.localeCompare(tagB, "zh-CN")
  );
}
