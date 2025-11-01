"use client";

import React, { useState } from "react";
import { FileOrLinkUpload, UploadItem } from "./file-or-link-upload";

function UploadPage() {
  const [items, setItems] = useState<UploadItem[]>([]);
  const [rejections, setRejections] = useState<
    { item: File | string; reason: string }[]
  >([]);

  const myLinkValidator = (url: string) => {
    if (!url.startsWith("http")) return "URL must start with http/https";
    if (url.length < 10) return "URL is too short";
    return true;
  };

  return (
    <main className="mx-auto w-full max-w-3xl p-6 min-h-screen flex flex-col gap-4 items-center justify-center">
      <FileOrLinkUpload
        label="Files & Links"
        description="Upload images, documents, or paste external links."
        accept={["image/*", ".pdf", ".docx"]}
        maxFiles={5}
        maxSize={10 * 1024 * 1024}
        value={items}
        onChange={setItems}
        onReject={(r) => setRejections(r)}
        linkValidator={myLinkValidator}
      />

      {rejections.length > 0 && (
        <div className="rounded border p-3 bg-muted/20 w-full">
          <p className="text-sm font-medium text-primary">
            Some items were rejected:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            {rejections.map((r, idx) => (
              <li
                key={`rejection-${idx}`}
                className="text-sm text-muted-foreground"
              >
                <span className="font-semibold">
                  {typeof r.item === "string" ? r.item : r.item.name}
                </span>
                {" — "}
                {r.reason}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default UploadPage;
