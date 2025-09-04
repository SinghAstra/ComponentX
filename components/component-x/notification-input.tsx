"use client";

import { useToastContext } from "@/components/providers/toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import { z } from "zod";

const emailSchema = z
  .string()
  .email({ message: "Enter a valid email address" });

const NotificationInput = () => {
  const { setToastMessage } = useToastContext();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error when user starts typing after an error has been displayed
    if (message) {
      setMessage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const validationResult = emailSchema.safeParse(email);

    if (!validationResult.success) {
      setMessage(
        validationResult.error.errors[0]?.message || "Invalid email address"
      );
    } else {
      setMessage(null);
      setToastMessage(`Welcome ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="space-y-2">
      <motion.div
        whileInView={message ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col gap-1 mx-4"
      >
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className={cn(
                "flex max-w-[400px] w-full h-[50px] rounded border border-neutral-800 bg-transparent px-3 py-2 pr-32 text-3xl shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-md lg:text-xl",
                message && "border-destructive focus-visible:ring-destructive"
              )}
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="absolute right-1 top-1 bottom-1 ">
              <Button
                className="rounded font-normal transition-all duration-200 h-full "
                type="submit"
              >
                Get Notified
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

export default NotificationInput;
