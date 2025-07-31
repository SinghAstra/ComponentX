"use client";

import { ComponentProps } from "react";
import Copy from "./copy";

export default function Pre({
  children,
  raw,
  filename,
  ...rest
}: ComponentProps<"pre"> & {
  raw?: string;
  filename?: string;
}) {
  return (
    <div className=" relative rounded  w-full border mx-auto ">
      <div className="text-sm bg-muted/30 px-3 py-1 border-b  rounded-t flex items-center justify-between">
        <span className="tracking-widest ">{filename}</span>
        <div className="ml-auto flex gap-2">
          <Copy content={raw!} fileName={filename} />
        </div>
      </div>
      <div className="overflow-x-auto p-2 ">
        <pre {...rest}>{children}</pre>
      </div>
    </div>
  );
}
