"use client";
import { Button } from "@/components/ui/button";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
} from "@/lib/variants";
import { motion } from "framer-motion";
import { ArrowRightIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Hero from "./hero";
import AuthModalShowCase from "./showcase/auth-modal-showcase";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import MovingBackgroundShowCase from "./showcase/moving-background-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";
import ConicGradientBackground from "./ui/conic-gradient-background";
import { FloatingNavbar } from "./ui/floating-navbar";
import MovingBackground from "./ui/moving-background";
import MovingGlow from "./ui/moving-glow";
import NotificationInput from "./ui/notification-input";
import RadialFadeBackground from "./ui/radial-fade-background";
import TopCenterRadialBackground from "./ui/top-center-radial-background";

const HomePage = () => {
  const [showFloatingNavbar, setShowFloatingNavbar] = useState(false);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex flex-col  "
    >
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr px-2">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-background col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border rounded"
        >
          <FloatingNavbar showNavbar={showFloatingNavbar} />
          <motion.div variants={scaleInVariant}>
            <Button
              variant="outline"
              className="rounded font-normal bg-muted/50 hover:bg-muted/80 transition-all duration-200"
              onClick={() => setShowFloatingNavbar(!showFloatingNavbar)}
            >
              {showFloatingNavbar ? (
                <>
                  <X className="h-5 w-5 mr-1" />
                  <span>Hide Floating Navbar</span>
                </>
              ) : (
                <>
                  <Menu className="h-5 w-5 mr-1" />
                  <span>View Floating Navbar</span>
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Conic Gradient Background
          </motion.h1>
          <Link
            href="/background/conic-gradient-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <ConicGradientBackground />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Radial Fade Background
          </motion.h1>
          <Link
            href="/background/radial-fade-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <RadialFadeBackground endColor="hsl(var(--background))" />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-background col-span-1 row-span-1  min-h-[250px] flex items-center justify-center border  rounded"
        >
          <motion.div variants={scaleInVariant}>
            <Button
              variant="outline"
              className="relative bg-transparent hover:bg-transparent rounded font-normal z-[5]"
            >
              Moving Background
              <MovingBackground
                backgroundColor="hsla(var(--muted)/0.4)"
                shineColor="hsla(var(--primary)/0.4)"
              />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background"
        >
          <DialogBoilerPlateShowCase />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-2  row-span-1  flex flex-col gap-4 items-center justify-center border  rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Top Center Radial Background
          </motion.h1>
          <Link
            href="/background/top-center-radial-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <TopCenterRadialBackground />
        </motion.div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <SearchDialogShowCase />
        </div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
          <div className="px-4 py-1 border border-neutral-800/40 relative">
            <MovingGlow />
            Moving Glow
          </div>
        </div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
          <AuthModalShowCase />
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <NotificationInput />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
