/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

import { notFound } from "next/navigation";

import { Mdx } from "~/components/content/mdx-components";
import { DashboardTableOfContents } from "~/components/content/toc";
import { DocsPageHeader } from "~/components/docs/page-header";
import { DocsPager } from "~/components/docs/pager";
import { getTableOfContents } from "~/lib/toc";
import { allDocs } from ".contentlayer/generated";

import "~/styles/mdx.css";

import type { Metadata } from "next";

import { env } from "~/env.mjs";
import { absoluteUrl } from "~/lib/utils";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

function getDocFromParams(params: { slug: any }) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) {
    null;
  }

  return doc;
}

export function generateMetadata({ params }: DocPageProps): Metadata {
  const doc = getDocFromParams(params);

  if (!doc) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", doc.description ?? doc.title);
  ogUrl.searchParams.set("type", "Documentation");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}

export function generateStaticParams(): {
  slug: string[];
}[] {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main
      className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]"
      data-oid="-qcc7q."
    >
      <div className="mx-auto w-full min-w-0" data-oid="i9-4w9y">
        <DocsPageHeader
          heading={doc.title}
          text={doc.description}
          data-oid="pq2z-_u"
        />

        <Mdx code={doc.body.code} data-oid="einpsm7" />
        <hr className="my-4 md:my-6" data-oid="74wsz3c" />
        <DocsPager doc={doc} data-oid="gjitud." />
      </div>
      <div className="hidden text-sm xl:block" data-oid="38.xksm">
        <div
          className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"
          data-oid="w991qro"
        >
          <DashboardTableOfContents toc={toc} data-oid="-h51dyu" />
        </div>
      </div>
    </main>
  );
}
