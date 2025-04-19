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

export default function ThemeToggle(props: {
  align?: "center" | "start" | "end";
  side?: "top" | "bottom";
}) {
  const { setTheme, theme } = useTheme();

  const triggerIcon = {
    light: <Icons.Sun className="h-6 w-6" data-oid="m.4.ejm" />,
    dark: <Icons.Moon className="h-6 w-6" data-oid="4kk2es3" />,
    system: <Icons.System className="h-6 w-6" data-oid="ru1rla5" />,
  }[theme as "light" | "dark" | "system"];

  return (
    <DropdownMenu data-oid="x_.4w3.">
      <DropdownMenuTrigger asChild data-oid="7:xd997">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 px-2 text-lg font-semibold md:text-base"
          data-oid="o7e8cwe"
        >
          {triggerIcon}
          <span className="capitalize" data-oid="-99y-yq">
            {theme}
          </span>
          <span className="sr-only" data-oid="13ra:ax">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={props.align}
        side={props.side}
        data-oid="pxzjz-4"
      >
        <DropdownMenuItem onClick={() => setTheme("light")} data-oid="3uu9djc">
          <Icons.Sun className="mr-2 h-4 w-4" data-oid="usn239y" />
          <span data-oid="cyy1sw_">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} data-oid="c-1v.y-">
          <Icons.Moon className="mr-2 h-4 w-4" data-oid="tvpjt80" />
          <span data-oid="0_r.cfz">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} data-oid="054klmm">
          <Icons.System className="mr-2 h-4 w-4" data-oid="y.qia6w" />
          <span data-oid="1gwc.ue">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
