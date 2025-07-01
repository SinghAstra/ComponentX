"use client";
import { containerVariant, textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import Hero from "./hero";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import GradientInsetBackgroundShowCase from "./showcase/gradient-inset-background-showcase";
import MovingBackgroundShowCase from "./showcase/moving-background-showcase";
import MovingBorderShowCase from "./showcase/moving-border-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";
import ConicGradientBackground from "./ui/conic-gradient-background";
import GridBackground from "./ui/grid-background";
import LightBulbGradient from "./ui/light-bulb-gradient";
import MaskedGridBackground from "./ui/masked-grid-background";
import NotificationInput from "./ui/notification-input";
import RadialFadeBackground from "./ui/radial-fade-background";
import RadialFadePulsatingBackground from "./ui/radial-fade-pulsating-background";

const HomePage = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex flex-col "
    >
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr mb-[100px] px-2">
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <MovingBorderShowCase />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Conic Gradient Background
          </motion.h1>
          <ConicGradientBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Radial Fade Background
          </motion.h1>
          <RadialFadeBackground />
        </div>

        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <GradientInsetBackgroundShowCase />
        </div>

        <div className="col-span-1 row-span-2  min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <MovingBackgroundShowCase />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-3xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Radial Fade Pulsating Background
          </motion.h1>
          <RadialFadePulsatingBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-3xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Light Bulb Gradient
          </motion.h1>
          <LightBulbGradient />
        </div>

        <div className="col-span-1  row-span-3 min-h-[250px] relative flex items-center justify-center border border-neutral-800 rounded">
          <motion.h1
            className="text-3xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Grid
          </motion.h1>
          <GridBackground />
        </div>

        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <NotificationInput />
        </div>
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <DialogBoilerPlateShowCase />
        </div>
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <SearchDialogShowCase />
        </div>
        <div className="col-span-1 row-span-3 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-3xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Masked Grid
          </motion.h1>
          <MaskedGridBackground />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
