import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  User, 
  Star, 
  Scissors, 
  Home,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Agendamentos", url: "/agendamentos", icon: Calendar },
  { title: "Histórico", url: "/historico", icon: Clock },
  { title: "Fidelidade", url: "/fidelidade", icon: Star },
  { title: "Perfil", url: "/perfil", icon: User },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-sidebar-border">
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <Scissors className="h-6 w-6 text-primary" />
          {open && (
            <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
              BarberShop
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="hover:bg-sidebar-accent"
        >
          {open ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`transition-all duration-200 ${
                      isActive(item.url)
                        ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-2 border-primary"
                        : "hover:bg-sidebar-accent/50"
                    }`}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {open && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}