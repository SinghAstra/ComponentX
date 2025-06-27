"use client";
import React from "react";
import Hero from "./hero";
import ButtonBackgroundShineShowCase from "./showcase/button-background-shine-showcase";
import ConicGradientBackgroundShowcase from "./showcase/conic-gradient-background-showcase";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import GradientShowCase from "./showcase/gradient-showcase";
import LightBulbGradientShowCase from "./showcase/light-bulb-gradient-showcase";
import NotificationInputShowCase from "./showcase/notification-input-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";
import DialogShowCase from "./showcase/search-dialog-showcase";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Hero />
      <DialogBoilerPlateShowCase />
      <ConicGradientBackgroundShowcase />
      <RadialFadeBackgroundShowcase />
      <RadialFadePulsatingBackgroundShowcase />
      <LightBulbGradientShowCase />
      <GradientShowCase />
      <DialogShowCase />
      <NotificationInputShowCase />
      <ButtonBackgroundShineShowCase />
    </div>
  );
};

export default HomePage;
