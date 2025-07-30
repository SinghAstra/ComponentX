import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface BorderHoverLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

const BorderHoverLink = ({
  href,
  children,
  isActive,
  className,
  ...props
}: BorderHoverLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-block transition-colors duration-300 text-muted-foreground hover:text-foreground group ",
        isActive && "text-foreground",
        className
      )}
      {...props}
      target="_blank"
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-right transition-transform duration-700 group-hover:scale-x-100 group-hover:origin-left",
          isActive ? "scale-x-100" : "scale-x-0"
        )}
      />
    </Link>
  );
};

export default BorderHoverLink;
