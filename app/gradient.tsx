"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Orb types
type OrbShape =
  | "circle"
  | "ellipse"
  | "blob"
  | "geometric"
  | "ring"
  | "dual"
  | "mesh"
  | "wave";

interface OrbConfig {
  id: string;
  name: string;
  shape: OrbShape;
  description: string;
  className: string;
}

export function GradientOrbsShowcase() {
  const [currentOrbIndex, setCurrentOrbIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Orb configurations
  const orbs: OrbConfig[] = [
    {
      id: "circular-orb",
      name: "Circular Orb",
      shape: "circle",
      description: "A classic circular gradient with purple and blue hues",
      className:
        "bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-800 rounded-full",
    },
    {
      id: "elliptical-orb",
      name: "Elliptical Orb",
      shape: "ellipse",
      description: "An elongated elliptical gradient with teal and cyan tones",
      className:
        "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
    },
    {
      id: "blob-orb",
      name: "Organic Blob",
      shape: "blob",
      description:
        "An organic blob shape with flowing pink and purple gradients",
      className:
        "bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-700 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
    },
    {
      id: "geometric-orb",
      name: "Geometric Orb",
      shape: "geometric",
      description:
        "Angular geometric shape with sharp orange and red gradients",
      className:
        "bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-[20%_80%_20%_80%/50%_50%_50%_50%]",
    },
    {
      id: "ring-orb",
      name: "Gradient Ring",
      shape: "ring",
      description: "A donut-shaped gradient with a transparent center",
      className:
        "bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-700 rounded-full ring-[40px] ring-inset ring-transparent",
    },
    {
      id: "dual-orb",
      name: "Dual Orbs",
      shape: "dual",
      description: "Two overlapping gradient orbs creating a unique blend",
      className:
        "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 rounded-full",
    },
    {
      id: "mesh-orb",
      name: "Gradient Mesh",
      shape: "mesh",
      description:
        "Complex mesh of gradients creating a multi-dimensional effect",
      className:
        "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-indigo-700 to-blue-800 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
    },
    {
      id: "wave-orb",
      name: "Wave Orb",
      shape: "wave",
      description: "Flowing wave-like gradient patterns",
      className:
        "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 rounded-[40%_60%_60%_40%/60%_30%_70%_40%]",
    },
  ];

  const currentOrb = orbs[currentOrbIndex];

  const nextOrb = () => {
    setCurrentOrbIndex((prev) => (prev + 1) % orbs.length);
  };

  const prevOrb = () => {
    setCurrentOrbIndex((prev) => (prev - 1 + orbs.length) % orbs.length);
  };

  // Calculate parallax offset based on mouse position
  const getParallaxStyle = (factor = 1) => {
    const offsetX = (mousePosition.x - 0.5) * 50 * factor;
    const offsetY = (mousePosition.y - 0.5) * 50 * factor;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`,
    };
  };

  // Special rendering for dual orbs
  const renderDualOrbs = () => (
    <>
      <div
        className="absolute w-[40vw] h-[40vw] bg-gradient-to-r from-purple-600 to-indigo-700 rounded-full blur-xl opacity-80"
        style={{
          left: `calc(50% - 30vw + ${(mousePosition.x - 0.5) * 40}px)`,
          top: `calc(50% - 20vw + ${(mousePosition.y - 0.5) * 40}px)`,
        }}
      />
      <div
        className="absolute w-[35vw] h-[35vw] bg-gradient-to-r from-pink-500 to-rose-600 rounded-full blur-xl opacity-80"
        style={{
          left: `calc(50% - 10vw + ${(mousePosition.x - 0.5) * -30}px)`,
          top: `calc(50% - 15vw + ${(mousePosition.y - 0.5) * -30}px)`,
        }}
      />
    </>
  );

  // Special rendering for mesh orbs
  const renderMeshOrbs = () => (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-indigo-700 to-transparent opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-700 via-cyan-900 to-transparent opacity-70" />
      <div className="absolute inset-0 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-transparent" />
    </>
  );

  // Special rendering for wave orbs
  const renderWaveOrbs = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute w-[200vw] h-[200vh] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-indigo-900 opacity-70"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          left: `calc(-50vw + ${(mousePosition.x - 0.5) * 20}px)`,
          top: `calc(-50vh + ${(mousePosition.y - 0.5) * 20}px)`,
          animation: "wave 20s infinite linear",
        }}
      />
      <div
        className="absolute w-[180vw] h-[180vh] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-cyan-900 to-blue-700 opacity-50"
        style={{
          borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
          left: `calc(-40vw + ${(mousePosition.x - 0.5) * -15}px)`,
          top: `calc(-40vh + ${(mousePosition.y - 0.5) * -15}px)`,
          animation: "wave 15s infinite linear reverse",
        }}
      />
    </div>
  );

  // Special rendering for ring orbs
  const renderRingOrbs = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[60vmin] h-[60vmin]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-700 blur-md" />
        <div className="absolute inset-[40px] rounded-full bg-background" />
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Current orb display */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
        {/* Render special orbs */}
        {currentOrb.shape === "dual" && renderDualOrbs()}
        {currentOrb.shape === "mesh" && renderMeshOrbs()}
        {currentOrb.shape === "wave" && renderWaveOrbs()}
        {currentOrb.shape === "ring" && renderRingOrbs()}

        {/* Render standard orbs */}
        {!["dual", "mesh", "wave", "ring"].includes(currentOrb.shape) && (
          <motion.div
            key={currentOrb.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-[60vmin] h-[60vmin] blur-xl ${currentOrb.className}`}
            style={getParallaxStyle(0.5)}
          />
        )}

        {/* Info panel */}
        <motion.div
          className="relative z-10 bg-black/30 backdrop-blur-md p-6 rounded-xl max-w-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={`info-${currentOrb.id}`}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {currentOrb.name}
          </h2>
          <p className="text-gray-300 mb-4">{currentOrb.description}</p>
          <div className="flex justify-between items-center">
            <button
              onClick={prevOrb}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous orb"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <div className="text-sm text-gray-400">
              {currentOrbIndex + 1} / {orbs.length}
            </div>
            <button
              onClick={nextOrb}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next orb"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {orbs.map((orb, index) => (
          <button
            key={orb.id}
            onClick={() => setCurrentOrbIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentOrbIndex
                ? "bg-white scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`View ${orb.name}`}
          />
        ))}
      </div>
    </div>
  );
}
