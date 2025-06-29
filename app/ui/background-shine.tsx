import { cn } from "@/lib/utils";

export function BackgroundShine() {
  return (
    <div
      className={cn("absolute inset-0 z-[-3] rounded-[inherit] shine ")}
      style={{
        background:
          "linear-gradient(110deg, transparent 49%,hsl(var(--muted-foreground)) 50%,transparent 51%)",
        backgroundSize: "400% 100%",
      }}
    />
  );
}
