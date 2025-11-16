'use client';

import {
  HoverPopOver,
  HoverPopOverContent,
  HoverPopOverTrigger,
} from '@/components/component-x/hover-popover';
import { Card } from '@/components/ui/card';

export function HoverPopOverPreview() {
  return (
    <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
      <HoverPopOver align="bottom-center">
        <HoverPopOverTrigger>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Hover me
          </button>
        </HoverPopOverTrigger>
        <HoverPopOverContent>
          <Card className="p-4 shadow-lg">
            <p className="text-sm text-foreground">This is a hover popover!</p>
          </Card>
        </HoverPopOverContent>
      </HoverPopOver>
    </div>
  );
}
