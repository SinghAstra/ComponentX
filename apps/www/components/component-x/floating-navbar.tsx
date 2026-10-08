'use client';

import type { LucideIcon } from 'lucide-react';
import type * as React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function usePathname(): string {
  const [pathname, setPathname] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const onPathChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPathChange);
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      onPathChange();
    };
    return () => {
      window.removeEventListener('popstate', onPathChange);
      history.pushState = originalPushState;
    };
  }, []);

  return pathname;
}

interface FloatingNavbarProps {
  className?: string;
  children: React.ReactNode;
}

export function FloatingNavbar({ className, children }: FloatingNavbarProps) {
  return (
    <nav className={cn('fixed top-6 left-1/2 -translate-x-1/2 z-10', className)}>{children}</nav>
  );
}

interface FloatingNavbarContentProps {
  className?: string;
  children: React.ReactNode;
}

export function FloatingNavbarContent({ className, children }: FloatingNavbarContentProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 bg-muted/20 backdrop-blur-sm border rounded p-2 shadow-lg',
        className
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
        isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground',
        className
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
  return <span aria-hidden="true" className={cn('h-5 w-px bg-muted/50', className)} />;
}

export default FloatingNavbar;
