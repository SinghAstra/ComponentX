"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/component-x/table";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function TableSizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-6 p-4">
      {sizes.map((size) => (
        <div key={size}>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {capitalizeFirstLetter(size)} -{" "}
            {size === "sm" ? "Compact" : size === "md" ? "Default" : "Spacious"}
          </h3>
          <Table size={size}>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Email</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Sarah Johnson</TableCell>
                <TableCell>sarah@example.com</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Michael Chen</TableCell>
                <TableCell>michael@example.com</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Emily Rodriguez</TableCell>
                <TableCell>emily@example.com</TableCell>
                <TableCell>Inactive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
