"use client";

import HomePage from "@/app/(home)/page";
import ConicBackground from "@/components/component-x/conic-background";
import EllipseBackground from "@/components/component-x/ellipse-background";
import GridBackground from "@/components/component-x/grid-background";
import LampBackground from "@/components/component-x/lamp-background";
import MaskedGridBackground from "@/components/component-x/masked-grid-background";
import RadialBackground from "@/components/component-x/radial-background";
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
    LampBackground: <LampBackground position="right" />,
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
