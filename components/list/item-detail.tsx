import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@/types/item";
import { format } from "date-fns";
import { Calendar, Info } from "lucide-react";
import { StatusBadge } from "../custom-ui/status-badge";

interface ItemDetailProps {
  item: Item | null;
}

export function ItemDetail({ item }: ItemDetailProps) {
  if (!item) {
    return (
      <Card className="w-2/3">
        <CardContent className="flex h-[calc(100vh-8rem)] items-center justify-center">
          <div className="text-center">
            <Info className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-2 text-lg font-medium">No item selected</p>
            <p className="text-sm text-muted-foreground">
              Select an item from the list to view its details
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-2/3">
      <CardHeader className="flex-row items-start justify-between space-y-0">
        <CardTitle>{item.title}</CardTitle>
        <StatusBadge status={item.status} />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium">Description</h3>
          <p className="mt-1.5 text-muted-foreground">{item.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Created</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(item.createdAt), "PPP")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-sm text-muted-foreground">
                {format(new Date(item.updatedAt), "PPP")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
