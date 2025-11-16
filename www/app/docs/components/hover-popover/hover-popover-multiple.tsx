"use client";

import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "@/components/component-x/hover-popover";
import { Card } from "@/components/ui/card";

export function HoverPopOverMultiple() {
  return (
    <div className="flex items-center justify-center h-64 bg-muted rounded-lg gap-4">
      <HoverPopOver align="right-center">
        <HoverPopOverTrigger>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Tip 1
          </button>
        </HoverPopOverTrigger>
        <HoverPopOverContent>
          <Card className="p-3 shadow-lg">
            <p className="text-sm text-foreground">First popover</p>
          </Card>
        </HoverPopOverContent>
      </HoverPopOver>

      <HoverPopOver align="top-center">
        <HoverPopOverTrigger>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Tip 2
          </button>
        </HoverPopOverTrigger>
        <HoverPopOverContent>
          <Card className="p-3 shadow-lg">
            <p className="text-sm text-foreground">Second popover</p>
          </Card>
        </HoverPopOverContent>
      </HoverPopOver>

      <HoverPopOver align="left-center">
        <HoverPopOverTrigger>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Tip 3
          </button>
        </HoverPopOverTrigger>
        <HoverPopOverContent>
          <Card className="p-3 shadow-lg">
            <p className="text-sm text-foreground">Third popover</p>
          </Card>
        </HoverPopOverContent>
      </HoverPopOver>
    </div>
  );
}
