"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@saasfly/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";
import * as Icons from "@saasfly/ui/icons";

import { i18n, localeMap } from "~/config/i18n-config";

export function LocaleChange({ url }: { url: string }) {
  const router = useRouter();

  function onClick(locale: string) {
    router.push(`/${locale}/` + url);
  }

  return (
    <DropdownMenu data-oid="nzgjgdr">
      <DropdownMenuTrigger asChild data-oid="h6o208v">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 px-0"
          data-oid="suniflu"
        >
          <Icons.Languages data-oid="6nzk.a4" />
          <span className="sr-only" data-oid="6w2u:x9"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="fy90e6m">
        <div data-oid="b75wq:a">
          {i18n.locales.map((locale) => {
            return (
              // <Link href={redirectedPathName(locale)}>{locale}</Link>
              <DropdownMenuItem
                key={locale}
                onClick={() => onClick(locale)}
                data-oid="78_1spe"
              >
                <span data-oid="7r62t2.">{localeMap[locale]}</span>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
