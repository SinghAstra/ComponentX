"use client";

import HomePage from "@/app/home";
import ConicGradientBackground from "@/app/ui/conic-gradient-background";
import LightBulbGradientBackground from "@/app/ui/light-bulb-gradient-background";
import RadialFadeBackground from "@/app/ui/radial-fade-background";
import RadialFadePulsatingBackground from "@/app/ui/radial-fade-pulsating-background";
import TopCenterRadialBackground from "@/app/ui/top-center-radial-background";
import TriadBackground from "@/app/ui/triad-background";
import { notFound, redirect, useParams } from "next/navigation";
import React from "react";

const BackgroundInAction = () => {
  const params = useParams();
  const background = params.background;

  const inActionComponents: { [key: string]: JSX.Element } = {
    ConicGradientBackground: <ConicGradientBackground className="fixed" />,
    RadialFadeBackground: <RadialFadeBackground className="fixed" />,
    TopCenterRadialBackground: <TopCenterRadialBackground className="fixed" />,
    RadialFadePulsatingBackground: (
      <RadialFadePulsatingBackground className="fixed" />
    ),
    LightBulbGradientBackground: (
      <LightBulbGradientBackground className="fixed" />
    ),
    TriadBackground: <TriadBackground className="fixed" />,
  };

  if (!background || typeof background !== "string") {
    notFound();
  }
  const componentName = background
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .join("");

  if (!inActionComponents[componentName]) {
    redirect("/background");
  }

  return (
    <div>
      {inActionComponents[componentName]}
      <HomePage />
    </div>
  );
};

export default BackgroundInAction;
