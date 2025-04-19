"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "./utils/cn";

const TextGenerateEffectImpl = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    void animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      },
    );
  }, [scope.current, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} data-oid="t039gky">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 dark:text-white"
              data-oid="u2v:pzy"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)} data-oid="m1hfyt8">
      <div className="mt-0" data-oid="lms9ih6">
        <div
          className="max-w-[750px] text-center text-lg font-light text-foreground"
          data-oid="9p:kjpg"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export const TextGenerateEffect = dynamic(
  () => Promise.resolve(TextGenerateEffectImpl),
  {
    ssr: false,
  },
);
