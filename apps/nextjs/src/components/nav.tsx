"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@saasfly/ui";
import * as Icons from "@saasfly/ui/icons";

import type { SidebarNavItem } from "~/types";

interface DashboardNavProps {
  items: SidebarNavItem[];
  params: {
    lang: string;
  };
}

const iconMapObj = new Map([
  ["clusters", Icons.Cluster],
  ["billing", Icons.Billing],
  ["settings", Icons.Settings],
]);

export function DashboardNav({ items, params: { lang } }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2" data-oid=":e6uxop">
      {items.map((item, index) => {
        // const Icon = item.icon;
        const Icon = iconMapObj.get(item.id) ?? Icons.ArrowRight;
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : `/${lang}` + item.href}
              data-oid="c8hgf86"
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
                data-oid=":szfy_l"
              >
                <Icon className="mr-2 h-4 w-4" data-oid="3zp0ex_" />
                <span data-oid="o0x.4cd">{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
