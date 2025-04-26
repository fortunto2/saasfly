"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@saasfly/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";
import * as Icons from "@saasfly/ui/icons";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu data-oid="1xb1_gc">
      <DropdownMenuTrigger asChild data-oid="8zbjl2f">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 px-0"
          data-oid="fk_0nut"
        >
          <Icons.Sun
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            data-oid="a58--jt"
          />

          <Icons.Moon
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            data-oid="9:k2.iu"
          />

          <span className="sr-only" data-oid=":2xmzpx">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="c6kxpxo">
        <DropdownMenuItem onClick={() => setTheme("light")} data-oid="_jqyo1.">
          <Icons.Sun className="mr-2 h-4 w-4" data-oid=".iq-593" />
          <span data-oid="imyec46">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} data-oid="8p54f5.">
          <Icons.Moon className="mr-2 h-4 w-4" data-oid="81yrpxt" />
          <span data-oid="h2vzu8k">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} data-oid="2z8btuk">
          <Icons.Laptop className="mr-2 h-4 w-4" data-oid="an9192b" />
          <span data-oid="twvho7o">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
