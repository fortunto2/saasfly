"use client";

import { useState } from "react";
import * as Icons from "@saasfly/ui/icons";

export function CodeCopy() {
  const [copied, setCopied] = useState(false);
  const command = "bun create saasfly";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className="rounded-full h-12 px-3 flex items-center justify-between max-w-xl bg-neutral-200 dark:bg-neutral-700/40"
      data-oid="bz8h1ru"
    >
      <div
        className="flex items-center space-x-2 font-mono text-neutral-700 dark:text-neutral-300"
        data-oid="rw8gr62"
      >
        <span data-oid="-cvyv25">$</span>
        <span data-oid="l2:9y5m">{command}</span>
      </div>
      <button
        onClick={copyToClipboard}
        className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded-md transition-colors ml-2"
        aria-label="Copy to clipboard"
        data-oid="_gr_m3m"
      >
        {copied ? (
          <Icons.Check
            className="w-4 h-4 text-neutral-700 dark:text-neutral-300"
            data-oid="md_hnba"
          />
        ) : (
          <Icons.Copy
            className={`w-4 h-4 text-neutral-700 dark:text-neutral-300`}
            data-oid="_ygg_y:"
          />
        )}
      </button>
    </div>
  );
}
