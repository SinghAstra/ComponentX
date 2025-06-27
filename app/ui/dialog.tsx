import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useRef } from "react";

interface DialogProps {
  isDialogVisible: boolean;
  setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  keyToMakeDialogVisible: string;
}

const Dialog = ({
  isDialogVisible,
  setIsDialogVisible,
  children,
  keyToMakeDialogVisible,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setIsDialogVisible(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === keyToMakeDialogVisible) {
        e.preventDefault();
        setIsDialogVisible(true);
      }
      if (e.key === "Escape") {
        setIsDialogVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    if (isDialogVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isDialogVisible, setIsDialogVisible, keyToMakeDialogVisible]);

  if (!isDialogVisible) return;
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />

      <motion.div
        variants={scaleInVariant}
        initial="hidden"
        animate="visible"
        className="w-full max-w-xl px-3 py-2 bg-muted/40 border border-neutral-800/40 rounded shadow-2xl relative cursor-pointer z-[99]"
        ref={dialogRef}
      >
        <div
          className="absolute top-3 right-2"
          onClick={() => setIsDialogVisible(false)}
        >
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground transition-all duration-200" />
        </div>
        {children}
      </motion.div>
    </div>
  );
};

export default Dialog;
