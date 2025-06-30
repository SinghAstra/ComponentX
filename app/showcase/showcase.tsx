import { containerVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const ShowCase = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className=" flex items-center justify-center border border-neutral-800 rounded grid-cols-4"
    >
      {children}
    </motion.div>
  );
};

export default ShowCase;
