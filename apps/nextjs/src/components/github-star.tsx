"use client";

import Link from "next/link";
import * as Icons from "@saasfly/ui/icons";

export function GitHubStar() {
  return (
    <Link
      href="https://github.com/saasfly/saasfly"
      target="_blank"
      rel="Saasfly GitHub"
      data-oid="eu0nzw3"
    >
      <div
        className="inline-flex items-center gap-1.5 px-3 h-9 border border-input hover:bg-accent hover:text-accent-foreground rounded-full text-sm font-medium"
        data-oid="2tzlac1"
      >
        <Icons.GitHub className="w-4 h-4" data-oid="gm753tv" />
        <span data-oid="_fzfnls">2.2K</span>
      </div>
    </Link>
  );
}
