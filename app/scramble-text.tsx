"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleDuration?: number;
}

export function ScrambleText({
  text,
  className,
  scrambleDuration = 2000,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);

  // Characters used for scrambling effect
  const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isScrambling) {
      // Scrambling phase - show random characters
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map(
              () =>
                scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
            )
            .join("")
        );
      }, 50);

      // Stop scrambling after duration and reveal text
      setTimeout(() => {
        setIsScrambling(false);
        clearInterval(interval);

        // Gradually reveal the actual text
        let revealIndex = 0;
        const revealInterval = setInterval(() => {
          setDisplayText(
            text
              .split("")
              .map((char, index) =>
                index <= revealIndex
                  ? char
                  : scrambleChars[
                      Math.floor(Math.random() * scrambleChars.length)
                    ]
              )
              .join("")
          );

          revealIndex++;
          if (revealIndex >= text.length) {
            clearInterval(revealInterval);
          }
        }, 50);
      }, scrambleDuration);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, scrambleDuration, isScrambling]);

  return (
    <div className={cn("text-foreground font-mono", className)}>
      {displayText}
    </div>
  );
}
