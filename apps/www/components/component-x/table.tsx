import { cn } from "@/lib/utils";
import React from "react";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  size?: "sm" | "md" | "lg";
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };

    return (
      <table
        ref={ref}
        className={cn("w-full border-collapse", sizeClasses[size], className)}
        {...props}
      />
    );
  }
);

Table.displayName = "Table";

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("bg-muted/30", className)} {...props} />
));

TableHead.displayName = "TableHead";

export interface TableHeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

export const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(({ className, align = "left", ...props }, ref) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <th
      ref={ref}
      className={cn(
        "px-4 py-3 font-semibold text-muted-foreground border",
        alignClasses[align],
        className
      )}
      {...props}
    />
  );
});

TableHeaderCell.displayName = "TableHeaderCell";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("divide-y divide-border", className)}
    {...props}
  />
));

TableBody.displayName = "TableBody";

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  isHoverable?: boolean;
  isSelected?: boolean;
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, isHoverable = true, isSelected = false, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-all duration-300",
        isHoverable && "hover:bg-muted/30",
        isSelected && "bg-muted/30",
        className
      )}
      {...props}
    />
  )
);

TableRow.displayName = "TableRow";

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align = "left", ...props }, ref) => {
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    return (
      <td
        ref={ref}
        className={cn(
          "px-4 py-3 text-foreground border",
          alignClasses[align],
          className
        )}
        {...props}
      />
    );
  }
);

TableCell.displayName = "TableCell";
