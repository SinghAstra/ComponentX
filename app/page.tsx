import React from "react";
import { HeroContent } from "./hero";
import GradientMeshBackgroundShowcase from "./showcase/gradient-mesh-background-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePingBackgroundShowcase from "./showcase/radial-fade-ping-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col  gap-2">
      <HeroContent />
      <GradientMeshBackgroundShowcase />
      <RadialFadeBackgroundShowcase />
      <RadialFadePulsatingBackgroundShowcase />
      <RadialFadePingBackgroundShowcase />
    </div>
  );
};

export default HomePage;
