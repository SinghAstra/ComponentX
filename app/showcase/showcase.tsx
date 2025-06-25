import { containerVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const ShowCase = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div className="w-[80vw] h-[80vh] border border-neutral-800 relative rounded-md overflow-hidden flex items-center justify-center">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ShowCase;
