"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { slideFadeInVariantFromTopToBottom } from "@/lib/variants";
import { motion } from "framer-motion";
import { LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Sidebar from "../component-x/sidebar";
import MaxWidthWrapper from "../global/max-width-wrapper";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // const handleClose = () => {
  //   setIsSidebarOpen(false);
  // };

  return (
    <>
      <header
        className={cn("sticky top-0 inset-x-0 py-3 w-full z-[9] bg-background")}
      >
        <motion.div
          variants={slideFadeInVariantFromTopToBottom}
          initial="hidden"
          whileInView="visible"
        >
          <MaxWidthWrapper className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-lg font-bold logo text-primary">
                {siteConfig.name}
              </Link>

              {/* <div className="hidden lg:flex space-x-5">
                {navLinks.map((navLink) => {
                  return navLink.menu.length > 0 ? (
                    <HoverPopOver key={navLink.title}>
                      <HoverPopOverTrigger className="flex text-sm items-center gap-1 hover:bg-muted/40 transition-all duration-300 py-1 px-3 font-medium rounded group cursor-pointer">
                        {navLink.title}
                        {navLink.menu && (
                          <ChevronDown className="h-4 w-4 group-hover:-rotate-180 transition-all duration-800" />
                        )}
                      </HoverPopOverTrigger>
                      <HoverPopOverContent>
                        <div
                          className={cn(
                            "grid gap-2 p-4 md:w-[400px] bg-background  lg:w-[500px] rounded mt-4 border",
                            navLink.title === "Features"
                              ? "lg:grid-cols-[.75fr_1fr]"
                              : "lg:grid-cols-2"
                          )}
                        >
                          {navLink.title === "Features" && (
                            <div className="row-span-4 relative rounded overflow-hidden">
                              <div className="z-20 relative h-full">
                                <GridBackground gridDimension="16" />
                                <Link
                                  href="/"
                                  className="flex h-full w-full select-none flex-col justify-end rounded bg-gradient-to-b from-muted/30 to-muted/60 p-4 "
                                >
                                  <h6 className="mb-2 mt-4 text-lg font-medium">
                                    All Features
                                  </h6>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Manage links, track performance, and more.
                                  </p>
                                </Link>
                              </div>
                            </div>
                          )}
                           {navLink.menu.map((menuItem) => (
                            <ListItem
                              key={menuItem.title}
                              title={menuItem.title}
                              href={menuItem.href}
                              Icon={menuItem.icon}
                            >
                              {menuItem.tagline}
                            </ListItem>
                          ))} 
                        </div>
                      </HoverPopOverContent>
                    </HoverPopOver>
                  ) : (
                    <Link
                      key={navLink.title}
                      href={navLink.href}
                      className="flex text-sm items-center gap-1 hover:bg-muted/40 cursor-pointer transition-all duration-300 py-1 px-3 font-medium rounded group"
                    >
                      {navLink.title}
                    </Link>
                  );
                })}
              </div> */}
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </MaxWidthWrapper>
        </motion.div>
      </header>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        direction="right"
      >
        <div className="flex flex-col items-start w-60  p-4 h-full bg-background/60">
          <Link href="/" className="text-lg font-bold logo mb-2 text-primary">
            {siteConfig.name}
          </Link>

          {/* <ul className="flex flex-1 flex-col items-start">
            <Accordion type="single" collapsible className="w-full">
              {navLinks.map((link) => (
                <AccordionItem
                  key={link.title}
                  value={link.title}
                  className="last:border-none"
                >
                  {link.menu.length > 0 ? (
                    <>
                      <AccordionTrigger>{link.title}</AccordionTrigger>
                       <AccordionContent className="ml-4 pb-2">
                        <ul onClick={handleClose} className={cn("w-full")}>
                          {link.menu.map((menuItem) => (
                            <ListItem
                              key={menuItem.title}
                              title={menuItem.title}
                              href={menuItem.href}
                              Icon={menuItem.icon}
                            >
                              {menuItem.tagline}
                            </ListItem>
                          ))}
                        </ul>
                      </AccordionContent> 
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleClose}
                      className="flex items-center w-full p-2 font-normal"
                    >
                      <span>{link.title}</span>
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </ul> */}
        </div>
      </Sidebar>
    </>
  );
};

const ListItem = ({
  href,
  title,
  Icon,
  children,
}: {
  href: string;
  title: string;
  Icon: LucideIcon;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "space-y-1 rounded p-3 transition-all duration-300 hover:bg-muted/40 "
      )}
    >
      <div className="flex items-center space-x-2 text-foreground/80">
        <Icon className="h-4 w-4" />
        <h6 className="text-sm font-medium !leading-none">{title}</h6>
      </div>
      <p className="line-clamp-1 text-sm text-muted-foreground">{children}</p>
    </Link>
  );
};
ListItem.displayName = "ListItem";

export default Navbar;
