"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import MovingBackground from "./ui/moving-background";
import MovingGlow from "./ui/moving-glow";

function Hero() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="relative flex flex-col gap-4 items-center text-center min-h-screen justify-center px-4 overflow-hidden"
    >
      <motion.div variants={scaleInVariant}>
        <a href={siteConfig.links.buildInPublic} target="_blank">
          <div className="p-1 relative rounded">
            <Button
              variant="outline"
              className="rounded group relative font-normal bg-transparent hover:bg-muted/40"
            >
              <MovingBackground shineColor="hsl(var(--primary)/20)" />
              <span className=" text-sm text-foreground flex items-center justify-center gap-2">
                <FaTwitter className="size-3" /> Build in Public
                <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </a>
      </motion.div>

      <motion.h1
        variants={blurInVariant}
        className=" font-medium text-5xl tracking-tight md:text-6xl lg:text-7xl my-2 sm:my-4 "
      >
        {siteConfig.name}
      </motion.h1>

      <motion.div variants={blurInVariant}>
        <p className=" md:text-lg lg:text-xl text-foreground/80 text-balance max-w-2xl">
          Collection of beautiful, and customizable UI components.
          <span className="text-primary/70 font-medium mx-2">
            Simple Copy Paste
          </span>
          and elevate your interface.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 sm:mt-4 items-center ">
        <a href={siteConfig.links.twitter} target="_blank">
          <motion.div variants={scaleInVariant} className="p-1">
            <Button
              size="lg"
              className="group rounded relative flex items-center gap-1 text-md font-normal backdrop-blur-md  "
            >
              Follow For Updates
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </a>
        <motion.div variants={scaleInVariant} className="p-1 relative rounded">
          <a href={siteConfig.links.githubRepo} target="_blank">
            <Button
              variant={"outline"}
              size="lg"
              className="flex items-center text-md justify-center gap-2 rounded font-normal z-3 relative backdrop-blur-lg"
            >
              <MovingGlow />
              <FaGithub className=" h-4 w-4" />
              View on GitHub
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
