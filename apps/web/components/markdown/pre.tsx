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
    <div className="relative rounded w-full border mx-auto ">
      <div className="overflow-x-auto relative">
        <div className="absolute top-2 right-2">
          <Copy content={raw!} fileName={filename} />
        </div>
        <pre {...rest}>{children}</pre>
      </div>
    </div>
  );
}
