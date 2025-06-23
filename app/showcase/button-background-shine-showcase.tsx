import { Button } from "@/components/ui/button";
import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import { BackgroundShine } from "../ui/background-shine";

const ButtonBackgroundShineShowCase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-border/40 relative rounded-lg overflow-hidden flex items-center justify-center">
        <motion.div
          variants={scaleInVariant}
          animate="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            variant={"outline"}
            className="relative bg-transparent  hover:bg-transparent"
          >
            Button With Shine
            <BackgroundShine />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ButtonBackgroundShineShowCase;
