"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/component-x/table";

export function TablePreview() {
  return (
    <div className="w-full border rounded-lg p-6">
      <Table size="md">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell align="right">Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Sarah Johnson</TableCell>
            <TableCell>sarah@example.com</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Michael Chen</TableCell>
            <TableCell>michael@example.com</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Emily Rodriguez</TableCell>
            <TableCell>emily@example.com</TableCell>
            <TableCell align="right">Inactive</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
