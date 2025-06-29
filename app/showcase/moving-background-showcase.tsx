import { Button } from "@/components/ui/button";
import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import MovingBackground from "../ui/moving-background";
import ShowCase from "./showcase";

const MovingBackgroundShowCase = () => {
  return (
    <ShowCase>
      <motion.div variants={scaleInVariant}>
        <Button
          variant={"outline"}
          className="relative bg-transparent  hover:bg-transparent rounded-sm"
        >
          Moving Background
          <MovingBackground />
        </Button>
      </motion.div>
    </ShowCase>
  );
};

export default MovingBackgroundShowCase;
