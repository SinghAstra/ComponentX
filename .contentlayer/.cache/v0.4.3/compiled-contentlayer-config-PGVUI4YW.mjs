// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkCodeImport from "remark-code-import";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "boolean", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => {
        console.log("doc is ", doc);
        return doc._raw.flattenedPath;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkCodeImport],
    rehypePlugins: [rehypeSlug, rehypePrettyCode]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PGVUI4YW.mjs.map
