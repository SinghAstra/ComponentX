import { cn } from "@/lib/utils";
import * as React from "react";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

interface TableHeaderProps {
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

const TableHeader = ({ children, className }: TableHeaderProps) => {
  return <thead className={cn("[&_tr]:border-b", className)}>{children}</thead>;
};
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
      className={cn("border-b transition-colors hover:bg-muted/50", className)}
    >
      {children}
    </tr>
  );
};

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
