import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";
import React, { useState } from "react";
import Dialog from "../ui/dialog";
import ShowCase from "./showcase";

const DialogBoilerPlateShowCase = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <ShowCase>
      <Button
        className="rounded px-3 py-1"
        variant={"outline"}
        onClick={() => setIsDialogVisible(true)}
      >
        Dialog Skeleton
        <span className="flex items-center gap-1 bg-muted/60 p-1 rounded mr-[-0.5rem]">
          <Command />K
        </span>
      </Button>
      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
        keyToMakeDialogVisible="k"
      >
        <div className="px-3 py-2">
          <p> This is the Dialog</p> <p>Press Escape to Cancel</p>
        </div>
      </Dialog>
    </ShowCase>
  );
};

export default DialogBoilerPlateShowCase;
