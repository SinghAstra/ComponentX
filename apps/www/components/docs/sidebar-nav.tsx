import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import Link from "next/link";

function SidebarNav({
  pathname,
  onLinkClick,
}: {
  pathname: string;
  onLinkClick?: () => void;
}) {
  return (
    <div className="w-full pb-24">
      {docsConfig.sidebarNav.map((section, index) => (
        <div key={index} className="flex flex-col gap-1 mb-6">
          <h4 className="py-1 pl-1 text-xs tracking-widest text-muted-foreground uppercase">
            {section.title}
          </h4>
          <div className="space-y-1 text-sm pl-3 mt-1">
            {section.items.map((item, itemIndex) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={itemIndex}
                  href={item.href}
                  onClick={onLinkClick}
                  className={cn(
                    "group flex h-8 w-full items-center pl-4 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all border-l-2 border-muted hover:border-primary",
                    isActive &&
                      "bg-muted/40 border-primary text-foreground font-medium",
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidebarNav;
