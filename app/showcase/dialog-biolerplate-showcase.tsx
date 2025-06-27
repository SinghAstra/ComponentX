import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Dialog from "../ui/dialog";
import ShowCase from "./showcase";

const DialogBoilerPlateShowCase = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <ShowCase>
      <Button variant={"outline"} onClick={() => setIsDialogVisible(true)}>
        Dialog Skeleton
      </Button>
      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
        keyToMakeDialogVisible="k"
      >
        <p> This is the Dialog</p> <p>Press Escape to Cancel</p>
      </Dialog>
    </ShowCase>
  );
};

export default DialogBoilerPlateShowCase;
