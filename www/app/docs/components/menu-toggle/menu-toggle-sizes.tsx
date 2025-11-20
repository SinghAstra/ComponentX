"use client";

import { MenuToggle } from "@/components/component-x/menu-toggle";

export function MenuToggleSizes() {
  return (
    <div className="flex items-center justify-center gap-8 w-full h-full">
      <MenuToggle size="sm" />
      <MenuToggle size="md" />
      <MenuToggle size="lg" />
    </div>
  );
}
