"use client";

import React from "react";
import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";
import { DocumentGuide } from "~/components/document-guide";
import { MobileNav } from "~/components/mobile-nav";

import type { MainNavItem } from "~/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  params: {
    lang: string;
  };
  marketing: Record<string, string>;
}

export function MainNav({
  items,
  children,
  params: { lang },
  marketing,
}: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleMenuItemClick = () => {
    toggleMenu();
  };
  return (
    <div className="flex gap-6 md:gap-10" data-oid="y2_cjj4">
      <div className="flex items-center" data-oid="4fs2s_m">
        <Link
          href={`/${lang}`}
          className="hidden items-center space-x-2 md:flex"
          data-oid="_dp7rf-"
        >
          <div className="text-3xl" data-oid="nig:xz:">
            Saasfly
          </div>
        </Link>

        <Link
          href="https://docs.saasfly.io"
          target="_blank"
          className="ml-4 hidden md:flex lg:flex xl:flex"
          data-oid=":aw6v.s"
        >
          <DocumentGuide data-oid="yh9naou">
            {marketing?.introducing ?? "Introducing Saasfly"}
          </DocumentGuide>
        </Link>
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        data-oid="bvjkd6u"
      >
        {showMobileMenu ? (
          <Icons.Close data-oid=".wpkya4" />
        ) : (
          <Icons.Logo data-oid="m0go7y1" />
        )}
        <span className="font-bold" data-oid="k._:hvv">
          Menu
        </span>
      </button>
      {showMobileMenu && items && (
        <MobileNav
          items={items}
          menuItemClick={handleMenuItemClick}
          data-oid="0fkik3r"
        >
          {children}
        </MobileNav>
      )}
    </div>
  );
}
