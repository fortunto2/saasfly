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
    light: <Icons.Sun className="h-6 w-6" data-oid="uffg7a-" />,
    dark: <Icons.Moon className="h-6 w-6" data-oid="dtlttnl" />,
    system: <Icons.System className="h-6 w-6" data-oid="bqbamps" />,
  }[theme as "light" | "dark" | "system"];

  return (
    <DropdownMenu data-oid="m.s8pci">
      <DropdownMenuTrigger asChild data-oid="g274gt_">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 px-2 text-lg font-semibold md:text-base"
          data-oid="b4mvx03"
        >
          {triggerIcon}
          <span className="capitalize" data-oid="mh2k5at">
            {theme}
          </span>
          <span className="sr-only" data-oid="5agslht">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={props.align}
        side={props.side}
        data-oid="xuzjdwn"
      >
        <DropdownMenuItem onClick={() => setTheme("light")} data-oid="l:5kmh.">
          <Icons.Sun className="mr-2 h-4 w-4" data-oid="xp-p74_" />
          <span data-oid="w-0eirg">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} data-oid="g1i-8ew">
          <Icons.Moon className="mr-2 h-4 w-4" data-oid="-y_iezf" />
          <span data-oid="tqisfaf">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} data-oid="caaqluv">
          <Icons.System className="mr-2 h-4 w-4" data-oid="hiy-0it" />
          <span data-oid="17kwafq">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
