"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1 cursor-pointer"
    >
      {isCopied ? (
        <>
          <Check className="w-3.5 h-3.5 text-primary" />
          <span className="text-primary">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          Copy
        </>
      )}
    </button>
  );
}