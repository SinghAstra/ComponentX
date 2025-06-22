"use client";
import React from "react";
import Hero from "./hero";
import AbstractBackgroundShowCase from "./showcase/abstract-background-showcase";
import ConicGradientBackgroundShowcase from "./showcase/conic-gradient-background-showcase";
import DialogShowCase from "./showcase/dialog-showcase";
import GradientMeshBackgroundShowcase from "./showcase/gradient-mesh-background-showcase";
import LightBulbGradientShowCase from "./showcase/light-bulb-gradient-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePingBackgroundShowcase from "./showcase/radial-fade-ping-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";
import WaitBackgroundShowCase from "./showcase/wait-background-showcase";

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
      <DialogShowCase />
      <AbstractBackgroundShowCase />
      <WaitBackgroundShowCase />
    </div>
  );
};

export default HomePage;
