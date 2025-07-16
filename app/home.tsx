"use client";
import { Button } from "@/components/ui/button";
import { containerVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Hero from "./hero";
import AuthModalShowCase from "./showcase/auth-modal-showcase";
import DialogBoilerPlateShowCase from "./showcase/dialog-boilerplate-showcase";
import MovingBackgroundShowCase from "./showcase/moving-background-showcase";
import SearchDialogShowCase from "./showcase/search-dialog-showcase";
import { FloatingNavbar } from "./ui/floating-navbar";
import MovingGlow from "./ui/moving-glow";
import NotificationInput from "./ui/notification-input";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr  px-2">
        <div className="bg-background col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded">
          <FloatingNavbar showNavbar={showFloatingNavbar} />
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
        </div>

        {/* <div className="min-h-screen flex items-center justify-center border mx-4 sm:mx-8 rounded">
        <SpringCarousel items={carouselItems} />
      </div> */}

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-background col-span-1 row-span-1  min-h-[250px] flex items-center justify-center border border-neutral-800 rounded"
        >
          <MovingBackgroundShowCase />
        </motion.div>

        <div className="col-span-1 row-span-1 min-h-[250px] flex items-center justify-center border border-neutral-800 rounded bg-background">
          <DialogBoilerPlateShowCase />
        </div>
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
