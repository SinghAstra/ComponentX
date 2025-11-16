"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import { z } from "zod";

export interface SubscribeInputProps {
  schema: z.ZodSchema;
  onSuccess?: (value: string) => void;
  onError?: (error: string) => void;
  buttonLabel?: string;
  placeholder?: string;
  inputName?: string;
  maxWidth?: string;
  enableAnimation?: boolean;
  inputClassName?: string;
  buttonClassName?: string;
  containerClassName?: string;
}

export const SubscribeInput = ({
  schema,
  onSuccess,
  onError,
  buttonLabel = "Submit",
  placeholder = "Enter value",
  inputName = "input",
  maxWidth = "max-w-[400px]",
  enableAnimation = true,
  inputClassName,
  buttonClassName,
  containerClassName,
}: SubscribeInputProps) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (message) {
      setMessage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = schema.safeParse(value);

    if (!validationResult.success) {
      const errorMsg =
        validationResult.error.errors[0]?.message || "Validation failed";
      setMessage(errorMsg);
      onError?.(errorMsg);
    } else {
      setMessage(null);
      onSuccess?.(value);
      setValue("");
    }
  };

  return (
    <div className={cn("space-y-2", containerClassName)}>
      <motion.div
        whileInView={
          enableAnimation && message ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col gap-1 mx-4"
      >
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className={cn(
                `flex ${maxWidth} w-full h-[50px] rounded border bg-transparent px-3 py-2 pr-32 text-2xl shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-md lg:text-xl`,
                message && "border-destructive focus-visible:ring-destructive",
                inputClassName
              )}
              id={inputName}
              name={inputName}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              autoComplete="off"
            />
            <div className="absolute right-1 top-1 bottom-1">
              <Button
                className={cn(
                  "rounded font-normal transition-all duration-200 h-full",
                  buttonClassName
                )}
                type="submit"
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </form>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-destructive"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default SubscribeInput;
