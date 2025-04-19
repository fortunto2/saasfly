import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { formatDate } from "~/lib/utils";

interface Post {
  _id: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  image: string;
  authors: string[];
  slug: string;
}

interface BlogPostsProps {
  posts: Post[];
}

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="container space-y-10 py-6 md:py-10" data-oid="3rqsbzs">
      <section data-oid="819.rpf">
        <h2 className="font-heading mb-4 text-3xl" data-oid="5vsntg8">
          Last Post
        </h2>
        <article
          className="relative grid grid-cols-1 gap-6 md:grid-cols-2"
          data-oid="lkwc6jx"
        >
          <div data-oid="7t330qz">
            {posts[0]?.image && (
              <Image
                alt={posts[0].title}
                className="w-full rounded-lg border object-cover object-center md:h-64 lg:h-72"
                height={452}
                src={posts[0].image}
                width={804}
                data-oid="agb5fi9"
              />
            )}
          </div>
          <div className="flex flex-col justify-center" data-oid="ajx6bdn">
            <h3
              className="font-heading mb-2 text-2xl md:text-4xl"
              data-oid="_bb5f2i"
            >
              <Balancer data-oid="4oss654">{posts[0]?.title}</Balancer>
            </h3>
            {posts[0]?.description && (
              <p
                className="text-muted-foreground md:text-lg"
                data-oid="0outx7p"
              >
                <Balancer data-oid="j9ryeor">{posts[0]?.description}</Balancer>
              </p>
            )}
            <Link
              href={posts[0]?.slug ?? "/#"}
              className="absolute inset-0"
              data-oid="xkwqmgk"
            >
              <span className="sr-only" data-oid="wf6v:ie">
                View Article
              </span>
            </Link>
          </div>
        </article>
      </section>

      <section data-oid="2_2plyl">
        <h2 className="font-heading mb-4 text-3xl" data-oid=":_uwr27">
          Blog Posts
        </h2>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="j1743eu"
        >
          {posts.slice(1).map((post) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
              data-oid=".x1ckmn"
            >
              {post.image && (
                <Image
                  alt={post.title}
                  src={post.image}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  data-oid="gv82wmi"
                />
              )}
              <h2
                className="font-heading line-clamp-1 text-2xl"
                data-oid="cbv7x2r"
              >
                {post.title}
              </h2>
              {post.description && (
                <p
                  className="line-clamp-1 text-muted-foreground"
                  data-oid="ab.3doq"
                >
                  {post.description}
                </p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground" data-oid="fdqib.x">
                  {formatDate(post.date)}
                </p>
              )}
              <Link
                href={post.slug}
                className="absolute inset-0"
                data-oid="gfwrvkr"
              >
                <span className="sr-only" data-oid="fnl1:-i">
                  View Article
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
