"use client";

import React from "react";

import { WobbleCard } from "@saasfly/ui/wobble-card";

export function WobbleCardShow() {
  return (
    <div
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3"
      data-oid="99bnq.9"
    >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
        data-oid="99rul70"
      >
        <div className="max-w-xs" data-oid="505s0_g">
          <h2
            className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl"
            data-oid="bcanrg."
          >
            Stay up to date
          </h2>
          <p
            className="mt-4 text-left  text-base/6 text-neutral-200"
            data-oid="qthd741"
          >
            We are committed to continually improving our starter kit and
            providing the best possible resources for building saas service.
          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale filter lg:-right-[40%]"
          data-oid="k9vl4ml"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 min-h-[300px]"
        data-oid="z9afgph"
      >
        <h2
          className="max-w-80  text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl"
          data-oid="1jul6k6"
        >
          Philosophy
        </h2>
        <p
          className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200"
          data-oid="kz.sq3m"
        >
          When creating this starter kit, we had several guiding principles in
          mind.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
        data-oid="fv6hft:"
      >
        <div className="max-w-sm" data-oid="1t6qvwf">
          <h2
            className="max-w-sm text-balance  text-left text-base font-semibold tracking-[-0.015em] text-white md:max-w-lg md:text-xl lg:text-3xl"
            data-oid="2obc.9h"
          >
            Streamline Your SaaS Development with Nextify’s Starter Kit.
          </h2>
          <p
            className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200"
            data-oid="074r76m"
          >
            Our starter kit embodies this expertise, empowering both our team
            and clients to build high-quality SaaS services faster and easier.
          </p>
        </div>
        <img
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -bottom-10 -right-10 rounded-2xl object-contain md:-right-[40%] lg:-right-[20%]"
          data-oid="x3m_ccp"
        />
      </WobbleCard>
    </div>
  );
}
