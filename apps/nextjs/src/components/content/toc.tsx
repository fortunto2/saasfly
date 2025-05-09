"use client";

import * as React from "react";

import { cn } from "@saasfly/ui";

import type { TableOfContents } from "~/lib/toc";
import { useMounted } from "~/lib/use-mounted";

interface TocProps {
  toc: TableOfContents;
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.items) {
    return null;
  }

  return mounted ? (
    <div className="space-y-2" data-oid=":52q5j9">
      <p className="font-medium" data-oid="mpeckvf">
        On This Page
      </p>
      <Tree tree={toc} activeItem={activeHeading} data-oid="2y0g6jh" />
    </div>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul
      className={cn("m-0 list-none", { "pl-4": level !== 1 })}
      data-oid="sg0lfkk"
    >
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")} data-oid="s2q06zu">
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline",
                item.url === `#${activeItem}`
                  ? "font-medium text-primary"
                  : "text-sm text-muted-foreground",
              )}
              data-oid="364lzs1"
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item}
                level={level + 1}
                activeItem={activeItem}
                data-oid="ex244vo"
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
