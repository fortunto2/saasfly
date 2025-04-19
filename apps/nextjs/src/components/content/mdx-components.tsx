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
      data-oid="fh2_vb8"
    />
  ),

  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
      data-oid="nnvnyuy"
    />
  ),

  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="w5jv396"
    />
  ),

  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="oq5tlpv"
    />
  ),

  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="k3sykyo"
    />
  ),

  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
      data-oid="qj8bmkh"
    />
  ),

  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
      data-oid="77gvbww"
    />
  ),

  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
      data-oid="ylyj9o."
    />
  ),

  ul: ({ className, ...props }) => (
    <ul
      className={cn("my-6 ml-6 list-disc", className)}
      {...props}
      data-oid="vavp.7q"
    />
  ),

  ol: ({ className, ...props }) => (
    <ol
      className={cn("my-6 ml-6 list-decimal", className)}
      {...props}
      data-oid="sgx29lu"
    />
  ),

  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} data-oid="0e31crt" />
  ),

  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
      data-oid="cc_8xop"
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
      data-oid="j7is-6-"
    />
  ),

  hr: ({ ...props }) => (
    <hr className="my-4 md:my-8" {...props} data-oid="_.jeva3" />
  ),

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto" data-oid="1cr7ps9">
      <table
        className={cn("w-full", className)}
        {...props}
        data-oid="rlgfhxi"
      />
    </div>
  ),

  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
      data-oid="1m5xz6v"
    />
  ),

  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
      data-oid="m-s499n"
    />
  ),

  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
      data-oid="8wbgfwy"
    />
  ),

  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-4",
        className,
      )}
      {...props}
      data-oid="1916-7."
    />
  ),

  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
      data-oid="chcd_2s"
    />
  ),

  Image: (props: ImageProps) => <NextImage {...props} data-oid="3awo6a." />,
  Callout,
  Card: MdxCard,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx" data-oid="kdf9naj">
      <Component components={components} data-oid="77ytxah" />
    </div>
  );
}
