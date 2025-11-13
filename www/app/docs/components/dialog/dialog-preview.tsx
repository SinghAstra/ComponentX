"use client";

import Dialog from "@/components/component-x/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DialogPreview() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogVisible(true)}
        className="rounded font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300 border shadow-md"
      >
        Open Dialog
      </Button>
      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
      >
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-normal">Dialog Title</h2>
          <p className="text-muted-foreground">
            This is a simple dialog component with backdrop blur and smooth
            animations.
          </p>
          <Button
            className="rounded font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300 border shadow-md"
            onClick={() => setIsDialogVisible(false)}
          >
            Close Dialog
          </Button>
        </div>
      </Dialog>
    </>
  );
}
