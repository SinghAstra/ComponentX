"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface MenuToggleProps {
  onOpenChange?: (isOpen: boolean) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  ariaLabel?: string;
}

export function MenuToggle({
  onOpenChange,
  className,
  size = "md",
  disabled = false,
  ariaLabel,
}: MenuToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (disabled) return;
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const lineClasses = {
    sm: "h-0.5",
    md: "h-0.5",
    lg: "h-1",
  };

  return (
    <button
      className={cn(
        "hover:bg-muted/20 transition-all duration-300 rounded relative border",
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={toggleMenu}
      aria-label={ariaLabel || (isOpen ? "Close menu" : "Open menu")}
      disabled={disabled}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center
             transition-all duration-300 ease-in-out  ${isOpen ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex flex-col gap-2 items-start">
          <div
            className={cn(
              `bg-foreground transition-all duration-300 ml-1`,
              lineClasses[size],
              size === "sm" ? "w-4" : size === "md" ? "w-5" : "w-6",
              isOpen
                ? `rotate-45 ${size === "sm" ? "w-5" : size === "md" ? "w-6" : "w-7"}`
                : "rotate-0"
            )}
          ></div>
          <div
            className={cn(
              `bg-foreground transition-all duration-300`,
              lineClasses[size],
              size === "sm" ? "w-3" : size === "md" ? "w-4" : "w-5",
              isOpen
                ? `-rotate-45 ${size === "sm" ? "w-5" : size === "md" ? "w-6" : "w-7"}`
                : "rotate-0"
            )}
          ></div>
        </div>
      </div>

      <div
        className={`absolute w-full inset-0 flex items-center justify-center`}
      >
        <X
          className={cn(
            `text-foreground transition-all duration-300`,
            iconSizeClasses[size],
            isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
          )}
        />
      </div>
    </button>
  );
}
