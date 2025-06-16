import { AnimatedGlowBackground } from "./animated-glow-background";
import { LayeredGradientBackground } from "./layered-gradient-background";
import { NoiseTextureBackground } from "./noise-texture-background";

export default function BackgroundShowcase() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Glow Section */}
      <section className="relative h-screen flex items-center justify-center bg-slate-800">
        <AnimatedGlowBackground glowColor="rgb(34, 197, 94)" intensity={0.4} />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Animated Glow</h2>
          <p className="text-lg opacity-80">Pulsing ambient lighting</p>
        </div>
      </section>

      {/* Layered Gradients Section */}
      <section className="relative h-screen flex items-center justify-center">
        <LayeredGradientBackground
          layers={[
            {
              gradient:
                "linear-gradient(45deg, rgb(236, 72, 153) 0%, rgb(239, 68, 68) 100%)",
              opacity: 0.7,
              blendMode: "normal",
            },
            {
              gradient:
                "radial-gradient(circle at 80% 20%, rgb(168, 85, 247) 0%, transparent 60%)",
              opacity: 0.5,
              blendMode: "screen",
            },
          ]}
        />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Layered Gradients</h2>
          <p className="text-lg opacity-80">Multiple blend modes</p>
        </div>
      </section>

      {/* Noise Texture Section */}
      <section className="relative h-screen flex items-center justify-center bg-indigo-900">
        <NoiseTextureBackground intensity={0.08} scale={80} />
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">Noise Texture</h2>
          <p className="text-lg opacity-80">Subtle grain overlay</p>
        </div>
      </section>
    </div>
  );
}
