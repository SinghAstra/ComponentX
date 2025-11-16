'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { LifeBuoy, Send } from 'lucide-react';
import * as React from 'react';
import { SidebarBottomNav } from './sidebar-bottom-nav';
import SidebarNav from './sidebar-nav';
import { SidebarUser } from './sidebar-user';

const data = {
  user: {
    name: 'UserName',
    email: 'user@email.com',
    avatar: '/favicon.ico',
  },

  sidebarBottomNav: [
    {
      title: 'Support',
      url: '/support',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '/feedback',
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} variant="floating" className="shadow-lg">
      <SidebarHeader className="bg-background rounded-t-md px-4">
        <h1 className="text-2xl text-primary uppercase logo">One</h1>
      </SidebarHeader>
      <SidebarContent className="bg-background">
        <SidebarNav />
      </SidebarContent>
      <SidebarFooter className="bg-background rounded-b-md">
        <SidebarBottomNav items={data.sidebarBottomNav} className="mt-auto" />
        <SidebarUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
