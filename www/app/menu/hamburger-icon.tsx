"use client";

interface HamburgerIconProps {
  isOpen: boolean;
}

export function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Top Bar */}
      <div
        className={`absolute h-1 bg-primary-foreground rounded-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "w-7 top-1/2 -translate-y-1/2 rotate-45"
            : "w-6 top-[35%] -translate-y-1/2"
        }`}
      />

      {/* Bottom Bar */}
      <div
        className={`absolute h-1 bg-primary-foreground rounded-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "w-7 top-1/2 -translate-y-1/2 -rotate-45"
            : "w-4 top-[55%] -translate-y-1/2 left-2"
        }`}
      />
    </div>
  );
}
