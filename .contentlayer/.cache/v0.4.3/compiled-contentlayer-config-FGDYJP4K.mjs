// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer2/source-files";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkCodeImport from "remark-code-import";
import remarkGfm from "remark-gfm";

// lib/toc.ts
function extractHeadings(source) {
  const headingLines = source.split("\n").filter((line) => line.match(/^#{1,6}\s/));
  return headingLines.map((raw) => {
    const match = raw.match(/^(#{1,6})\s+(.+)\r?$/);
    if (!match)
      return null;
    const [, level, title] = match;
    return {
      level: level.length,
      title,
      id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
    };
  }).filter((heading) => heading !== null);
}

// contentlayer.config.ts
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const headings = extractHeadings(doc.body.raw);
      console.log("headings is ", headings);
      return headings;
    }
  }
};
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    links: {
      type: "nested",
      of: LinksProperties
    },
    featured: {
      type: "boolean",
      default: false,
      required: false
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkCodeImport],
    rehypePlugins: [rehypeSlug, rehypeAutoLinkHeadings]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-FGDYJP4K.mjs.map
