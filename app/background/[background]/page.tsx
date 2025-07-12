"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";

const BackgroundInAction = () => {
  const params = useParams();
  const background = params.background;

  if (!background || typeof background !== "string") {
    notFound();
  }
  const componentName = background
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .join("");

  // .forEach((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase)
  return <div>BackgroundInAction - ${componentName}</div>;
};

export default BackgroundInAction;
