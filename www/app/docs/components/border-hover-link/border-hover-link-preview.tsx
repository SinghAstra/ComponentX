"use client";

import BorderHoverLink from "@/components/component-x/border-hover-link";

export function BorderHoverLinkPreview() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <BorderHoverLink
        borderPosition="bottom"
        borderColor="hsl(var(--primary))"
        duration={700}
        className="bg-background px-3 py-1 cursor-pointer rounded overflow-hidden"
      >
        Hover over me
      </BorderHoverLink>
    </div>
  );
}
