"use client";

import React from "react";
import Link from "next/link";
import type { User } from "next-auth";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@saasfly/ui";
import { Button } from "@saasfly/ui/button";

import { MainNav } from "./main-nav";
import { LocaleChange } from "~/components/locale-change";
import { GitHubStar } from "~/components/github-star";
import { useSigninModal } from "~/hooks/use-signin-modal";
import { UserAccountNav } from "./user-account-nav";

import useScroll from "~/hooks/use-scroll";
import type { MainNavItem } from "~/types";

type Dictionary = Record<string, string>;

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: {
    lang: string;
  };
  marketing: Dictionary;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = false,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  const segment = useSelectedLayoutSegment();

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
      data-oid="ow0swbk"
    >
      <div
        className="container flex h-16 items-center justify-between py-4"
        data-oid="cptq.j8"
      >
        <MainNav
          items={items}
          params={{ lang: `${lang}` }}
          marketing={marketing}
          data-oid="s8m9kk3"
        >
          {children}
        </MainNav>

        <div className="flex items-center space-x-3" data-oid="9o.x3mj">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex" data-oid="kl3uoti">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : `/${lang}${item.href}`}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-blue-500 font-semibold"
                      : "",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                  data-oid="igjt3xf"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="w-[1px] h-8 bg-accent" data-oid="zg0kick"></div>

          {rightElements}

          <div className="hidden md:flex lg:flex xl:flex" data-oid="9:6diwk">
            <GitHubStar data-oid="x45qctt" />
          </div>
          <LocaleChange url={"/"} data-oid="cpv77xw" />
          {!user ? (
            <Link href={`/${lang}/login`} data-oid="h1x4_9u">
              <Button variant="outline" size="sm" data-oid="5md1miq">
                {typeof marketing.login === "string"
                  ? marketing.login
                  : "Default Login Text"}
              </Button>
            </Link>
          ) : null}

          {user ? (
            <UserAccountNav
              user={user}
              params={{ lang: `${lang}` }}
              dict={dropdown}
              data-oid="my-zn-t"
            />
          ) : (
            <Button
              className="px-3"
              variant="default"
              size="sm"
              onClick={signInModal.onOpen}
              data-oid="wxs_4z2"
            >
              {typeof marketing.signup === "string"
                ? marketing.signup
                : "Default Signup Text"}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
