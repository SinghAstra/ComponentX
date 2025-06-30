import { Button } from "@/components/ui/button";
import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import MovingBackground from "../ui/moving-background";

const MovingBackgroundShowCase = () => {
  return (
    <motion.div variants={scaleInVariant}>
      <Button
        variant="outline"
        className="relative bg-transparent hover:bg-transparent rounded font-normal"
      >
        Moving Background
        <MovingBackground />
      </Button>
    </motion.div>
  );
};

export default MovingBackgroundShowCase;
