"use client";

import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronRight, FolderClosedIcon, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    name: "Page 1 ",
    count: 18,
    href: "/pages/page-1",
  },
  { name: "Page 2", count: 8, href: "/pages/page-2" },
  { name: "Page 3", count: 4, href: "/pages/page-3" },
  { name: "Page 4", count: 4, href: "/pages/page-4" },
  { name: "Page 5", count: 4, href: "/pages/page-5" },
];

function SidebarNav() {
  const pathName = usePathname();
  return (
    <SidebarMenu>
      <SidebarMenuItem className="px-2">
        <SidebarMenuButton
          asChild
          className="hover:bg-muted/60 transition-all duration-300 rounded"
        >
          <Link href="/home">
            <Home />
            <span>Home</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarGroup className="py-0">
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroupLabel
            asChild
            className="group/label mb-1 rounded text-sidebar-foreground hover:bg-muted/60 hover:text-sidebar-accent-foreground w-full text-sm transition-all duration-300"
          >
            <CollapsibleTrigger>
              <FolderClosedIcon className="mr-2" />
              Pages
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex justify-between px-2 py-1 group rounded hover:text-foreground hover:bg-muted/60 transition-all duration-300 ${
                        pathName.includes(item.href)
                          ? "bg-muted/60 text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                      <Badge
                        variant="outline"
                        className="group-hover:bg-background font-normal"
                      >
                        {item.count}
                      </Badge>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroup>
    </SidebarMenu>
  );
}

export default SidebarNav;
