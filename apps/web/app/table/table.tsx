import { cn } from "@/lib/utils";
import * as React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}
interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}
interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}
interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}
interface TableFooterProps {
  children: React.ReactNode;
  className?: string;
}
interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => (
  <div className="relative w-full overflow-auto border">
    <table className={cn("w-full text-sm", className)}>{children}</table>
  </div>
);
const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={cn("[&_tr]:border-b bg-muted/30", className)}>
      {children}
    </thead>
  );
};
const TableHead = ({ children, className }: TableHeadProps) => (
  <th
    className={cn(
      "h-12 px-4 text-left text-muted-foreground border-r font-normal",
      className
    )}
  >
    {children}
  </th>
);
const TableBody = ({ children, className }: TableBodyProps) => {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  );
};
const TableFooter = ({ children, className }: TableFooterProps) => {
  return (
    <tbody
      className={cn(
        "[&_tr:last-child]:border-0 [&>tr]:last:border-b-0",
        className
      )}
    >
      {children}
    </tbody>
  );
};
const TableRow = ({ children, className }: TableRowProps) => {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 [&_td:last-child]:border-0",
        className
      )}
    >
      {children}
    </tr>
  );
};
const TableCell = ({ children, className }: TableCellProps) => (
  <td className={cn("p-4 border-r", className)}>{children}</td>
);

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
