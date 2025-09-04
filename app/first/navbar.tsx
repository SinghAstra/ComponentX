"use client";

import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "@/components/component-x/hover-popover";
import { Button } from "@/components/ui/button";

import {
  BarChart2,
  Book,
  BookOpen,
  Briefcase,
  Bug,
  Github,
  GraduationCap,
  HelpCircle,
  LayoutTemplate,
  LifeBuoy,
  MessageCircle,
  MessageCircleQuestion,
  MessageSquare,
  Network,
  Newspaper,
  Sparkles,
  Twitter,
  Upload,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    name: "Product",
    href: "#",
    content: [
      {
        icon: Sparkles,
        title: "AI",
        description: "Set your ideas free",
        href: "#",
      },
      {
        icon: LayoutTemplate,
        title: "Design",
        description: "Create with ease",
        href: "#",
      },
      {
        icon: MessageCircle,
        title: "Collaborate",
        description: "Build together",
        href: "#",
      },
      {
        icon: Upload,
        title: "Publish",
        description: "Launch instantly",
        href: "#",
      },
      {
        icon: BarChart2,
        title: "Scale",
        description: "Grow your reach",
        href: "#",
      },
    ],
  },
  {
    name: "Teams",
    href: "#",
    content: [
      {
        icon: Users,
        title: "Team Management",
        description: "Manage your team",
        href: "#",
      },
      {
        icon: Briefcase,
        title: "Projects",
        description: "Collaborate on projects",
        href: "#",
      },
      {
        icon: Network,
        title: "Connections",
        description: "Connect with colleagues",
        href: "#",
      },
      {
        icon: Workflow,
        title: "Workflows",
        description: "Streamline workflows",
        href: "#",
      },
    ],
  },
  {
    name: "Resources",
    href: "#",
    content: [
      {
        icon: BookOpen,
        title: "Documentation",
        description: "Learn how to use our product",
        href: "#",
      },
      {
        icon: Newspaper,
        title: "Blog",
        description: "Read our latest articles",
        href: "#",
      },
      {
        icon: GraduationCap,
        title: "Tutorials",
        description: "Step-by-step guides",
        href: "#",
      },
      {
        icon: HelpCircle,
        title: "Support Center",
        description: "Find answers to your questions",
        href: "#",
      },
    ],
  },
  {
    name: "Community",
    href: "#",
    content: [
      {
        icon: Users,
        title: "Forum",
        description: "Discuss with other users",
        href: "#",
      },
      {
        icon: MessageSquare,
        title: "Discord",
        description: "Join our Discord server",
        href: "#",
      },
      {
        icon: Github,
        title: "GitHub",
        description: "Contribute to our open source projects",
        href: "#",
      },
      {
        icon: Twitter,
        title: "Social Media",
        description: "Follow us on social media",
        href: "#",
      },
    ],
  },
  {
    name: "Help",
    href: "#",
    content: [
      {
        icon: LifeBuoy,
        title: "Support",
        description: "Get help from our team",
        href: "#",
      },
      {
        icon: Book,
        title: "Knowledge Base",
        description: "Browse articles and guides",
        href: "#",
      },
      {
        icon: MessageCircleQuestion,
        title: "FAQs",
        description: "Frequently asked questions",
        href: "#",
      },
      {
        icon: Bug,
        title: "Report a Bug",
        description: "Let us know about issues",
        href: "#",
      },
    ],
  },
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 ">
          <span className="text-lg font-bold">Framer</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((navItem) => (
            <div key={navItem.name} className="relative group">
              {navItem.content ? (
                <HoverPopOver>
                  <HoverPopOverTrigger>
                    <Link
                      href={navItem.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {navItem.name}
                    </Link>
                  </HoverPopOverTrigger>
                  <HoverPopOverContent className="bg-background">
                    <div className="flex flex-col w-64 border p-2 mt-5 shadow-xl">
                      {navItem.content.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-3 rounded p-2 hover:bg-muted/30 transition-all duration-300"
                        >
                          <div className="bg-muted/60 rounded p-2 ">
                            <item.icon className="h-5 w-5 text-foreground " />
                          </div>
                          <div>
                            <div className="text-sm text-foreground">
                              {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </HoverPopOverContent>
                </HoverPopOver>
              ) : (
                <Link
                  href={navItem.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {navItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </Link>
          <Button
            className="rounded transition-colors"
            variant="default"
            size="sm"
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
