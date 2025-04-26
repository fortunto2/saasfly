import Link from "next/link";
import { Doc } from "contentlayer/generated";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { getDocsConfig } from "~/config/ui/docs";

interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <div
      className="flex flex-row items-center justify-between"
      data-oid="liff1o5"
    >
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "ghost" }))}
          data-oid=":6v19il"
        >
          <Icons.ChevronLeft className="mr-2 h-4 w-4" data-oid="wlg3l9e" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
          data-oid="u8mc1vm"
        >
          {pager.next.title}
          <Icons.ChevronRight className="ml-2 h-4 w-4" data-oid="3a.cz6m" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [
    null,
    ...flatten(getDocsConfig("en").sidebarNav),
    null,
  ];

  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href,
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

// @ts-ignore
export function flatten(
  links: {
    items?: { items?: any }[];
  }[],
) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
