"use client";
import React from "react";
import GradientShowCase from "./gradient-showcase";
import Hero from "./hero";
import AbstractBackgroundShowCase from "./showcase/abstract-background-showcase";
import ButtonBackgroundShineShowCase from "./showcase/button-background-shine-showcase";
import ConicGradientBackgroundShowcase from "./showcase/conic-gradient-background-showcase";
import DialogShowCase from "./showcase/dialog-showcase";
import LightBulbGradientShowCase from "./showcase/light-bulb-gradient-showcase";
import NotificationInputShowCase from "./showcase/notification-input-showcase";
import RadialFadeBackgroundShowcase from "./showcase/radial-fade-background-showcase";
import RadialFadePulsatingBackgroundShowcase from "./showcase/radial-fade-pulsating-background-showcase";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Hero />
      <ConicGradientBackgroundShowcase />
      <RadialFadeBackgroundShowcase />
      <RadialFadePulsatingBackgroundShowcase />
      <LightBulbGradientShowCase />
      <GradientShowCase />
      <DialogShowCase />
      <AbstractBackgroundShowCase />
      <NotificationInputShowCase />
      <ButtonBackgroundShineShowCase />
    </div>
  );
};

export default HomePage;
