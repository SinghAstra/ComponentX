"use client";

import BorderHoverLink from "@/components/component-x/border-hover-link";
import ConicBackground from "@/components/component-x/conic-background";
import EllipseBackground from "@/components/component-x/ellipse-background";
import {
  FloatingNavbar,
  FloatingNavbarContent,
  FloatingNavbarItem,
  FloatingNavbarSeparator,
} from "@/components/component-x/floating-navbar";
import GridBackground from "@/components/component-x/grid-background";
import LampBackground from "@/components/component-x/lamp-background";
import MaskedGridBackground from "@/components/component-x/masked-grid-background";
import MovingBackground from "@/components/component-x/moving-background";
import MovingBorder from "@/components/component-x/moving-border";
import RadialBackground from "@/components/component-x/radial-background";
import { TextShine } from "@/components/component-x/text-shine";
import Navbar from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import {
  blurInVariant,
  containerVariant,
  scaleInVariant,
} from "@/lib/variants";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BookOpen,
  Briefcase,
  Home,
  ImageIcon,
  Info,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AuthDialog } from "../docs/components/dialog/auth-dialog";
import { DialogWrapper } from "../docs/components/dialog/dialog-wrapper";
import { SearchDialog } from "../docs/components/dialog/search-dialog";
import Footer from "./footer";
import Hero from "./hero";
import { SliderBasicShowcase } from "./slider-basic-showcase";
import { SliderLabelShowcase } from "./slider-label-showcase";
import { SliderNavigationShowcase } from "./slider-navigation-showcase";
import { SliderTabShowcase } from "./slider-tab-showcase";

interface ShowCasePageProps {
  showcase?: boolean;
}

const ShowCasePage = ({ showcase = false }: ShowCasePageProps) => {
  const [showFloatingNavbar, setShowFloatingNavbar] = useState(false);

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col h-screen overflow-hidden"
    >
      <Navbar />
      <div className="w-full h-full flex flex-col overflow-y-auto p-4 sm:px-8">
        {!showcase && <LampBackground />}
        <Hero />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 mb-8">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            className="bg-background col-span-1 sm:col-span-2 lg:col-span-1 row-span-1 min-h-[400px] flex items-center justify-center border rounded relative"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/floating-navbar">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>

            {showFloatingNavbar && (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-[10] flex items-center justify-center">
                <Button
                  variant="outline"
                  className="rounded font-normal bg-muted/20 hover:bg-muted/40 transition-all duration-300"
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
              </div>
            )}
            {showFloatingNavbar && (
              <FloatingNavbar>
                <FloatingNavbarContent>
                  <FloatingNavbarItem href="/" icon={Home} label="Home" />
                  <FloatingNavbarSeparator />
                  <FloatingNavbarItem href="/docs" icon={Info} label="About" />
                  <FloatingNavbarSeparator />
                  <FloatingNavbarItem
                    href="/docs"
                    icon={Briefcase}
                    label="Work"
                  />
                  <FloatingNavbarSeparator />
                  <FloatingNavbarItem
                    href="/docs"
                    icon={BookOpen}
                    label="Blog"
                  />
                  <FloatingNavbarSeparator />
                  <FloatingNavbarItem
                    href="/docs"
                    icon={ImageIcon}
                    label="Gallery"
                  />
                </FloatingNavbarContent>
              </FloatingNavbar>
            )}
            <motion.div variants={scaleInVariant}>
              <Button
                variant="outline"
                className="rounded font-normal bg-muted/20 hover:bg-muted/40 transition-all duration-300"
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
            className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-1px_1px_0px_hsl(var(--muted)),inset_0px_1px_1px_0px_hsl(var(--muted))] hover:bg-background/60"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/conic-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>

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
            className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-1px_1px_0px_hsl(var(--muted)),inset_0px_1px_1px_0px_hsl(var(--muted))] hover:bg-background/60"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/radial-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
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
            className="bg-background relative col-span-1 row-span-1  min-h-[400px] flex items-center justify-center border rounded"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/moving-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
            <motion.div variants={scaleInVariant}>
              <Button
                variant="outline"
                className="relative bg-transparent hover:bg-transparent rounded font-normal z-[5]"
              >
                Moving Background
                <MovingBackground />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            className="col-span-1 row-span-1 min-h-[400px] flex items-center justify-center border border-neutral-800 relative rounded bg-background"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/dialog">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
            <DialogWrapper />
          </motion.div>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-1px_1px_0px_hsl(var(--muted)),inset_0px_1px_1px_0px_hsl(var(--muted))] hover:bg-background/60"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/ellipse-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
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
            className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-1px_1px_0px_hsl(var(--muted)),inset_0px_1px_1px_0px_hsl(var(--muted))] hover:bg-background/60"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/lamp-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
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
          <div className="col-span-1 row-span-1 min-h-[400px] relative flex items-center justify-center border border-neutral-800 rounded bg-background">
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/dialog#search-dialog">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>

            <SearchDialog />
          </div>
          <div className="col-span-1 row-span-1 min-h-[400px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/moving-border">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
            <div className="p-[2px] relative z-[2] overflow-hidden rounded">
              <MovingBorder>
                <div className="w-full h-full px-3 py-1 rounded">
                  Moving Border
                </div>
              </MovingBorder>
            </div>
          </div>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-1px_1px_0px_hsl(var(--muted)),inset_0px_1px_1px_0px_hsl(var(--muted))] hover:bg-background/60"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/grid-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
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
            className="col-span-1 sm:col-span-2 row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300 hover:shadow-[inset_0_-1px_1px_0px_hsl(var(--muted)),inset_0px_1px_1px_0px_hsl(var(--muted))] hover:bg-background/60"
          >
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/masked-grid-background">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
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
          <div className="col-span-1  row-span-1 min-h-[400px] flex items-center justify-center border border-neutral-800 rounded relative bg-background">
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/dialog#authentication-dialog">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
            <AuthDialog />
          </div>

          <div className="col-span-1 row-span-1 min-h-[400px] flex items-center justify-center border border-neutral-800 rounded bg-background relative">
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/border-hover-link">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
            <BorderHoverLink
              borderPosition="bottom"
              borderColor="hsl(var(--primary))"
              duration={700}
              className="bg-muted/60 hover:bg-muted/30 border transition-all duration-300 px-3 py-1 cursor-pointer rounded overflow-hidden"
            >
              Hover over me
            </BorderHoverLink>
          </div>

          <div className="col-span-1 row-span-1 min-h-[400px] flex items-center justify-center border border-neutral-800 rounded bg-background relative">
            <div className="absolute top-2 right-2">
              <Link href="/docs/components/text-shine">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
                >
                  View Docs
                </Button>
              </Link>
            </div>
            <TextShine>{siteConfig.name}</TextShine>
          </div>
          <SliderBasicShowcase />
          <SliderNavigationShowcase />
          <SliderTabShowcase />
          <SliderLabelShowcase />
          
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default ShowCasePage;
