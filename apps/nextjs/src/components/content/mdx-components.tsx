// @ts-ignore
// @ts-nocheck
import * as React from "react";
import NextImage, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";

import { cn } from "@saasfly/ui";
import { Callout } from "@saasfly/ui/callout";

import { MdxCard } from "~/components/content/mdx-card";

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
      data-oid="ij77-je"
    />
  ),

  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
      data-oid="hg:2ngj"
    />
  ),

  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="b4im:nz"
    />
  ),

  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="oc8if:8"
    />
  ),

  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="xi.z_bz"
    />
  ),

  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="fookd.:"
    />
  ),

  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
      data-oid="d89:690"
    />
  ),

  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
      data-oid="2k2b8mc"
    />
  ),

  ul: ({ className, ...props }) => (
    <ul
      className={cn("my-6 ml-6 list-disc", className)}
      {...props}
      data-oid="w4--:vd"
    />
  ),

  ol: ({ className, ...props }) => (
    <ol
      className={cn("my-6 ml-6 list-decimal", className)}
      {...props}
      data-oid="c9_dqnd"
    />
  ),

  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} data-oid="ymmxon_" />
  ),

  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
      data-oid="5r_t39y"
    />
  ),

  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-md border", className)}
      alt={alt}
      {...props}
      data-oid="l6r.y3z"
    />
  ),

  hr: ({ ...props }) => (
    <hr className="my-4 md:my-8" {...props} data-oid="y.m.dds" />
  ),

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto" data-oid="xao3_1y">
      <table
        className={cn("w-full", className)}
        {...props}
        data-oid="x_oq-dc"
      />
    </div>
  ),

  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
      data-oid=".drkz:y"
    />
  ),

  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
      data-oid="i_0_xzp"
    />
  ),

  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
      data-oid="_jz7ask"
    />
  ),

  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-4",
        className,
      )}
      {...props}
      data-oid="r_sj145"
    />
  ),

  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
      data-oid="opm4vmw"
    />
  ),

  Image: (props: ImageProps) => <NextImage {...props} data-oid="9r8_8n1" />,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx" data-oid="vbuir-i">
      <Component components={components} data-oid="iccpvby" />
    </div>
  );
}
