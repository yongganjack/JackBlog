import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://alex-blog.example",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
