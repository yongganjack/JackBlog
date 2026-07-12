# Deployment

Alex Blog 是 Astro 静态站点，运行 `npm run build` 后会生成 `dist/` 目录。大多数静态托管平台都可以直接部署。

## Build Command

```bash
npm install
npm run build
```

构建产物：

```text
dist/
```

## Vercel

1. 将仓库推送到 GitHub。
2. 在 Vercel 导入仓库。
3. Framework Preset 选择 `Astro`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。

## Netlify

1. 在 Netlify 新建站点并连接 GitHub 仓库。
2. Build Command 填写 `npm run build`。
3. Publish Directory 填写 `dist`。

## Cloudflare Pages

1. 在 Cloudflare Pages 连接 GitHub 仓库。
2. Framework Preset 选择 `Astro`。
3. Build Command 填写 `npm run build`。
4. Build Output Directory 填写 `dist`。

## GitHub Pages

仓库中已提供 GitHub Actions workflow 示例：`.github/workflows/deploy.yml`。

使用前需要在 GitHub 仓库设置中启用：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

然后推送到 `main` 分支即可触发部署。

## Environment Variables

当前版本不依赖必需环境变量。可复制 `.env.example` 作为本地配置起点：

```bash
cp .env.example .env
```

Windows PowerShell：

```powershell
Copy-Item .env.example .env
```

