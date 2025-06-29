import { textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import MaskedGridBackground from "../ui/masked-grid-background";
import ShowCase from "./showcase";

const MaskedGridBackgroundShowCase = () => {
  return (
    <ShowCase>
      <motion.h1
        className="text-5xl font-medium"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
      >
        Masked Grid Background
      </motion.h1>
      <MaskedGridBackground />
    </ShowCase>
  );
};

export default MaskedGridBackgroundShowCase;
