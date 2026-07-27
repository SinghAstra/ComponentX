import { useId } from "react";

interface TextShineProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  shineColor?: string;
  shineStartOpacity?: number;
  shinePeakOpacity?: number;
  shineEndOpacity?: number;
}

export function TextShine({
  children,
  className = "",
  duration = 6,
  shineColor = "rgba(255, 255, 255, 1)",
  shineStartOpacity = 0.3,
  shinePeakOpacity = 0.8,
  shineEndOpacity = 0.3,
}: TextShineProps) {
  const id = useId();
  const animationId = `shine-${id.replace(/:/g, "")}`;

  const startColor = shineColor.replace(
    /[\d.]+(?=\))/,
    shineStartOpacity.toString()
  );
  const peakColor = shineColor.replace(
    /[\d.]+(?=\))/,
    shinePeakOpacity.toString()
  );
  const endColor = shineColor.replace(
    /[\d.]+(?=\))/,
    shineEndOpacity.toString()
  );

  return (
    <>
      <style>{`
        @keyframes ${animationId} {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -400% 0;
          }
        }

        .${animationId} {
          background: linear-gradient(
            90deg,
            ${startColor} 0%,
            ${peakColor} 20%,
            ${endColor} 40%
          );
          background-position: 0 0;
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: ${animationId} ${duration}s linear infinite;
        }
      `}</style>

      <span className={`${animationId} ${className}`}>{children}</span>
    </>
  );
}
