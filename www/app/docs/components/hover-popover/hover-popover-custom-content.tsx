"use client";

import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "@/components/component-x/hover-popover";
import { Card } from "@/components/ui/card";

export function HoverPopOverCustomContent() {
  return (
    <div className="flex items-center justify-center h-64 bg-muted rounded-lg gap-8">
      <HoverPopOver align="top-center">
        <HoverPopOverTrigger>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            User Profile
          </button>
        </HoverPopOverTrigger>
        <HoverPopOverContent>
          <Card className="p-4 shadow-lg min-w-64">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">JD</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">John Doe</h4>
                <p className="text-xs text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Full-stack developer and design enthusiast.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 px-2 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90">
                Follow
              </button>
              <button className="flex-1 px-2 py-1 text-xs border border-border rounded hover:bg-muted">
                Message
              </button>
            </div>
          </Card>
        </HoverPopOverContent>
      </HoverPopOver>

      <HoverPopOver align="top-center">
        <HoverPopOverTrigger>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
            Features
          </button>
        </HoverPopOverTrigger>
        <HoverPopOverContent>
          <Card className="p-4 shadow-lg min-w-72">
            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  Smooth animations with Framer Motion
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  12 alignment options for flexibility
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  Context-based state management
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-muted-foreground">
                  Composable component structure
                </span>
              </li>
            </ul>
          </Card>
        </HoverPopOverContent>
      </HoverPopOver>
    </div>
  );
}
