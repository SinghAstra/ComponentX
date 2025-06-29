import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import GridBackground from "../ui/grid-background";
import ShowCase from "./showcase";

const GridBackgroundShowCase = () => {
  return (
    <ShowCase>
      <motion.h1
        className="text-5xl font-medium"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
      >
        Grid Background
      </motion.h1>
      <GridBackground />
    </ShowCase>
  );
};

export default GridBackgroundShowCase;
