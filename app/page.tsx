"use client";
import { containerVariant, textVariant } from "@/lib/variant";
import { motion } from "framer-motion";
import React from "react";
import Hero from "./hero";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import GradientInsetBackgroundShowCase from "./showcase/gradient-inset-background-showcase";
import MovingBackgroundShowCase from "./showcase/moving-background-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";
import ConicGradientBackground from "./ui/conic-gradient-background";
import EdgeTriadBanner from "./ui/edge-triad-banner";
import GridBackground from "./ui/grid-background";
import LightBulbGradient from "./ui/light-bulb-gradient";
import MaskedGridBackground from "./ui/masked-grid-background";
import MovingGlow from "./ui/moving-glow";
import NotificationInput from "./ui/notification-input";
import RadialFadeBackground from "./ui/radial-fade-background";
import RadialFadePulsatingBackground from "./ui/radial-fade-pulsating-background";
import ReverseEdgeTriadBanner from "./ui/reverse-edge-triad-banner";
import ReverseTriadBanner from "./ui/reverse-triad-banner";
import TriadBanner from "./ui/triad-banner";

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
          <NotificationInput />
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
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Radial Fade Pulsating Background
          </motion.h1>
          <RadialFadePulsatingBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Light Bulb Gradient
          </motion.h1>
          <LightBulbGradient />
        </div>
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <DialogBoilerPlateShowCase />
        </div>

        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <SearchDialogShowCase />
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <TriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Triad Banner
          </motion.h1>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <ReverseTriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Reverse Triad Banner
          </motion.h1>
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] relative flex items-center justify-center border border-neutral-800 rounded">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Grid
          </motion.h1>
          <GridBackground />
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Masked Grid
          </motion.h1>
          <MaskedGridBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <EdgeTriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Edge Triad Banner
          </motion.h1>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <ReverseEdgeTriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={textVariant}
          >
            Reverse Edge Triad Banner
          </motion.h1>
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <div className="px-4 py-1 border border-neutral-800/40 relative">
            <MovingGlow />
            Moving Glow
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
