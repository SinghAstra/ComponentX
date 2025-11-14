"use client";

import { motion } from "framer-motion";

export default function Transform() {
  const color = "hsl(var(--primary))";
  const width = 400;
  const height = 400;

  return (
    <main className="min-h-screen flex items-center justify-center w-full overflow-hidden">
      <div className="border p-2 relative">
        <motion.div
          className="absolute top-1/2 left-1/2 -z-10"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 20deg, transparent 90deg)`,
            width: `${width}px`,
            height: `${height}px`,
            x: "-50%",
            y: "-50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        <div className="bg-background px-3 py-1 relative z-10">Hey There</div>
      </div>
    </main>
  );
}
