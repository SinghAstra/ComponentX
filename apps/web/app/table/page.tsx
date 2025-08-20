"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface User {
  id: number;
  name: string;
  email: string;
}

export const data: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
  },
];

const columns = [
  {
    key: "name" as keyof User,
    header: "Name",
  },
  {
    key: "email" as keyof User,
    header: "Email",
  },
];

export default function HomePage() {
  return (
    <div className="p-4 sm:px-8 flex items-center justify-center min-h-screen">
      <Table className="border">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.key)}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center text-muted-foreground"
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    {String(item[column.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
