import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    badges: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    img_url:{
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));
export default makeSource({ 
  contentDirPath: 'posts', 
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    
    },
});