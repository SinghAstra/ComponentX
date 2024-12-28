export type ItemStatus = "active" | "pending" | "completed";

export interface Item {
  id: number;
  title: string;
  description: string;
  status: ItemStatus;
  createdAt: string;
  updatedAt: string;
}
