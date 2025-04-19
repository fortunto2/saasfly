import * as React from "react";
import Image from "next/image";

import { cn } from "@saasfly/ui";

import { ModeToggle } from "~/components/mode-toggle";

function getCopyrightText(
  dict: Record<string, string | Record<string, string>>,
) {
  const currentYear = new Date().getFullYear();
  const copyrightTemplate = String(dict.copyright);
  return copyrightTemplate?.replace("${currentYear}", String(currentYear));
}

export function SiteFooter({
  className,
  dict,
}: {
  className?: string;
  params: { lang: string };
  dict: Record<string, string | Record<string, string>>;
}) {
  return (
    <footer className={cn(className)} data-oid="smyftc:">
      <div
        className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0"
        data-oid="oriceug"
      >
        <div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          data-oid="7:0wtrr"
        >
          <Image
            src="/images/avatars/saasfly-logo.svg"
            width="36"
            height="36"
            alt=""
            data-oid="dtb_wgp"
          />

          <p
            className="text-center text-sm leading-loose md:text-left"
            data-oid=".qv7qow"
          >
            {getCopyrightText(dict)}
          </p>
        </div>
        <ModeToggle data-oid="qt2rxsu" />
      </div>
    </footer>
  );
}
