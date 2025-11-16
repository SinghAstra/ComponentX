'use client';

import { Button } from '@/components/ui/button';
import { scaleInVariant } from '@/lib/variants';
import { motion } from 'framer-motion';
import { Command } from 'lucide-react';
import React, { useState } from 'react';
import Dialog from '../../../../components/component-x/dialog';

export const DialogWrapper = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <>
      <motion.div variants={scaleInVariant}>
        <Button
          className="rounded px-3 py-1 font-normal hover:bg-muted/40 transition-all duration-300"
          variant="outline"
          onClick={() => setIsDialogVisible(true)}
        >
          <span className="text-muted-foreground">Dialog Wrapper</span>
          <span className="flex items-center gap-1 bg-muted/60 p-1 rounded mr-[-0.5rem]">
            <Command />K
          </span>
        </Button>
      </motion.div>

      <Dialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
        keyToMakeDialogVisible="k"
      >
        <div className="px-3 py-2">
          <p> This is the Dialog</p> <p>Press Escape to Cancel</p>
        </div>
      </Dialog>
    </>
  );
};
