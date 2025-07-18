"use client";

import HomePage from "@/app/home";
import ConicBackground from "@/app/ui/conic-background";
import EllipseBackground from "@/app/ui/ellipse-background";
import GridBackground from "@/app/ui/grid-background";
import MaskedGridBackground from "@/app/ui/masked-grid-background";
import RadialBackground from "@/app/ui/radial-background";
import { notFound, redirect, useParams } from "next/navigation";
import React from "react";

const BackgroundInAction = () => {
  const params = useParams();
  const background = params.background;

  const inActionComponents: { [key: string]: JSX.Element } = {
    ConicBackground: (
      <ConicBackground className="fixed" position="top" angleSpan="large" />
    ),
    RadialBackground: (
      <RadialBackground
        className="fixed"
        position="left-center"
        radius={40}
        animate={true}
      />
    ),

    EllipseBackground: (
      <EllipseBackground className="fixed" position="top-center" />
    ),
    GridBackground: <GridBackground className="fixed" />,
    MaskedGridBackground: <MaskedGridBackground className="fixed" />,
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
