import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function Callout({
  title,
  children,
  icon,
  className,
  ...props
}: React.ComponentProps<typeof Alert> & { icon?: string }) {
  return (
    <Alert className={cn("bg-muted/50 flex my-2", className)} {...props}>
      {icon && <span className="mr-2 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
