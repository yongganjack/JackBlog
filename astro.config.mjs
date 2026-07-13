import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jackblog.pages.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
