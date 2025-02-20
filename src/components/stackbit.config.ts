import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "devCommand": "yarn ember serve --port={PORT}",
    "postInstallCommand": "npm i --no-save @stackbit/types",
    experimental: {
    ssg: {
      name: "ember",
      logPatterns: { up: ["Serving on"] },
      passthrough: []
    }
  },
    contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/page/{slug}",
          filePath: "content/pages/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "subline", type: "string", required: true },
            { name: 'image', type: 'image' }
          ]
        },
                {
          name: "People",
          type: "data",
          filePath: "public/data/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "assets/images",
        publicPath: "/"
      }
    })
  ]

})
