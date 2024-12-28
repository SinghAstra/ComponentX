"use client";

import { ItemDetail } from "@/components/list/item-detail";
import { ItemList } from "@/components/list/item-list";
import { Item } from "@/types/item";
import { useState } from "react";

// Mock data with additional fields
const mockData: Item[] = [
  {
    id: 1,
    title: "Complete project proposal",
    description:
      "Draft and finalize the Q2 project proposal including timeline, budget, and resource allocation.",
    status: "active",
    createdAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-15T14:30:00Z",
  },
  {
    id: 2,
    title: "Review client feedback",
    description:
      "Analyze and address client feedback on the latest design iteration.",
    status: "pending",
    createdAt: "2024-03-14T09:00:00Z",
    updatedAt: "2024-03-14T16:45:00Z",
  },
  {
    id: 3,
    title: "Update documentation",
    description:
      "Update the technical documentation with recent API changes and new features.",
    status: "completed",
    createdAt: "2024-03-13T11:20:00Z",
    updatedAt: "2024-03-13T17:15:00Z",
  },
];

export default function ListDetailView() {
  const [items] = useState<Item[]>(mockData);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="flex gap-4 p-4 min-h-screen">
      <ItemList
        items={items}
        selectedItem={selectedItem}
        onSelectItem={setSelectedItem}
      />
      <ItemDetail item={selectedItem} />
    </div>
  );
}
