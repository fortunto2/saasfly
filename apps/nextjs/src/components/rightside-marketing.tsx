"use client";

import Link from "next/link";

import { GlowingEffect } from "@saasfly/ui/glowing-effect";
import * as Icons from "@saasfly/ui/icons";

export function RightsideMarketing({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <ul
      className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
      data-oid="fbsvr11"
    >
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/7]"
        icon={
          <Icons.Rocket
            className="h-4 w-4 text-black dark:text-neutral-400"
            data-oid="u7073st"
          />
        }
        title={dict?.deploy_on_vercel_title ?? ""}
        description={dict?.deploy_on_vercel_desc ?? ""}
        link="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaasfly%2Fsaasfly&env=NEXT_PUBLIC_APP_URL,NEXTAUTH_URL,NEXTAUTH_SECRET,STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET,POSTGRES_URL,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,RESEND_API_KEY,RESEND_FROM&install-command=bun%20install&build-command=bun%20run%20build&root-directory=apps%2Fnextjs"
        data-oid="7bvytlq"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/7]"
        icon={
          <Icons.Cloud
            className="h-4 w-4 text-black dark:text-neutral-400"
            data-oid="_6-3agy"
          />
        }
        title={dict?.ship_on_cloudflare_title ?? ""}
        description={dict?.ship_on_cloudflare_desc ?? ""}
        link="https://oneclick.sh/"
        data-oid="dptr-vm"
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/7/3/13]"
        icon={
          <Icons.ThumbsUp
            className="h-4 w-4 text-black dark:text-neutral-400"
            data-oid="ojv1662"
          />
        }
        title={dict?.showcase_title ?? ""}
        description={dict?.showcase_desc ?? ""}
        link="https://discord.gg/b9uTZjdkrb"
        data-oid="3xib5rp"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  link?: string;
}

const GridItem = ({ area, icon, title, description, link }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`} data-oid="lvn4uqr">
      <div
        className="relative h-full rounded-2.5xl border dark:border-neutral-800 p-2 md:rounded-3xl md:p-3"
        data-oid="rm4zt3l"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          data-oid="9lc6:5h"
        />

        <Link href={`${link ? link : ""}`} target="_blank" data-oid="4x3n-dj">
          <div
            className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6 dark:bg-neutral-900/40"
            data-oid="8ev11hn"
          >
            <div
              className="relative flex flex-1 flex-col justify-between gap-3"
              data-oid="jr.0ryl"
            >
              <div
                className="w-fit rounded-lg border border-gray-600 dark:border-neutral-800 p-2"
                data-oid="211.l3-"
              >
                {icon}
              </div>
              <div className="space-y-3" data-oid="ow72fc2">
                <h3
                  className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white"
                  data-oid="eyk37-s"
                >
                  {title}
                </h3>
                <h2
                  className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400"
                  data-oid="jj-:s3k"
                >
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};
