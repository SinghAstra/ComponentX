"use client";

import Dialog from "@/components/component-x/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function BasicDialog() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <>
      <Button
        className="rounded font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300 border shadow-md"
        variant="outline"
        onClick={() => setIsDialogVisible(true)}
      >
        Open Dialog
      </Button>
      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Confirm Action</h2>
          <p className="text-muted-foreground mb-6">
            Are you sure you want to proceed with this action?
          </p>
          <div className="flex gap-3 justify-end">
            <Button
              className="rounded font-normal bg-muted/40 hover:bg-muted/20 transition-all duration-300 border shadow-md"
              variant="outline"
              onClick={() => setIsDialogVisible(false)}
            >
              Cancel
            </Button>
            <Button
              className="rounded font-normal"
              onClick={() => setIsDialogVisible(false)}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
