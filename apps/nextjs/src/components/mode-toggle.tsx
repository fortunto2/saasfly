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
    <DropdownMenu data-oid="n:qkv0f">
      <DropdownMenuTrigger asChild data-oid="oka-o2x">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 px-0"
          data-oid="3n4yprn"
        >
          <Icons.Sun
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            data-oid="_9bpfl9"
          />

          <Icons.Moon
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            data-oid="9_-xbm-"
          />

          <span className="sr-only" data-oid="sx08zag">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="nwvoafe">
        <DropdownMenuItem onClick={() => setTheme("light")} data-oid="hh2t-wm">
          <Icons.Sun className="mr-2 h-4 w-4" data-oid="_gm8qmy" />
          <span data-oid="0rly03z">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} data-oid="hgbufa7">
          <Icons.Moon className="mr-2 h-4 w-4" data-oid="urkmqwf" />
          <span data-oid="nfzu7hr">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} data-oid=".4x2c_f">
          <Icons.Laptop className="mr-2 h-4 w-4" data-oid=":i9rdvn" />
          <span data-oid="xo9xi05">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
