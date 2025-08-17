"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  GitMerge,
  MessageSquare,
  BarChart3,
  BrainCircuit,
  Settings,
  LifeBuoy,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", icon: <LayoutDashboard />, label: "Dashboard", tooltip: "Dashboard" },
    { href: "/journey", icon: <GitMerge />, label: "Journey", tooltip: "Journey" },
    { href: "/messages", icon: <MessageSquare />, label: "Messages", tooltip: "Messages" },
    { href: "/reports", icon: <BarChart3 />, label: "Reports", tooltip: "Reports" },
    { href: "/ai-insights", icon: <BrainCircuit />, label: "AI Insights", tooltip: "AI Insights" },
  ];

  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-primary"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          <span className="text-xl font-semibold font-headline text-sidebar-foreground">
            Elyx
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-1 p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref>
                <SidebarMenuButton isActive={pathname === item.href} tooltip={item.tooltip}>
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
         <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Support">
                    <LifeBuoy />
                    <span>Support</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                    <Settings />
                    <span>Settings</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/profile" passHref>
                  <SidebarMenuButton isActive={pathname === '/profile'}>
                      <Avatar className="h-8 w-8">
                          <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU1NDQyNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Arjun Mehta" data-ai-hint="member profile picture" />
                          <AvatarFallback>AM</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col text-left">
                          <span className="text-sm font-medium">Arjun Mehta</span>
                          <span className="text-xs text-sidebar-foreground/70">arjun.mehta@elyx.com</span>
                      </div>
                  </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
