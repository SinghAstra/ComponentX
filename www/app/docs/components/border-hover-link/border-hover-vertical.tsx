"use client";

import BorderHoverLink from "@/components/component-x/border-hover-link";

export function BorderHoverVertical() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      <div className="relative flex-none w-full h-32 overflow-hidden border flex items-center justify-center bg-muted/30">
        <BorderHoverLink
          borderPosition="left"
          borderColor="hsl(var(--primary))"
          animationDirection="ltr"
          duration={700}
        >
          <p className="text-foreground">Left Border (↓)</p>
        </BorderHoverLink>
      </div>
      <div className="relative flex-none w-full h-32 overflow-hidden border flex items-center justify-center bg-muted/30">
        <BorderHoverLink
          borderPosition="right"
          borderColor="hsl(var(--primary))"
          animationDirection="rtl"
          duration={700}
        >
          <p className="text-foreground">Right Border (↑)</p>
        </BorderHoverLink>
      </div>
    </div>
  );
}
