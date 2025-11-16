'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import type * as React from 'react';

interface FloatingNavbarProps {
  className?: string;
  children: React.ReactNode;
}

export function FloatingNavbar({ className, children }: FloatingNavbarProps) {
  return (
    <nav
      className={cn('fixed top-6 left-1/2 -translate-x-1/2 z-10', className)}
    >
      {children}
    </nav>
  );
}

interface FloatingNavbarContentProps {
  className?: string;
  children: React.ReactNode;
}

export function FloatingNavbarContent({
  className,
  children,
}: FloatingNavbarContentProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 bg-muted/20 backdrop-blur-sm border rounded p-2 shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FloatingNavbarItemProps {
  href: string;
  icon?: LucideIcon;
  label?: string;
  className?: string;
}

export function FloatingNavbarItem({
  href,
  icon: Icon,
  label,
  className,
}: FloatingNavbarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant="ghost"
      asChild
      className={cn(
        'hover:bg-primary transition-all duration-300 rounded font-normal',
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground',
        className,
      )}
    >
      <a href={href}>
        {Icon ? <Icon className="h-4 w-4 mr-1" /> : null}
        {label ? <span className="hidden sm:inline">{label}</span> : null}
      </a>
    </Button>
  );
}

export function FloatingNavbarSeparator({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('h-5 w-px bg-muted/50', className)}
    />
  );
}

export default FloatingNavbar;
