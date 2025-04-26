"use client";

import { TextGenerateEffect } from "@saasfly/ui/typewriter-effect";

export function TypewriterEffectSmooths() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "and",
    },
    {
      text: "ship",
    },
    {
      text: "fast",
    },
    {
      text: "with",
    },
    {
      text: "Saasfly.",
      className: "text-blue-500",
    },
  ];

  return (
    <div
      className="max-w-[42rem] leading-normal text-neutral-500 dark:text-neutral-400 sm:text-lg sm:leading-8"
      data-oid="8awti8x"
    >
      <TextGenerateEffect words={words} data-oid="n.0oz4m" />
    </div>
  );
}
