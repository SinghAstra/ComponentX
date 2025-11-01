import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

export const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground",
        "min-w-[120px]",
        className
      )}
      {...props}
    />
  );
});

InputField.displayName = "InputField";
