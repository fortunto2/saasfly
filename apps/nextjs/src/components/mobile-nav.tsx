import * as React from "react";
import Link from "next/link";

import { cn } from "@saasfly/ui";
import * as Icons from "@saasfly/ui/icons";

import { siteConfig } from "~/config/site";
import { useLockBody } from "~/hooks/use-lock-body";
import type { MainNavItem } from "~/types";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  menuItemClick?: () => void;
}

export function MobileNav({ items, children, menuItemClick }: MobileNavProps) {
  useLockBody();
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
      )}
      data-oid="fss8kwh"
    >
      <div
        className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md"
        data-oid="wkqan4n"
      >
        <Link
          href="/"
          className="flex items-center space-x-2"
          data-oid=":2yls5f"
        >
          <Icons.Logo data-oid="nwc.nvt" />
          <span className="font-bold" data-oid="nqu21vo">
            {siteConfig.name}
          </span>
        </Link>
        <nav
          className="grid grid-flow-row auto-rows-max text-sm"
          data-oid="37k8-u0"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60",
              )}
              onClick={menuItemClick}
              data-oid="fgpw0vh"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
