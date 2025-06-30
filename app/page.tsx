"use client";
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

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Hero />
      <div className="grid grid-cols-12 border border-red-400">
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
      </div>
    </div>
  );
};

export default HomePage;
