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
        <div key={align} className="flex-none w-full border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {capitalizeFirstLetter(align)} Alignment
          </h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell align={align}>Column One</TableHeaderCell>
                <TableHeaderCell align={align}>Column Two</TableHeaderCell>
                <TableHeaderCell align={align}>Column Three</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align={align}>Data A</TableCell>
                <TableCell align={align}>Data B</TableCell>
                <TableCell align={align}>Data C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align={align}>More data</TableCell>
                <TableCell align={align}>More data</TableCell>
                <TableCell align={align}>More data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align={align}>Additional</TableCell>
                <TableCell align={align}>Additional</TableCell>
                <TableCell align={align}>Additional</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}
