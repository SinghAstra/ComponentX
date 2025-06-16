"use client";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import React from "react";
import Hero from "./hero";
import ConicGradientBackgroundShowcase from "./showcase/conic-gradient-background-showcase";
import GradientMeshBackgroundShowcase from "./showcase/gradient-mesh-background-showcase";
import LightBulbGradientShowCase from "./showcase/light-bulb-gradient-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePingBackgroundShowcase from "./showcase/radial-fade-ping-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col  gap-2">
      <Hero />
      <GradientMeshBackgroundShowcase />
      <RadialFadeBackgroundShowcase />
      <RadialFadePulsatingBackgroundShowcase />
      <RadialFadePingBackgroundShowcase />
      <ConicGradientBackgroundShowcase />
      <LightBulbGradientShowCase />
      <div className="flex items-center justify-center">
        <div className="h-[80vh] w-[80vw] border rounded-sm border-neutral-800/40 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Button>Hey There</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
