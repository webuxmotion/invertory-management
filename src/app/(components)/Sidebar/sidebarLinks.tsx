import { Archive, CircleDollarSign, Clipboard, Layout, Settings, User } from 'lucide-react';

import { SidebarLinkProps } from "./SidebarLink";

type LinkProps = Omit<SidebarLinkProps, "isCollapsed">;

export const sidebarLinks: LinkProps[] = [
    {
      label: "Dashboard",
      href: "/",
      icon: Layout
    },
    {
      label: "Inventory",
      href: "/inventory",
      icon: Archive
    },
    {
      label: "Products",
      href: "/products",
      icon: Clipboard
    },
    {
      label: "Users",
      href: "/users",
      icon: User
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings
    },
    {
      label: "expenses",
      href: "/expenses",
      icon: CircleDollarSign
    }
  ];