import { cn } from "@/lib/utils";

function MovingBackground() {
  return (
    <div
      className={cn("absolute inset-0 z-[-3] rounded-[inherit] shine ")}
      style={{
        background:
          "linear-gradient(110deg,hsl(var(--background)) 45%,hsl(var(--muted)) 55%,hsl(var(--background))) ",
        backgroundSize: "400% 100%",
      }}
    />
  );
}

export default MovingBackground;
