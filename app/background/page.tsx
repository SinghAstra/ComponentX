"use client";

import { blurInVariant, containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ConicGradientBackground from "../ui/conic-gradient-background";
import RadialFadeBackground from "../ui/radial-fade-background";

const BackgroundPage = () => {
  return (
    <div className="px-4 sm:px-8">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="min-h-screen flex items-center justify-center text-center"
      >
        <motion.h1 variants={blurInVariant} className="text-6xl">
          Collection of <br />
          Reusable Backgrounds
        </motion.h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 auto-rows-fr">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1  row-span-2 min-h-[250px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Conic Gradient Background
          </motion.h1>
          <Link
            href="/background/conic-gradient-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <ConicGradientBackground />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1  row-span-2 min-h-[250px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Radial Fade Background
          </motion.h1>
          <Link
            href="/background/radial-fade-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <RadialFadeBackground />
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundPage;
