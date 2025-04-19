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
      data-oid="fpt1655"
    >
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "ghost" }))}
          data-oid="l6yyn25"
        >
          <Icons.ChevronLeft className="mr-2 h-4 w-4" data-oid="990zep7" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
          data-oid="xih7d9p"
        >
          {pager.next.title}
          <Icons.ChevronRight className="ml-2 h-4 w-4" data-oid="t0482ce" />
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
