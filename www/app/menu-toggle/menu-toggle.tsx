"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Button
      variant={"outline"}
      className="hover:bg-muted/20 transition-all duration-300 rounded relative border border-purple-400"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div
        className={`absolute inset-0 flex flex-col gap-2 items-start justify-center
             transition-all duration-300 ease-in-out  ${
               isOpen ? "opacity-0" : "opacity-100"
             }`}
      >
        <div
          className={`w-6 h-0.5 bg-foreground transition-all duration-300 ml-auto  ${
            isOpen ? "rotate-45 w-8" : "rotate-0"
          }`}
        ></div>
        <div
          className={`w-4 h-0.5 bg-foreground transition-all duration-300 ${
            isOpen ? "-rotate-45 w-8" : "rotate-0"
          }`}
        ></div>
      </div>

      <div
        className={`absolute w-full inset-0 flex items-center justify-center`}
      >
        <X
          className={`transition-all w-24 h-24 text-foreground duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"}`}
        />
      </div>
    </Button>
  );
}
