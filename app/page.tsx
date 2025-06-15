import React from "react";
import GradientBackground from "./gradient";
import { HeroContent } from "./hero";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col  gap-2">
      <HeroContent />
      <GradientBackground />
    </div>
  );
};

export default HomePage;
