"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center gap-8 text-center min-h-screen justify-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-md uppercase tracking-widest text-primary font-mono mb-4">
          Elevate your projects
        </div>
        <h1 className="max-w-3xl font-medium text-6xl tracking-tight md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary/20 via-primary/60 to-primary/90">
          {siteConfig.name}
        </h1>
      </motion.div>

      <motion.div
        className="max-w-2xl space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xl text-foreground/80">
          Collection of beautiful, accessible, and customizable UI components.
          <br />
          <span className="text-primary/70 font-medium">
            Simple Copy Paste
          </span>{" "}
          and elevate your interface.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Button
          size="lg"
          className="group rounded-md text-lg bg-primary/80 hover:bg-primary/90 transition-all duration-300"
        >
          Follow For Updates
          <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="bg-muted/20 hover:bg-muted/60 transition-all duration-300"
        >
          <FaGithub className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
      </motion.div>
    </div>
  );
}
