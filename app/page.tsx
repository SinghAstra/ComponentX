"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { blurInVariant, containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { FloatingText } from "./floating-text";
import { GradientText } from "./gradient-text";
import Hero from "./hero";
import { HighlightText } from "./highlight-text";
import { ScrambleText } from "./scramble-text";
import AuthModalShowCase from "./showcase/auth-modal-showcase";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import GradientInsetBackgroundShowCase from "./showcase/gradient-inset-background-showcase";
import MovingBackgroundShowCase from "./showcase/moving-background-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";
import { carouselItems } from "./showcase/spring-carousel";
import { TextReveal } from "./text-reveal";
import { TypewriterEffect } from "./typewriter-effect";
import ConicGradientBackground from "./ui/conic-gradient-background";
import EdgeTriadBanner from "./ui/edge-triad-banner";
import { FloatingNavbar } from "./ui/floating-navbar";
import GridBackground from "./ui/grid-background";
import LightBulbGradient from "./ui/light-bulb-gradient";
import MaskedGridBackground from "./ui/masked-grid-background";
import MovingGlow from "./ui/moving-glow";
import NotificationInput from "./ui/notification-input";
import RadialFadeBackground from "./ui/radial-fade-background";
import RadialFadePulsatingBackground from "./ui/radial-fade-pulsating-background";
import ReverseEdgeTriadBanner from "./ui/reverse-edge-triad-banner";
import ReverseTriadBanner from "./ui/reverse-triad-banner";
import { SpringCarousel } from "./ui/spring-carousel";
import TriadBanner from "./ui/triad-banner";
import { WaveText } from "./wave-text";

const HomePage = () => {
  const [showFloatingNavbar, setShowFloatingNavbar] = useState(false);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="min-h-screen flex flex-col gap-8 "
    >
      <div className="min-h-screen bg-background text-foreground p-8 space-y-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Text Animation Showcase</h1>
            <p className="text-muted-foreground">
              Modern text animations using Tailwind CSS and Framer Motion
            </p>
          </div>

          {/* Gradient Text */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Gradient Text
            </h2>
            <GradientText
              text="Beautiful gradient text animation"
              className="text-4xl font-bold"
            />
          </section>

          {/* Text Reveal */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Text Reveal
            </h2>
            <TextReveal
              text="Text reveals character by character"
              className="text-2xl font-medium"
            />
          </section>

          {/* Floating Text */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Floating Text
            </h2>
            <FloatingText
              text="Floating text with subtle movement"
              className="text-xl"
            />
          </section>

          {/* Scramble Text */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Scramble Effect
            </h2>
            <ScrambleText
              text="Text scrambles before revealing"
              className="text-xl font-mono"
            />
          </section>

          {/* Highlight Text */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Highlight Animation
            </h2>
            <HighlightText
              text="This text gets highlighted with animation"
              highlightWords={["highlighted", "animation"]}
              className="text-xl"
            />
          </section>

          {/* Wave Text */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2">
              Wave Animation
            </h2>
            <WaveText
              text="Wave animation effect"
              className="text-3xl font-bold"
            />
          </section>
        </div>
      </div>
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr  px-2">
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <FloatingNavbar showNavbar={showFloatingNavbar} />
          <Button
            variant="outline"
            className="rounded font-normal hover:bg-muted/20"
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

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Conic Gradient Background
          </motion.h1>
          <ConicGradientBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Radial Fade Background
          </motion.h1>
          <RadialFadeBackground />
        </div>

        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <GradientInsetBackgroundShowCase />
        </div>
      </div>

      <div className="h-screen flex items-center justify-center px-4 sm:px-8 w-full ">
        <div
          className="h-[80vh] w-full flex flex-col gap-8 items-center justify-start border border-neutral-800 rounded relative overflow-y-auto p-8 sm:p-16"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, hsl(var(--primary)/0.2) 0%, hsl(var(--primary)/0.3) 40%, hsl(var(--primary)/0.4) 50%, transparent 60%)",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="min-h-[60vh] w-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl border rounded bg-muted/10 text-center">
            This Will
          </div>
          <div className="min-h-[60vh] w-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl border rounded bg-muted/10 text-center">
            be the
          </div>
          <div className="min-h-[60vh] w-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl border rounded bg-muted/10 text-center">
            content above
          </div>
          <div className="min-h-[60vh] w-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl border rounded bg-muted/10 text-center">
            Centered Radial Background
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center border mx-4 sm:mx-8 rounded">
        <SpringCarousel items={carouselItems} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr px-2">
        <div className="col-span-1 row-span-2  min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <MovingBackgroundShowCase />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Radial Fade Pulsating Background
          </motion.h1>
          <RadialFadePulsatingBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Light Bulb Gradient
          </motion.h1>
          <LightBulbGradient />
        </div>
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <DialogBoilerPlateShowCase />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr px-2">
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded ">
          <SearchDialogShowCase />
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <TriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Triad Banner
          </motion.h1>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <ReverseTriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Reverse Triad Banner
          </motion.h1>
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] relative flex items-center justify-center border border-neutral-800 rounded">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Grid
          </motion.h1>
          <GridBackground />
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Masked Grid
          </motion.h1>
          <MaskedGridBackground />
        </div>

        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <EdgeTriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Edge Triad Banner
          </motion.h1>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <ReverseEdgeTriadBanner />
          <motion.h1
            className="text-2xl sm:text-4xl font-normal text-center"
            variants={blurInVariant}
          >
            Reverse Edge Triad Banner
          </motion.h1>
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <div className="px-4 py-1 border border-neutral-800/40 relative">
            <MovingGlow />
            Moving Glow
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 min-h-[250px]  border border-neutral-800 rounded relative flex items-center justify-center">
          <TypewriterEffect
            words={[
              `Welcome to ${siteConfig.name} !`,
              `${siteConfig.name} is  Open Source.`,
              `${siteConfig.name} is collection of Reusable UI Components.`,
              `${siteConfig.name} is built on top of ShadCn.`,
              `${siteConfig.name} is maintained by @SinghAstra.`,
            ]}
            className=" text-xl sm:text-2xl lg:text-3xl font-normal"
          />
        </div>

        <div className="col-span-1 row-span-2 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded relative">
          <AuthModalShowCase />
        </div>
        <div className="col-span-1 row-span-2 min-h-[120px] flex items-center justify-center border border-neutral-800 rounded">
          <NotificationInput />
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
