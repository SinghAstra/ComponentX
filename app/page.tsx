"use client";
import { containerVariant, textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import Hero from "./hero";
import ConicGradientBackgroundShowcase from "./showcase/conic-gradient-background-showcase";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import GradientInsetBackgroundShowCase from "./showcase/gradient-inset-background-showcase";
import GradientShowCase from "./showcase/gradient-showcase";
import GridBackgroundShowCase from "./showcase/grid-background-showcase";
import LightBulbGradientShowCase from "./showcase/light-bulb-gradient-showcase";
import MaskedGridBackgroundShowCase from "./showcase/masked-grid-background-showcase";
import MovingBackgroundShowCase from "./showcase/moving-background-showcase";
import MovingBorderShowCase from "./showcase/moving-border-showcase";
import NotificationInputShowCase from "./showcase/notification-input-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";
import GridBackground from "./ui/grid-background";
import NotificationInput from "./ui/notification-input";

const HomePage = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex flex-col "
    >
      <Hero />
      {/* <div className="grid grid-cols-12 border border-red-400">
        <MovingBorderShowCase />
        <GradientInsetBackgroundShowCase />
        <MovingBackgroundShowCase />
        <GridBackgroundShowCase />
        <MaskedGridBackgroundShowCase />
        <DialogBoilerPlateShowCase />
        <SearchDialogShowCase />
        <NotificationInputShowCase />
        <ConicGradientBackgroundShowcase />
        <RadialFadeBackgroundShowcase />
        <RadialFadePulsatingBackgroundShowcase />
        <LightBulbGradientShowCase />
        <GradientShowCase />
      </div> */}

      {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 auto-rows-fr"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr mb-[100px] px-2">
        <div className="col-span-1 row-span-1 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <MovingBorderShowCase />
        </div>

        <div className="col-span-1 row-span-1 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <GradientInsetBackgroundShowCase />
        </div>

        <div className="col-span-1 row-span-1 lg:row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <MovingBackgroundShowCase />
        </div>

        <div className="col-span-1  row-span-2 min-h-[250px] relative flex items-center justify-center border border-neutral-800 rounded">
          <motion.h1
            className="text-3xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Grid
          </motion.h1>
          <GridBackground />
        </div>

        <div className="col-span-1 row-span-1 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <NotificationInput />
        </div>
        <div className="col-span-1 row-span-1 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <SearchDialogShowCase />
        </div>

        {/*   <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 min-h-[250px]">
          <MaskedGridBackgroundShowCase />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 min-h-[250px]">
          <ConicGradientBackgroundShowcase />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 min-h-[120px]">
          <DialogBoilerPlateShowCase />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 min-h-[250px]">
          <RadialFadeBackgroundShowcase />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 min-h-[250px]">
          <RadialFadePulsatingBackgroundShowcase />
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2 min-h-[250px]">
          <LightBulbGradientShowCase />
        </div>

        <div className="col-span-2 md:col-span-4 lg:col-span-6 row-span-1 min-h-[120px]">
          <GradientShowCase />
        </div> */}
      </div>
    </motion.div>
  );
};

export default HomePage;
