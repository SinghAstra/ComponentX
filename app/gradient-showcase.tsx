"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

function GradientShowCase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Theme-dependent gradients using primary color variations
  const gradients = [
    {
      name: "Primary Whisper",
      gradient:
        "linear-gradient(135deg, hsl(var(--primary)/0.02), hsl(var(--primary)/0.08), hsl(var(--background)))",
      description: "Ultra-subtle primary color whisper",
    },
    {
      name: "Primary Glow",
      gradient:
        "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--primary)/0.25), hsl(var(--primary)/0.05))",
      description: "Soft primary glow with smooth transitions",
    },
    {
      name: "Primary Depth",
      gradient:
        "linear-gradient(to bottom right, hsl(var(--primary)/0.15), hsl(var(--primary)/0.4), hsl(var(--primary)/0.08))",
      description: "Deep primary tones creating depth",
    },
    {
      name: "Primary Fade",
      gradient:
        "linear-gradient(45deg, hsl(var(--primary)/0.05), hsl(var(--primary)/0.3), hsl(var(--primary)/0.12))",
      description: "Gentle primary color fade",
    },
    {
      name: "Primary Flow",
      gradient:
        "linear-gradient(to right, hsl(var(--primary)/0.08), hsl(var(--primary)/0.35), hsl(var(--primary)/0.15), hsl(var(--primary)/0.03))",
      description: "Flowing primary color blend",
    },
    {
      name: "Primary Mist",
      gradient:
        "linear-gradient(135deg, hsl(var(--background)), hsl(var(--primary)/0.06), hsl(var(--primary)/0.18), hsl(var(--background)))",
      description: "Misty primary color overlay",
    },
    {
      name: "Primary Cascade",
      gradient:
        "linear-gradient(to bottom, hsl(var(--primary)/0.12), hsl(var(--primary)/0.28), hsl(var(--primary)/0.45), hsl(var(--primary)/0.08))",
      description: "Cascading primary color intensity",
    },
    {
      name: "Primary Radial",
      gradient:
        "radial-gradient(ellipse at center, hsl(var(--primary)/0.08), hsl(var(--primary)/0.22), hsl(var(--primary)/0.05), hsl(var(--background)))",
      description: "Radial primary color emanation",
    },
    {
      name: "Primary Sweep",
      gradient:
        "linear-gradient(60deg, hsl(var(--background)), hsl(var(--primary)/0.1), hsl(var(--primary)/0.3), hsl(var(--primary)/0.15), hsl(var(--background)))",
      description: "Diagonal primary color sweep",
    },
    {
      name: "Primary Spiral",
      gradient:
        "conic-gradient(from 0deg at 50% 50%, hsl(var(--primary)/0.05), hsl(var(--primary)/0.25), hsl(var(--primary)/0.12), hsl(var(--primary)/0.35), hsl(var(--primary)/0.05))",
      description: "Spiral primary color rotation",
    },
    {
      name: "Primary Layers",
      gradient:
        "linear-gradient(135deg, hsl(var(--primary)/0.03) 0%, hsl(var(--primary)/0.15) 25%, hsl(var(--primary)/0.4) 50%, hsl(var(--primary)/0.2) 75%, hsl(var(--primary)/0.06) 100%)",
      description: "Layered primary color transitions",
    },
    {
      name: "Primary Harmony",
      gradient:
        "radial-gradient(circle at 30% 70%, hsl(var(--primary)/0.2), transparent 50%), radial-gradient(circle at 70% 30%, hsl(var(--primary)/0.15), transparent 50%), linear-gradient(135deg, hsl(var(--primary)/0.05), hsl(var(--primary)/0.1))",
      description: "Harmonious primary color composition",
    },
  ];

  const nextGradient = () => {
    setCurrentIndex((prev) => (prev + 1) % gradients.length);
  };

  const prevGradient = () => {
    setCurrentIndex((prev) => (prev - 1 + gradients.length) % gradients.length);
  };

  const currentGradient = gradients[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Full screen gradient display */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: currentGradient.gradient,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Theme Gradient Showcase
          </h1>
          <p className="text-muted-foreground">
            Smooth variations using your primary color with different opacities
          </p>
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 max-w-2xl w-full">
            <div className="text-center space-y-6">
              <div>
                <h2 className="text-3xl font-semibold text-foreground mb-2">
                  {currentGradient.name}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {currentGradient.description}
                </p>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg">
                <code className="text-sm text-muted-foreground break-all">
                  {currentGradient.gradient}
                </code>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prevGradient}
                  className="bg-background/50 text-foreground border-border/50"
                >
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {gradients.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-primary scale-125"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={nextGradient}
                  className="bg-background/50 text-foreground border-border/50"
                >
                  Next
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                {currentIndex + 1} of {gradients.length}
              </div>
            </div>
          </Card>
        </div>

        {/* Grid view toggle */}
        <div className="p-8">
          <GridView gradients={gradients} />
        </div>
      </div>
    </div>
  );
}

function GridView({
  gradients,
}: {
  gradients: Array<{ name: string; gradient: string; description: string }>;
}) {
  const [showGrid, setShowGrid] = useState(false);

  if (!showGrid) {
    return (
      <div className="text-center">
        <Button
          variant="outline"
          onClick={() => setShowGrid(true)}
          className="bg-background/50 text-foreground border-border/50"
        >
          View All Gradients
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-foreground">
          All Gradients
        </h3>
        <Button
          variant="outline"
          onClick={() => setShowGrid(false)}
          className="bg-background/50 text-foreground border-border/50"
        >
          Hide Grid
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gradients.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-card/80 backdrop-blur-sm border-border/50"
          >
            <div
              className="h-32 w-full"
              style={{ backgroundImage: item.gradient }}
            />
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-1">
                {item.name}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {item.description}
              </p>
              <code className="text-xs bg-muted/20 p-2 rounded block overflow-x-auto text-muted-foreground">
                {item.gradient}
              </code>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default GradientShowCase;
