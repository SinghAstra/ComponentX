import React from "react";
import BackgroundShowcase from "./background-showcase";
import GradientMeshBackgroundShowcase from "./gradient-mesh-background-showcase";
import { HeroContent } from "./hero";
import RadialFadeBackgroundShowcase from "./radial-fade-background-showcase";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col  gap-2">
      <HeroContent />
      <GradientMeshBackgroundShowcase />
      <RadialFadeBackgroundShowcase />
      <BackgroundShowcase />
    </div>
  );
};

export default HomePage;
