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

export function TableAlignment() {
  const alignments = ["left", "center", "right"] as const;

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-6">
      {alignments.map((align) => (
        <div key={align} className="flex-none w-full p-4">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {capitalizeFirstLetter(align)} Alignment
          </h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell align={align}>Name</TableHeaderCell>
                <TableHeaderCell align={align}>Email</TableHeaderCell>
                <TableHeaderCell align={align}>Status</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align={align}>Sarah Johnson</TableCell>
                <TableCell align={align}>sarah@example.com</TableCell>
                <TableCell align={align}>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align={align}>Michael Chen</TableCell>
                <TableCell align={align}>michael@example.com</TableCell>
                <TableCell align={align}>Active</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align={align}>Emily Rodriguez</TableCell>
                <TableCell align={align}>emily@example.com</TableCell>
                <TableCell align={align}>Inactive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
