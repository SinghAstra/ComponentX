"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/component-x/table";
import { useState } from "react";

export function TableInteractive() {
  const [selectedRows, setSelectedRows] = useState<number[]>([1]);

  const toggleRow = (index: number) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full border rounded-lg p-6">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">
        Hoverable & Selectable Rows
      </h3>
      <Table>
        <TableHead>
          <TableRow isHoverable={false}>
            <TableHeaderCell>Product</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell align="right">Price</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { id: 0, name: "Laptop", status: "In Stock", price: "\$999" },
            { id: 1, name: "Mouse", status: "In Stock", price: "\$29" },
            { id: 2, name: "Keyboard", status: "Low Stock", price: "\$79" },
            { id: 3, name: "Monitor", status: "Out of Stock", price: "\$349" },
          ].map((item) => (
            <TableRow
              key={item.id}
              isSelected={selectedRows.includes(item.id)}
              onClick={() => toggleRow(item.id)}
              className="cursor-pointer"
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground mt-3">
        Click rows to select them. {selectedRows.length} row(s) selected.
      </p>
    </div>
  );
}
