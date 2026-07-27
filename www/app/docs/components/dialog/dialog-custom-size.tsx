'use client';

import Dialog from '@/components/component-x/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function DialogCustomSize() {
  const [smallOpen, setSmallOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);

  return (
    <div className="flex gap-4">
      <Button
        className="rounded font-normal bg-muted/30 hover:bg-muted/20 transition-all duration-300 border shadow-md"
        variant="outline"
        onClick={() => setSmallOpen(true)}
      >
        Small Dialog
      </Button>
      <Dialog
        isDialogVisible={smallOpen}
        setIsDialogVisible={setSmallOpen}
        className="max-w-sm"
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Small Dialog</h2>
          <p className="text-sm text-muted-foreground">
            This is a compact dialog perfect for quick confirmations.
          </p>
          <div className="w-full flex items-center justify-end">
            <Button
              size="sm"
              variant={'outline'}
              className="rounded font-normal mt-4 bg-muted/30 hover:bg-muted/20 transition-all duration-300 border shadow-md"
              onClick={() => setSmallOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Dialog>

      <Button
        className="rounded font-normal bg-muted/30 hover:bg-muted/20 transition-all duration-300 border shadow-md"
        variant="outline"
        onClick={() => setLargeOpen(true)}
      >
        Large Dialog
      </Button>
      <Dialog
        isDialogVisible={largeOpen}
        setIsDialogVisible={setLargeOpen}
        className="max-w-2xl"
      >
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Large Dialog</h2>
          <p className="text-muted-foreground mb-6">
            This is a spacious dialog suitable for detailed content, forms, or
            rich information displays.
          </p>
          <div className="w-full flex items-center justify-end">
            <Button
              variant={'outline'}
              className="rounded font-normal mt-4 bg-muted/30 hover:bg-muted/20 transition-all duration-300 border shadow-md"
              onClick={() => setLargeOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
