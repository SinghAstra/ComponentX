import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { FileUploader } from "../file/file-upload";

const FileUploaderShowcase = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [rejections, setRejections] = useState<
    { file: File; reason: string }[]
  >([]);
  return (
    <div className="col-span-2 row-span-1 overflow-y-auto  border border-neutral-800 rounded bg-background relative flex flex-col gap-4 h-[400px] ">
      <div className="absolute top-2 right-2">
        <Link href="/docs/components/text-shine">
          <Button
            variant={"outline"}
            size={"sm"}
            className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
          >
            View Docs
          </Button>
        </Link>
      </div>
      <FileUploader
        label="Images"
        description="Drag and drop images here, or click to browse."
        accept={["image/*", ".png", ".jpg", ".jpeg", ".gif", ".webp"]}
        multiple
        maxFiles={6}
        maxSize={8 * 1024 * 1024}
        value={files}
        onChange={setFiles}
        onReject={(r) => setRejections(r)}
      />

      {rejections.length > 0 && (
        <div className="rounded border p-3 bg-muted/20 w-full">
          <p className="text-sm">Some files were rejected:</p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            {rejections.map((r, idx) => (
              <li
                key={`${r.file.name}-${idx}`}
                className="text-sm text-muted-foreground"
              >
                <span>{r.file.name}</span>
                {" — "}
                {r.reason}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploaderShowcase;
