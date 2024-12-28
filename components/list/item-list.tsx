import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Item } from "@/types/item";
import { Search } from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "../custom-ui/status-badge";

interface ItemListProps {
  items: Item[];
  selectedItem: Item | null;
  onSelectItem: (item: Item) => void;
}

export function ItemList({ items, selectedItem, onSelectItem }: ItemListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="w-1/3 flex flex-col ">
      <CardHeader>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="px-4 pb-4">
            {filteredItems.length > 0 ? (
              <div className="space-y-2">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "rounded-lg border p-3 cursor-pointer transition-all",
                      selectedItem?.id === item.id
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50"
                    )}
                    onClick={() => onSelectItem(item)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-medium">{item.title}</div>
                      <StatusBadge status={item.status} />
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-[calc(100vh-12rem)] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Search className="h-8 w-8" />
                  <p>No items found</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
