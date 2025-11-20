"use client";

import { useState } from "react";
import { HamburgerIcon } from "./hamburger-icon";

interface HamburgerMenuProps {
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

export function HamburgerMenu({
  onToggle,
  className = "",
}: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-12 h-12 rounded-lg bg-primary hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <HamburgerIcon isOpen={isOpen} />
    </button>
  );
}
