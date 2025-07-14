import { Button } from "@/components/ui/button";
import { scaleInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import React from "react";
import MovingBackground from "../ui/moving-background";

const MovingBackgroundShowCase = () => {
  return (
    <motion.div variants={scaleInVariant}>
      <Button
        variant="outline"
        className="relative bg-transparent hover:bg-transparent rounded font-normal z-[5]"
      >
        Moving Background
        <MovingBackground
          backgroundColor="hsla(var(--muted)/0.4)"
          shineColor="hsla(var(--primary)/0.4)"
        />
      </Button>
    </motion.div>
  );
};

export default MovingBackgroundShowCase;
