import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { UserAuthForm } from "~/components/user-auth-form";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <div
      className="container flex h-screen w-screen flex-col items-center justify-center"
      data-oid="7qncy4p"
    >
      <Link
        href={`/${lang}`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
          "left-[32px] top-[32px]",
        )}
        data-oid="yewl-ht"
      >
        <>
          <Icons.ChevronLeft className="mr-2 h-4 w-4" data-oid="1rnokw3" />
          {dict.login.back}
        </>
      </Link>
      <div
        className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
        data-oid="wt_iz2a"
      >
        <div className="flex flex-col space-y-2 text-center" data-oid="q6pz8jq">
          <Image
            src="/images/avatars/saasfly-logo.svg"
            className="mx-auto"
            width="64"
            height="64"
            alt=""
            data-oid="50rnetc"
          />

          <h1
            className="text-2xl font-semibold tracking-tight"
            data-oid=".i9-ea0"
          >
            {dict.login.welcome_back}
          </h1>
          <p className="text-sm text-muted-foreground" data-oid="44kgvll">
            {dict.login.signin_title}
          </p>
        </div>
        <UserAuthForm lang={lang} dict={dict.login} data-oid="czkr_gc" />
        {/* <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                  href={`/${lang}/register`}
                  className="hover:text-brand underline underline-offset-4"
                >
                  {dict.login.singup_title}
                </Link>
               </p> */}
      </div>
    </div>
  );
}
