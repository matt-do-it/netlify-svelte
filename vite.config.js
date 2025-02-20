import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: { hmr: { path: "/vite-hmr/" } },
  plugins: [sveltekit(), tailwindcss()],
});
