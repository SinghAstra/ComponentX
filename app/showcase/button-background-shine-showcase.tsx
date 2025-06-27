import { Button } from "@/components/ui/button";
import { scaleInVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import { BackgroundShine } from "../ui/background-shine";
import ShowCase from "./showcase";

const ButtonBackgroundShineShowCase = () => {
  return (
    <ShowCase>
      <motion.div variants={scaleInVariant}>
        <Button
          variant={"outline"}
          className="relative bg-transparent  hover:bg-transparent"
        >
          Button With Shine
          <BackgroundShine />
        </Button>
      </motion.div>
    </ShowCase>
  );
};

export default ButtonBackgroundShineShowCase;
