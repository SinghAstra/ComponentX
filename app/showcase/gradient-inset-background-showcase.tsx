import { Button } from "@/components/ui/button";
import { scaleInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import GradientInsetBackground from "../ui/gradient-inset-background";

const GradientInsetBackgroundShowCase = () => {
  return (
    <motion.div variants={scaleInVariant}>
      <Button className="rounded bg-transparent hover:bg-transparent group relative font-normal">
        <GradientInsetBackground />
        <div className="absolute inset-0 group-hover:bg-muted/40 transition-all duration-200" />
        <span
          className="z-10 text-sm text-foreground
          flex items-center justify-center gap-2"
        >
          <FaTwitter className="size-3" /> Gradient Inset Background
          <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
        </span>
      </Button>
    </motion.div>
  );
};

export default GradientInsetBackgroundShowCase;
