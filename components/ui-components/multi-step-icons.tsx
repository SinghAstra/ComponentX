import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export type Stage = {
  id: string;
  icon: LucideIcon;
  title?: string;
  status: "completed" | "current" | "pending" | "error";
};

type MultiStageProcessProps = {
  stages: Stage[];
  className: string;
  direction?: "horizontal" | "vertical";
};

const MultiStepIcons = ({
  stages,
  className,
  direction = "vertical",
}: MultiStageProcessProps) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "flex p-4 bg-background rounded-lg border shadow-md justify-between",
        isHorizontal ? "flex-row w-xl" : "flex-col h-full",
        className
      )}
    >
      {stages.map((stage, index) => (
        <div
          key={stage.id}
          className={cn(
            " flex items-center",
            isHorizontal ? "flex-row w-full" : "flex-col",
            index < stages.length - 1 && "flex-grow"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center ",
              isHorizontal ? "flex-col" : "flex-row"
            )}
          >
            <div
              className={cn(
                "rounded-full flex items-center justify-center ",
                "w-16 h-16",
                {
                  "bg-green-600/20 text-green-600":
                    stage.status === "completed",
                  "bg-primary/20 text-primary": stage.status === "current",
                  "bg-muted/20 text-muted-foreground":
                    stage.status === "pending",
                  "bg-red-600/20 text-red-600": stage.status === "error",
                }
              )}
            >
              <stage.icon className="w-8 h-8" />
            </div>
          </div>
          {index < stages.length - 1 && (
            <div
              className={cn(
                "flex-grow border border-purple-400",
                isHorizontal ? " h-px mx-2 " : "w-px my-2"
              )}
            >
              {/* <div
                className={cn({
                  "bg-green-300":
                    stages[index].status === "completed" &&
                    stages[index + 1].status !== "pending",
                  "bg-muted": stages[index + 1].status === "pending",
                })}
              /> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiStepIcons;
