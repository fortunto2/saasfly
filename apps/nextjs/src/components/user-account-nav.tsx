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
    <DropdownMenu data-oid="qq5k-bn">
      <DropdownMenuTrigger data-oid=":_y3dcz">
        <UserAvatar
          user={{ name: user.name ?? null, image: user.image ?? null }}
          className="h-8 w-8"
          data-oid="prn2x66"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid=".8jmnol">
        <div
          className="flex items-center justify-start gap-2 p-2"
          data-oid="a:4.znk"
        >
          <div
            className="flex flex-col space-y-1 leading-none"
            data-oid="nkj.iw5"
          >
            {user.name && (
              <p className="font-medium" data-oid="4y1odc.">
                {user.name}
              </p>
            )}
            {user.email && (
              <p
                className="w-[200px] truncate text-sm text-muted-foreground"
                data-oid="9z_tikz"
              >
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator data-oid="cjjd6bj" />
        <DropdownMenuItem asChild data-oid="aqaokpz">
          <Link href={`/${lang}/dashboard`} data-oid="n39cthb">
            {dict.dashboard}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild data-oid="a0vp89p">
          <Link href={`/${lang}/dashboard/billing`} data-oid="ore36u:">
            {dict.billing}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild data-oid="_kpfei8">
          <Link href={`/${lang}/dashboard/settings`} data-oid="wwae.:4">
            {dict.settings}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator data-oid="kf5lg-9" />
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
          data-oid="v.28ki7"
        >
          {dict.sign_out}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
