"use client";

import { TagInput } from "@/components/component-x/tag-input";
import { Button } from "@/components/ui/button";
import { containerVariant, scaleInVariant } from "@/lib/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export function TagInputShowcase() {
  const [tags, setTags] = useState<string[]>([
    "Hey",
    "man",
    "how",
    "are",
    "you ?",
  ]);

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      className="col-span-1 sm:col-span-2 bg-background row-span-1 flex flex-col gap-4 items-center justify-center border rounded relative group transition-all duration-300"
    >
      <div className="absolute top-2 right-2">
        <Link href="/docs/components/tag-input">
          <Button
            variant="outline"
            size="sm"
            className="font-normal rounded bg-muted/40 hover:bg-muted/20 transition-all duration-300"
          >
            View Docs
          </Button>
        </Link>
      </div>

      <motion.div
        variants={scaleInVariant}
        className="w-full max-w-md px-6 pb-6"
      >
        <TagInput
          value={tags}
          onChange={setTags}
          label="Messages"
          placeholder="Type in your message..."
          required
        />
      </motion.div>
    </motion.div>
  );
}

export default TagInputShowcase;
