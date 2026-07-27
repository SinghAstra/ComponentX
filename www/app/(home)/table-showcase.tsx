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
import { ComponentShowcase } from "./component-showcase";

export function TableShowcase() {
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

  return (
    <ComponentShowcase
      docsLink="/docs/components/table"
      variant="full"
      showHeader={true}
    >
      <div className="w-full overflow-y-auto h-[300px] border">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell
                align="left"
                className="sticky top-0 z-10 bg-muted/40 backdrop-blur-md"
              >
                Name
              </TableHeaderCell>
              <TableHeaderCell
                align="left"
                className="sticky top-0 z-10 bg-muted/40 backdrop-blur-md"
              >
                Department
              </TableHeaderCell>
              <TableHeaderCell
                align="center"
                className="sticky top-0 z-10 bg-muted/40 backdrop-blur-md"
              >
                Status
              </TableHeaderCell>
              <TableHeaderCell
                align="right"
                className="sticky top-0 z-10 bg-muted/40 backdrop-blur-md"
              >
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
                        ? "bg-green-900 text-green-100"
                        : "bg-yellow-900 text-yellow-100"
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
    </ComponentShowcase>
  );
}
