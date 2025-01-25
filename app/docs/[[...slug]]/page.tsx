"use client";

import { allDocs } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";

const DocsPage = () => {
  console.log("allPosts is ", allDocs);
  const doc = allDocs[0];
  console.log("doc is ", doc);
  const MDXContent = useMDXComponent(doc.body.code);
  console.log("MDXContent is ", MDXContent);

  return (
    <main className="flex-1 md:ml-64 p-4">
      <article className="prose lg:prose-xl">
        <MDXContent />
      </article>
    </main>
  );
};

export default DocsPage;
