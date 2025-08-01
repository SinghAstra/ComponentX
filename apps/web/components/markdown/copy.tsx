"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { useToastContext } from "../providers/toast";

interface CopyProps {
  content: string;
  fileName?: string;
}

export default function Copy({ content, fileName }: CopyProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { setToastMessage } = useToastContext();

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    if (fileName) {
      setToastMessage(`Copied ${fileName}`);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div
      className="border flex gap-2 px-2 py-1 items-center justify-center rounded cursor-pointer bg-muted/30 backdrop-blur-md hover:bg-muted/60 transition-all duration-200"
      onClick={handleCopy}
    >
      {isCopied ? (
        <>
          <CheckIcon className="w-4 h-4" />
          <span className="text-base">Copied</span>
        </>
      ) : (
        <>
          <CopyIcon className="w-4 h-4" />
          <span className="text-base">Copy Code</span>
        </>
      )}
    </div>
  );
}
