'use client';

import Dialog from '@/components/component-x/dialog';
import { Button } from '@/components/ui/button';
import { Command } from 'lucide-react';
import { useState } from 'react';

export function DialogWithShortcut() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <>
      <Button
        className="rounded font-normal bg-muted/30 hover:bg-muted/20 transition-all duration-300 border shadow-md"
        variant="outline"
        onClick={() => setIsDialogVisible(true)}
      >
        <span className="text-muted-foreground">Open</span>
        <span className="flex items-center gap-1 bg-muted/60 text-sm p-1 rounded ml-[2px] border">
          <Command size={8} /> K
        </span>
      </Button>
      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
        keyToMakeDialogVisible="k"
      >
        <div className="p-6 space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Quick Search</h2>
            <p className="text-sm text-muted-foreground">
              Press Cmd/Ctrl + K to open this dialog anytime
            </p>
          </div>
          <p className="text-muted-foreground">
            This dialog can be opened with a keyboard shortcut for quick access.
          </p>
        </div>
      </Dialog>
    </>
  );
}
