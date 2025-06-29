"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Hero from "./hero";
import ButtonBackgroundShineShowCase from "./showcase/button-background-shine-showcase";
import ConicGradientBackgroundShowcase from "./showcase/conic-gradient-background-showcase";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import GradientInsetBackgroundShowCase from "./showcase/gradient-inset-background-showcase";
import GradientShowCase from "./showcase/gradient-showcase";
import GridBackgroundShowCase from "./showcase/grid-background-showcase";
import LightBulbGradientShowCase from "./showcase/light-bulb-gradient-showcase";
import MaskedGridBackgroundShowCase from "./showcase/masked-grid-background-showcase";
import NotificationInputShowCase from "./showcase/notification-input-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Hero />
      <GradientInsetBackgroundShowCase />
      <GridBackgroundShowCase />
      <MaskedGridBackgroundShowCase />
      <DialogBoilerPlateShowCase />
      <SearchDialogShowCase />
      <ButtonBackgroundShineShowCase />
      <NotificationInputShowCase />
      <ConicGradientBackgroundShowcase />
      <RadialFadeBackgroundShowcase />
      <RadialFadePulsatingBackgroundShowcase />
      <LightBulbGradientShowCase />
      <GradientShowCase />
    </div>
  );
};

export default HomePage;
