import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ItemStatus } from "@/types/item";

interface StatusBadgeProps {
  status: ItemStatus;
}

const statusConfig: Record<ItemStatus, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "bg-green-100 text-green-800 hover:bg-green-200",
  },
  pending: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  },
  completed: {
    label: "Completed",
    className: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant="secondary" className={cn("font-medium", config.className)}>
      {config.label}
    </Badge>
  );
}
