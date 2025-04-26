"use client";

import Link from "next/link";
import type { User } from "next-auth";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";

import { UserAvatar } from "~/components/user-avatar";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
  params: {
    lang: string;
  };
  dict: Record<string, string>;
}

export function UserAccountNav({
  user,
  params: { lang },
  dict,
}: UserAccountNavProps) {
  return (
    <DropdownMenu data-oid="29awze8">
      <DropdownMenuTrigger data-oid="yu9t0vu">
        <UserAvatar
          user={{ name: user.name ?? null, image: user.image ?? null }}
          className="h-8 w-8"
          data-oid="navw0pv"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="vxkx90v">
        <div
          className="flex items-center justify-start gap-2 p-2"
          data-oid="dku-w:b"
        >
          <div
            className="flex flex-col space-y-1 leading-none"
            data-oid="lezvubw"
          >
            {user.name && (
              <p className="font-medium" data-oid="_lfpfs3">
                {user.name}
              </p>
            )}
            {user.email && (
              <p
                className="w-[200px] truncate text-sm text-muted-foreground"
                data-oid="rqsv6w3"
              >
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator data-oid="vc_91:y" />
        <DropdownMenuItem asChild data-oid="6y3v7-a">
          <Link href={`/${lang}/dashboard`} data-oid="toglnb1">
            {dict.dashboard}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild data-oid="cywxb2m">
          <Link href={`/${lang}/dashboard/billing`} data-oid="nkh_qq3">
            {dict.billing}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild data-oid="lfmuk6d">
          <Link href={`/${lang}/dashboard/settings`} data-oid="ez095p5">
            {dict.settings}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator data-oid="4rtvb7g" />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/${lang}/login`,
            }).catch((error) => {
              console.error("Error during sign out:", error);
            });
          }}
          data-oid="c79msby"
        >
          {dict.sign_out}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
