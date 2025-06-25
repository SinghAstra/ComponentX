"use client";

import { useToastContext } from "@/components/providers/toast";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

function GradientShowCase() {
  const gradients = [
    {
      name: "Primary Linear Gradient",
      gradient:
        "linear-gradient(135deg, hsl(var(--primary)/0.04),hsl(var(--primary)/0.16), hsl(var(--primary)/0.04))",
      description: "Primary Linear Gradient to bottom right",
    },
    {
      name: "Primary Circular Radial Gradient",
      gradient:
        "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.04), hsl(var(--primary)/0.09), hsl(var(--primary)/0.16))",
      description: "Primary Circular Radial Gradient centered at top left",
    },
    {
      name: "Primary Circular Radial Gradient",
      gradient:
        "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.04), hsl(var(--primary)/0.09), hsl(var(--primary)/0.16))",
      description: "Primary Circular Radial Gradient centered at center",
    },
    {
      name: "Primary Ellipse Radial Gradient",
      gradient:
        "radial-gradient(ellipse at 0% 0%,hsl(var(--primary)/0.04), hsl(var(--primary)/0.09), hsl(var(--primary)/0.16))",
      description: "Primary Ellipse Radial Gradient centered at top left",
    },
    {
      name: "Primary Ellipse Radial Gradient",
      gradient:
        "radial-gradient(ellipse at 50% 50%, hsl(var(--primary)/0.04), hsl(var(--primary)/0.09), hsl(var(--primary)/0.16))",
      description: "Primary Ellipse Radial Gradient centered at center",
    },
    {
      name: "Primary Conic Gradient",
      gradient:
        "conic-gradient(from 0deg at 50% 50%,  hsl(var(--background)) 60deg, hsl(var(--primary)/0.8) 90deg, hsl(var(--background)) 120deg)",
      description: "Primary Conic Gradient at center",
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { setToastMessage } = useToastContext();

  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(gradients[index].gradient).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });

    setToastMessage(`Gradient Copied For ${gradients[index].name}`);
  };

  return (
    <div>
      {gradients.map((gradient, index) => {
        return (
          <div
            key={index}
            className="min-h-screen flex items-center justify-center"
          >
            <div className="h-[80vh] w-[80vw] flex items-center justify-center border border-neutral-800/40 relative">
              <div
                className="absolute inset-0 z-[-3] "
                style={{
                  background: gradient.gradient,
                  opacity: 0.6,
                }}
              />
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-4xl">{gradient.name}</h1>
                <p className="text-muted-foreground">{gradient.description}</p>
                <div className="relative bg-muted/40 rounded text-muted-foreground px-3 py-2 max-w-[70%]">
                  <p className="mr-12">{gradient.gradient}</p>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className={`absolute top-1 right-1 bg-muted/40 transition-all duration-200 hover:bg-muted/60`}
                    onClick={() => handleCopy(index)}
                    aria-label="Copy gradient to clipboard"
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 transition-all duration-200" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GradientShowCase;
