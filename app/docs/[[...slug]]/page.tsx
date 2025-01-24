"use client";

import { allDocuments } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";

const DocsPage = () => {
  const doc = allDocuments[0];

  return (
    <main className="flex-1 md:ml-64 p-4">
      <article className="prose lg:prose-xl">
        <h1>{doc.title}</h1>
        <div className="text-sm text-gray-500 mb-4">
          <p>Published on {format(parseISO(doc.date), "LLLL d, yyyy")}</p>
          {doc.tags && (
            <div className="flex gap-2 mt-2">
              {doc.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
      </article>
    </main>
  );
};

export default DocsPage;
