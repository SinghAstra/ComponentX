"use client";

import HomePage from "@/app/home";
import ConicGradientBackground from "@/app/ui/conic-gradient-background";
import EdgeTriadBackground from "@/app/ui/edge-triad-background";
import GridBackground from "@/app/ui/grid-background";
import LightBulbGradientBackground from "@/app/ui/light-bulb-gradient-background";
import MaskedGridBackground from "@/app/ui/masked-grid-background";
import RadialFadeBackground from "@/app/ui/radial-fade-background";
import RadialFadePulsatingBackground from "@/app/ui/radial-fade-pulsating-background";
import ReverseEdgeTriadBackground from "@/app/ui/reverse-edge-triad-background";
import TopCenterRadialBackground from "@/app/ui/top-center-radial-background";
import TriadBackground from "@/app/ui/triad-background";
import { notFound, redirect, useParams } from "next/navigation";
import React from "react";

const BackgroundInAction = () => {
  const params = useParams();
  const background = params.background;

  const inActionComponents: { [key: string]: JSX.Element } = {
    ConicGradientBackground: (
      <ConicGradientBackground
        className="fixed"
        position="top"
        angleSpan="large"
      />
    ),
    RadialFadeBackground: (
      <RadialFadeBackground className="fixed" position="left-center" />
    ),
    TopCenterRadialBackground: <TopCenterRadialBackground className="fixed" />,
    RadialFadePulsatingBackground: (
      <RadialFadePulsatingBackground className="fixed" />
    ),
    LightBulbGradientBackground: (
      <LightBulbGradientBackground className="fixed" />
    ),
    TriadBackground: <TriadBackground className="fixed" />,
    GridBackground: <GridBackground className="fixed" />,
    MaskedGridBackground: <MaskedGridBackground className="fixed" />,
    EdgeTriadBackground: <EdgeTriadBackground className="fixed" />,
    ReverseEdgeTriadBackground: (
      <ReverseEdgeTriadBackground className="fixed" />
    ),
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
