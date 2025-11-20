"use client";

import { MenuToggle } from "@/components/component-x/menu-toggle";
import { useState } from "react";

export function MenuTogglePreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-full">
      <div className="flex items-center gap-4">
        <MenuToggle onOpenChange={setIsOpen} />
      </div>

      <div className="text-sm text-muted-foreground">
        {isOpen ? "Menu is open" : "Menu is closed"}
      </div>
    </div>
  );
}
