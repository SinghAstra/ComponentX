"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/component-x/table";
import { cn } from "@/lib/utils";

const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Engineering",
    status: "Active",
    salary: "$120,000",
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Marketing",
    status: "Active",
    salary: "$95,000",
  },
  {
    id: 3,
    name: "Carol White",
    department: "Design",
    status: "On Leave",
    salary: "$110,000",
  },
  {
    id: 4,
    name: "David Brown",
    department: "Engineering",
    status: "Active",
    salary: "$125,000",
  },
  {
    id: 5,
    name: "Eve Davis",
    department: "HR",
    status: "Active",
    salary: "$85,000",
  },
  {
    id: 6,
    name: "Alice Johnson",
    department: "Engineering",
    status: "Active",
    salary: "$120,000",
  },
  {
    id: 7,
    name: "Bob Smith",
    department: "Marketing",
    status: "Active",
    salary: "$95,000",
  },
  {
    id: 8,
    name: "Carol White",
    department: "Design",
    status: "On Leave",
    salary: "$110,000",
  },
  {
    id: 9,
    name: "David Brown",
    department: "Engineering",
    status: "Active",
    salary: "$125,000",
  },
  {
    id: 10,
    name: "Eve Davis",
    department: "HR",
    status: "Active",
    salary: "$85,000",
  },
];

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center bg-background p-8 w-full">
      <div className="rounded max-w-6xl w-full border overflow-y-auto shadow-sm h-[40vh]">
        <Table>
          <TableHead className="sticky top-0 bg-background">
            <TableRow className="sticky top-0">
              <TableHeaderCell align="left" className="sticky top-0 z-10">
                Name
              </TableHeaderCell>
              <TableHeaderCell align="left" className="sticky top-0 z-10">
                Department
              </TableHeaderCell>
              <TableHeaderCell align="center" className="sticky top-0 z-10">
                Status
              </TableHeaderCell>
              <TableHeaderCell align="right" className="sticky top-0 z-10">
                Salary
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id} isHoverable>
                <TableCell align="left" className="font-medium">
                  {employee.name}
                </TableCell>
                <TableCell align="left">{employee.department}</TableCell>
                <TableCell align="center">
                  <span
                    className={cn(
                      "px-2 py-1 rounded text-sm font-medium",
                      employee.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                    )}
                  >
                    {employee.status}
                  </span>
                </TableCell>
                <TableCell align="right">{employee.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
