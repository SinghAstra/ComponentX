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
    <div className="w-full h-full overflow-y-auto flex flex-col gap-6">
      {sizes.map((size) => (
        <div key={size} className="flex-none w-full border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {capitalizeFirstLetter(size)} -{" "}
            {size === "sm" ? "Compact" : size === "md" ? "Default" : "Spacious"}
          </h3>
          <Table size={size}>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Header One</TableHeaderCell>
                <TableHeaderCell>Header Two</TableHeaderCell>
                <TableHeaderCell align="right">Header Three</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Cell content</TableCell>
                <TableCell>Cell content</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Cell content</TableCell>
                <TableCell>Cell content</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
