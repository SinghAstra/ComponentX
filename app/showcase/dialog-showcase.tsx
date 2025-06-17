import { Button } from "@/components/ui/button";
import { buttonVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React, { useState } from "react";

const DialogShowCase = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const toggleDialog = () => {
    setIsDialogVisible(!isDialogVisible);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-neutral-800 relative rounded-md overflow-hidden flex items-center justify-center">
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          onClick={toggleDialog}
        >
          <Button>Open Dialog</Button>
        </motion.div>
        {isDialogVisible && (
          <div className="fixed inset-0 backdrop-blur-sm"></div>
        )}
      </div>
    </div>
  );
};

export default DialogShowCase;
