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
    <div className="flex gap-6 md:gap-10" data-oid="q8k3k5x">
      <div className="flex items-center" data-oid="00ucz.p">
        <Link
          href={`/${lang}`}
          className="hidden items-center space-x-2 md:flex"
          data-oid="pk3pdd3"
        >
          <div className="text-3xl" data-oid="ow5inmn">
            Saasfly
          </div>
        </Link>

        <Link
          href="https://docs.saasfly.io"
          target="_blank"
          className="ml-4 hidden md:flex lg:flex xl:flex"
          data-oid="8uxlpbf"
        >
          <DocumentGuide data-oid="1j0ytm7">
            {marketing?.introducing ?? "Introducing Saasfly"}
          </DocumentGuide>
        </Link>
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        data-oid="3_lp6mw"
      >
        {showMobileMenu ? (
          <Icons.Close data-oid=":9f26c7" />
        ) : (
          <Icons.Logo data-oid="aayzt:5" />
        )}
        <span className="font-bold" data-oid="7jy7qd-">
          Menu
        </span>
      </button>
      {showMobileMenu && items && (
        <MobileNav
          items={items}
          menuItemClick={handleMenuItemClick}
          data-oid="re8t93w"
        >
          {children}
        </MobileNav>
      )}
    </div>
  );
}
