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
    <DropdownMenu data-oid="7idh_vi">
      <DropdownMenuTrigger asChild data-oid="nb975.s">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 px-0"
          data-oid="xb172qp"
        >
          <Icons.Languages data-oid="8s2836r" />
          <span className="sr-only" data-oid="dabtyo1"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="6hu0k8q">
        <div data-oid="alk4uj_">
          {i18n.locales.map((locale) => {
            return (
              // <Link href={redirectedPathName(locale)}>{locale}</Link>
              <DropdownMenuItem
                key={locale}
                onClick={() => onClick(locale)}
                data-oid="tz6lwbr"
              >
                <span data-oid="rhvw7_7">{localeMap[locale]}</span>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
