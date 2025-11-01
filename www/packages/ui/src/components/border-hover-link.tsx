import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export interface BorderHoverLinkProps {
  children: ReactNode;
  borderColor?: string;
  className?: string;
}

const BorderHoverLink = ({
  children,
  borderColor = "hsl(var(--primary))",
  className,
}: BorderHoverLinkProps) => {
  return (
    <div className={cn("relative group cursor-pointer", className)}>
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-[1px]",
          "transition-transform duration-700",
          "scale-x-0 origin-right",
          "group-hover:scale-x-100 group-hover:origin-left"
        )}
        style={{
          backgroundColor: borderColor,
        }}
      />
    </div>
  );
};

export default BorderHoverLink;
