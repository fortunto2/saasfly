"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

import { cn } from "@saasfly/ui";
import { CardBody, CardContainer, CardItem } from "@saasfly/ui/3d-card";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

export default function LoginPage() {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isAuth0Loading, setIsAuth0Loading] = React.useState<boolean>(false);

  return (
    <div
      className="container flex h-screen w-screen flex-col items-center justify-center"
      data-oid="sojll.s"
    >
      {/*<Link*/}
      {/*  href={`/${lang}`}*/}
      {/*  className={cn(*/}
      {/*    buttonVariants({ variant: "ghost" }),*/}
      {/*    "absolute left-4 top-4 md:left-8 md:top-8",*/}
      {/*  )}*/}
      {/*>*/}
      {/*  <>*/}
      {/*    <Icons.ChevronLeft className="mr-2 h-4 w-4" />*/}
      {/*    {dict.login.back}*/}
      {/*  </>*/}
      {/*</Link>*/}
      <CardContainer className="inter-var" data-oid="3vej5op">
        <CardBody
          className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  "
          data-oid="s:vpld1"
        >
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            data-oid="xyln723"
          >
            Start a beautiful new life
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
            data-oid="ucdzjrs"
          >
            Admin Dashboard
          </CardItem>
          <CardItem translateZ="100" className="mt-4 w-full" data-oid="zch8ase">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
              data-oid="a1ss7b6"
            />
          </CardItem>
          <div
            className="mt-20 flex items-center justify-between"
            data-oid="x-m302w"
          >
            <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/saasfly/saasfly"
              target="__blank"
              className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
              data-oid="2pjhdf_"
            >
              You know this is not easy for us
            </CardItem>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "outline" }))}
              onClick={() => {
                setIsAuth0Loading(true);
                signIn("auth0", {
                  redirect: true,
                  callbackUrl: "http://localhost:3000/admin/dashboard",
                }).catch((error) => {
                  console.error("Auth0 signIn error:", error);
                });
              }}
              disabled={isAuth0Loading}
              data-oid="1kfx_5d"
            >
              {isAuth0Loading ? (
                <Icons.Spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="_on5okf"
                />
              ) : (
                <Icons.Key className="mr-2 h-4 w-4" data-oid="-yf.eg7" />
              )}{" "}
              Auth0
            </button>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
