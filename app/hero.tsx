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
import GradientInsetBackground from "./ui/gradient-inset-background";
import MovingBackground from "./ui/moving-background";
import MovingGlow from "./ui/moving-glow";

function Hero() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="relative z-10 flex flex-col gap-4 items-center text-center min-h-[calc(100vh-60px)] justify-center px-4 overflow-hidden"
    >
      <motion.div variants={scaleInVariant}>
        <a href={siteConfig.links.buildInPublic} target="_blank">
          <Button className="rounded bg-transparent hover:bg-transparent group relative font-normal">
            <GradientInsetBackground />
            <MovingGlow />
            <div className="absolute inset-0 group-hover:bg-muted/40 transition-all duration-200" />
            <span
              className="z-10 text-sm text-foreground
          flex items-center justify-center gap-2"
            >
              <FaTwitter className="size-3" /> Build in Public
              <ArrowRightIcon className="size-3 transform-all duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
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
              variant="outline"
              size="lg"
              className="group rounded relative bg-transparent hover:bg-transparent flex items-center gap-1 text-md font-normal  "
            >
              <MovingBackground />
              Follow For Updates
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </a>
        <motion.div variants={scaleInVariant} className="p-1 relative rounded">
          <a href={siteConfig.links.githubRepo} target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="bg-muted/20 hover:bg-muted/40 flex items-center text-md justify-center gap-2 rounded font-normal z-3 relative"
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
