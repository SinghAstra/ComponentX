import { cn } from "@/lib/utils";

export function BackgroundShine() {
  return (
    <div
      className={cn(
        "absolute inset-0 ",
        "bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)]  bg-[length:400%_100%]"
        // "shine"
      )}
    />
  );
}
