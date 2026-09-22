'use client';

import BorderHoverLink from '@/components/component-x/border-hover-link';
import { siteConfig } from '@/config/site';
import { containerVariant, fadeInVariant } from '@/lib/variants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
    >
      <footer className="flex flex-col sm:flex-row gap-4 sticky inset-x-0 bottom-0 p-4 items-center justify-between border-t border-border mx-4 sm:mx-8 ">
        <motion.div variants={fadeInVariant}>
          <span className=" text-muted-foreground flex gap-2 items-center tracking-wider">
            Made by{' '}
            <BorderHoverLink className="text-foreground tracking-wider">
              <Link target="_blank" href={siteConfig.links.github}>
                SinghAstra
              </Link>
            </BorderHoverLink>
          </span>
        </motion.div>
        <motion.div variants={fadeInVariant}>
          <BorderHoverLink className="text-foreground tracking-wider">
            <Link target="_blank" href={siteConfig.links.twitter}>
              Connect on X
            </Link>
          </BorderHoverLink>
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default Footer;
