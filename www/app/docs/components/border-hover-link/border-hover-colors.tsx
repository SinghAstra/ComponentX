"use client";

import BorderHoverLink from "@/components/component-x/border-hover-link";

export function BorderHoverColors() {
  const colors = [
    { label: "Primary", value: "hsl(var(--primary))" },
    { label: "Muted", value: "hsl(var(--muted-foreground))" },
    { label: "Success", value: "hsl(142, 71%, 45%)" },
    { label: "Warning", value: "hsl(38, 92%, 50%)" },
  ];

  return (
    <div className="w-full h-full overflow-y-auto flex items-center justify-center">
      <div className="flex flex-col gap-4 w-fit">
        {colors.map(({ label, value }) => (
          <BorderHoverLink
            key={label}
            borderPosition="bottom"
            borderColor={value}
            duration={700}
            className="bg-background px-3 py-1 cursor-pointer rounded overflow-hidden text-center"
          >
            <p className="text-foreground ">
              Hover me{" "}
              <span
                style={{
                  color: value,
                }}
              >
                {label}
              </span>{" "}
            </p>
          </BorderHoverLink>
        ))}
      </div>
    </div>
  );
}
