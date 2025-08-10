"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
} from "@/lib/variants";
import { BorderHoverLink } from "@component-x/ui";
import { motion } from "framer-motion";
import { ArrowRightIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AuthModalShowCase from "../showcase/auth-modal-showcase";
import DialogBoilerPlateShowCase from "../showcase/dialog-boilerplate-showcase";
import SearchDialogShowCase from "../showcase/search-dialog-showcase";
import ConicBackground from "../ui/conic-background";
import EllipseBackground from "../ui/ellipse-background";
import { FloatingNavbar } from "../ui/floating-navbar";
import GridBackground from "../ui/grid-background";
import HoverPopOver from "../ui/hover-popover";
import LampBackground from "../ui/lamp-background";
import MaskedGridBackground from "../ui/masked-grid-background";
import MovingBackground from "../ui/moving-background";
import MovingBorder from "../ui/moving-border";
import NotificationInput from "../ui/notification-input";
import RadialBackground from "../ui/radial-background";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";

const HomePage = () => {
  const [showFloatingNavbar, setShowFloatingNavbar] = useState(false);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex flex-col  "
    >
      <Navbar />
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr px-2 mb-6">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-background col-span-1 sm:col-span-2 lg:col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border rounded"
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
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Conic Background
          </motion.h1>
          <Link
            href="/background/conic-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <ConicBackground />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Radial Background
          </motion.h1>
          <Link
            href="/background/radial-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <RadialBackground animate={true} position="left-center" />
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
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Ellipse Background
          </motion.h1>
          <Link
            href="/background/ellipse-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <EllipseBackground position="top-center" />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Lamp Background
          </motion.h1>
          <Link
            href="/background/lamp-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <LampBackground />
        </motion.div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <SearchDialogShowCase />
        </div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
          <div className="p-[2px] relative z-[2] overflow-hidden rounded">
            <MovingBorder />
            <div className="w-full h-full px-3 py-1 bg-background border">
              Moving Border
            </div>
          </div>
        </div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className=" col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Grid Background
          </motion.h1>
          <Link
            href="/background/grid-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <GridBackground />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className=" col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
        >
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center translate-y-5 group-hover:translate-y-0 transition-all duration-200 "
            variants={blurInVariant}
          >
            Masked Grid Background
          </motion.h1>
          <Link
            href="/background/masked-grid-background"
            className="border px-3 py-1 rounded bg-muted/20 hover:bg-muted/40 backdrop-blur-md translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1 items-center"
          >
            View in Action
            <ArrowRightIcon className="size-4 transform-all duration-300 group-hover:translate-x-1" />
          </Link>
          <MaskedGridBackground />
        </motion.div>

        <div className="col-span-1  row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
          <AuthModalShowCase />
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <NotificationInput />
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <BorderHoverLink className="text-muted-foreground hover:text-foreground transition-all duration-200">
            Hover me
          </BorderHoverLink>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <HoverPopOver>
            <HoverPopOver.Trigger>
              <Button
                variant="outline"
                className="rounded transition-all duration-200"
              >
                Pop Over
              </Button>
            </HoverPopOver.Trigger>
            <HoverPopOver.Content>
              <div className="mt-2 border bg-muted/40 w-64">
                {[1, 2, 3].map((elem) => {
                  return (
                    <div
                      key={elem}
                      className="px-3 py-1 hover:bg-muted/60 cursor-pointer"
                    >
                      This is Pop Over {elem}
                    </div>
                  );
                })}
              </div>
            </HoverPopOver.Content>
          </HoverPopOver>
        </div>
        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <h1 className="text-shine">{siteConfig.name}</h1>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
