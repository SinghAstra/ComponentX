import { cn } from '@/lib/utils';
import * as React from 'react';

export interface TableProps {
  children?: React.ReactNode;
  className?: string;
}
export interface TableHeaderProps {
  children?: React.ReactNode;
  className?: string;
}
export interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
}
export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
}
export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}
export interface TableFooterProps {
  children?: React.ReactNode;
  className?: string;
}
export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => (
  <table
    className={cn('w-full text-sm relative overflow-auto border', className)}
  >
    {children}
  </table>
);
const TableHeader = ({ children, className }: TableHeaderProps) => {
  return (
    <thead className={cn('border-b bg-muted/30', className)}>{children}</thead>
  );
};
const TableHead = ({ children, className }: TableHeadProps) => (
  <th
    className={cn(
      'h-12 px-4 text-left text-muted-foreground border-r font-normal',
      className,
    )}
  >
    {children}
  </th>
);
const TableBody = ({ children, className }: TableBodyProps) => {
  return <tbody className={cn('', className)}>{children}</tbody>;
};
const TableFooter = ({ children, className }: TableFooterProps) => {
  return <tbody className={cn('', className)}>{children}</tbody>;
};
const TableRow = ({ children, className }: TableRowProps) => {
  return (
    <tr
      className={cn(
        'border-b transition-all duration-300 hover:bg-muted/20 ',
        className,
      )}
    >
      {children}
    </tr>
  );
};
const TableCell = ({ children, className }: TableCellProps) => (
  <td className={cn('p-4 border-r', className)}>{children}</td>
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
