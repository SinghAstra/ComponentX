import { cn } from "@/lib/utils";

export function BackgroundShine() {
  return (
    <div
      className={cn(
        "absolute inset-0 z-[-3] rounded-[inherit]",
        "bg-[linear-gradient(110deg,transparent_0%,hsl(var(--background))_49%,hsl(var(--muted))_50%,hsl(var(--background))_51%,transparent_100%)] bg-[length:400%_100%] ",
        "shine"
      )}
    />
  );
}
