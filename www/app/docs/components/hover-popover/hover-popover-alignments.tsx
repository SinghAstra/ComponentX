"use client";

import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from "@/components/component-x/hover-popover";
import { Card } from "@/components/ui/card";

type PopoverAlign =
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "top-left"
  | "top-right"
  | "left-center"
  | "left-top"
  | "left-bottom"
  | "right-center"
  | "right-top"
  | "right-bottom";

function capitalizeAlign(align: string): string {
  return align
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function HoverPopOverAlignments() {
  const alignments: PopoverAlign[] = [
    "top-left",
    "top-center",
    "top-right",
    "left-top",
    "left-center",
    "left-bottom",
    "right-top",
    "right-center",
    "right-bottom",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-4">
      {alignments.map((align) => (
        <div
          key={align}
          className="relative flex-none w-full h-64 overflow-hidden border rounded-lg flex items-center justify-center bg-muted/30"
        >
          <HoverPopOver align={align}>
            <HoverPopOverTrigger>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                {capitalizeAlign(align)}
              </button>
            </HoverPopOverTrigger>
            <HoverPopOverContent>
              <Card className="p-3 shadow-lg whitespace-nowrap">
                <p className="text-sm text-foreground">
                  Aligned {capitalizeAlign(align)}
                </p>
              </Card>
            </HoverPopOverContent>
          </HoverPopOver>
        </div>
      ))}
    </div>
  );
}
