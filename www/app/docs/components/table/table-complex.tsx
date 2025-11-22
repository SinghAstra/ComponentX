"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/component-x/table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  joinDate: string;
  status: "Active" | "Inactive";
}

export function TableComplex() {
  const users: User[] = [
    {
      id: 1,
      name: "Alice Thompson",
      email: "alice@company.com",
      role: "Admin",
      joinDate: "Jan 15, 2024",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Martinez",
      email: "bob@company.com",
      role: "Editor",
      joinDate: "Feb 20, 2024",
      status: "Active",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@company.com",
      role: "Viewer",
      joinDate: "Mar 10, 2024",
      status: "Inactive",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david@company.com",
      role: "Editor",
      joinDate: "Apr 5, 2024",
      status: "Active",
    },
  ];

  return (
    <div className="w-full border rounded-lg p-6">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3">
        User Management
      </h3>
      <Table size="md">
        <TableHead>
          <TableRow isHoverable={false}>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Join Date</TableHeaderCell>
            <TableHeaderCell align="center">Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.joinDate}</TableCell>
              <TableCell align="center">
                <span
                  className={
                    user.status === "Active"
                      ? "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      : "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                  }
                >
                  {user.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
