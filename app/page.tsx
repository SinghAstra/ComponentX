import React from "react";
import { GradientOrbsShowcase } from "./gradient";
import { HeroContent } from "./hero";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col  gap-2">
      <HeroContent />
      <GradientOrbsShowcase />
    </div>
  );
};

export default HomePage;
