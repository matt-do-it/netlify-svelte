import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "devCommand": "yarn run dev --port {PORT}",
    "postInstallCommand": "npm i --no-save @stackbit/types",
  experimental: {
    ssg: {
      name: "sveltekit",
      logPatterns: { up: [" ready in "] },
      passthrough: ["/vite-hmr/**"]
    }
    },
    contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/routes/"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/page/{slug}",
          filePath: "src/routes/{slug}/+page.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "subline", type: "string", required: true },
            { name: 'image', type: 'image' }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "static",
        publicPath: "/"
      }
    })
  ]

})
