import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import MovingBorder from "../ui/moving-border";

const MovingBorderShowCase = () => {
  return (
    <motion.div variants={scaleInVariant} className="relative p-1">
      <MovingBorder />
      <div className="bg-muted/70 backdrop-blur-sm px-3 py-1">
        Moving Border
      </div>
    </motion.div>
  );
};

export default MovingBorderShowCase;
