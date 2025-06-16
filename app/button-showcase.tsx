"use client";

import { cn } from "@/lib/utils";
import * as Slot from "@radix-ui/react-slot";

type Variant = {
  variant: string;
  component: React.FC<React.ComponentProps<"button">>;
};

const variants = [
  //   {
  //     variant: "default",
  //     component: ({ className, ...props }) => (

  //     ),
  //   },
  {
    variant: "outline",
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          "relative rounded-xl border border-border bg-main-background px-4 py-2 transition-all duration-200",
          "text-primary-foreground hover:bg-main-foreground/40",
          className
        )}
      />
    ),
  },
  {
    variant: "animated-border",
    component: ({ children, className, ...props }) => (
      <button
        {...props}
        className={cn(
          "relative rounded-xl border border-primary/10 bg-main-background px-4 py-2 duration-200 hover:bg-main-foreground/40",
          className
        )}
      >
        <div
          className={cn(
            "-inset-px pointer-events-none absolute rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box]",
            "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
          )}
        >
          <motion.div
            className={cn(
              "absolute aspect-square bg-gradient-to-r from-transparent via-neutral-300 to-neutral-400",
              "dark:from-transparent dark:via-neutral-600 dark:to-neutral-400"
            )}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 20,
              offsetPath: `rect(0 auto auto 0 round ${20}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "linear",
            }}
          />
        </div>
        <span className="relative z-10 text-primary-muted">{children}</span>
      </button>
    ),
  },
  {
    variant: "rotate-border",
    component: ({ children, className, ...props }) => (
      <button
        {...props}
        className="relative inline-flex overflow-hidden rounded-xl p-px"
      >
        <span
          className={cn(
            "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]",
            "dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]"
          )}
        />
        <span
          className={cn(
            "inline-flex size-full items-center justify-center rounded-[11px] bg-main-background px-4 py-2 text-primary-foreground backdrop-blur-3xl",
            className
          )}
        >
          {children}
        </span>
      </button>
    ),
  },
] as const satisfies readonly Variant[];

export type ButtonProps = {
  variant?: (typeof variants)[number]["variant"];
  isMagnetic?: boolean;
} & React.ComponentProps<"button">;

export function Button({ className, ...props }: ButtonProps) {
  const buttonContent = (
    <Slot.Root className={cn("font-medium text-sm")}>
      <button
        {...props}
        className={cn(
          "relative rounded-xl border border-transparent bg-muted/40 px-4 py-2 text-foreground transition-all duration-200",
          className
        )}
      />
    </Slot.Root>
  );

  return buttonContent;
}
