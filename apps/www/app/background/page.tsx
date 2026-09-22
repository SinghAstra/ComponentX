'use client';

import ConicBackground from '@/components/component-x/conic-background';
import EllipseBackground from '@/components/component-x/ellipse-background';
import GridBackground from '@/components/component-x/grid-background';
import LampBackground from '@/components/component-x/lamp-background';
import MaskedGridBackground from '@/components/component-x/masked-grid-background';
import RadialBackground from '@/components/component-x/radial-background';
import { blurInVariant, containerVariant } from '@/lib/variants';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BackgroundPage = () => {
  return (
    <div className="p-4 sm:px-8 w-full">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="min-h-screen flex items-center justify-center text-center"
      >
        <motion.h1 variants={blurInVariant} className="text-6xl">
          Collection of <br />
          Reusable Backgrounds
        </motion.h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 auto-rows-fr">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1  row-span-2 min-h-[360px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
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
          className="col-span-1  row-span-2 min-h-[360px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
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
          <RadialBackground position="left-center" animate={true} />
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 row-span-2 min-h-[360px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
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
          <EllipseBackground />
        </motion.div>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 row-span-2 min-h-[360px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
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

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          className="col-span-1 row-span-2 min-h-[360px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
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
          className="col-span-1 row-span-2 min-h-[360px] flex flex-col gap-4 items-center justify-center border border-neutral-800 rounded relative group transition-all duration-200 hover:shadow-[inset_0_-5px_30px_0px_hsl(var(--muted)),inset_0px_5px_30px_0px_hsl(var(--muted))] hover:bg-background/60"
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
      </div>
    </div>
  );
};

export default BackgroundPage;
