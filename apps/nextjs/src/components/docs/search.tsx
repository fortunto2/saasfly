"use client";

import * as React from "react";

import { cn } from "@saasfly/ui";
import { Input } from "@saasfly/ui/input";
import { toast } from "@saasfly/ui/use-toast";

interface DocsSearchProps extends React.HTMLAttributes<HTMLFormElement> {
  lang: string;
}

export function DocsSearch({ className, ...props }: DocsSearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    return toast({
      title: "Not implemented",
      description: "We're still working on the search.",
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative w-full", className)}
      {...props}
      data-oid="k_m..du"
    >
      <Input
        type="search"
        placeholder="Search documentation..."
        className="h-8 w-full sm:w-64 sm:pr-12"
        data-oid="dhng3:6"
      />

      <kbd
        className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex"
        data-oid="7v:ty:m"
      >
        <span className="text-xs" data-oid="lh0ae:4">
          ⌘
        </span>
        K
      </kbd>
    </form>
  );
}
