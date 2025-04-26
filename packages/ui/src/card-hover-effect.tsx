import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "./utils/cn";

export const HoverEffect = ({
  items,
  className,
}: {
  items: { title: string; description: string; link: string }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
      data-oid="ol2yuu:"
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative  block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          data-oid="2ow:6nc"
        >
          <AnimatePresence data-oid="xksm9yg">
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                data-oid="p:xt5ln"
              />
            )}
          </AnimatePresence>
          <Card data-oid="j1.f_ct">
            <CardTitle data-oid="shnq05u">{item.title}</CardTitle>
            <CardDescription data-oid="sr76a-c">
              {item.description}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-4 group-hover:border-slate-700 dark:border-white/[0.2]",
        className,
      )}
      data-oid="c3c7z9g"
    >
      <div className="relative z-50" data-oid="oy9p31g">
        <div className="p-4" data-oid="5dy6ug6">
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn("mt-4 font-bold tracking-wide text-zinc-100", className)}
      data-oid="t8mula_"
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
      data-oid="69ls6:z"
    >
      {children}
    </p>
  );
};
