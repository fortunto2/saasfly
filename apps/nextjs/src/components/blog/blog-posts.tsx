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
    <div className="container space-y-10 py-6 md:py-10" data-oid="ebofg9l">
      <section data-oid="pm50gz:">
        <h2 className="font-heading mb-4 text-3xl" data-oid="_q0tp8d">
          Last Post
        </h2>
        <article
          className="relative grid grid-cols-1 gap-6 md:grid-cols-2"
          data-oid="z:5symh"
        >
          <div data-oid="6vur9:p">
            {posts[0]?.image && (
              <Image
                alt={posts[0].title}
                className="w-full rounded-lg border object-cover object-center md:h-64 lg:h-72"
                height={452}
                src={posts[0].image}
                width={804}
                data-oid="4xsy0d4"
              />
            )}
          </div>
          <div className="flex flex-col justify-center" data-oid=".5.ye-4">
            <h3
              className="font-heading mb-2 text-2xl md:text-4xl"
              data-oid="zzz704l"
            >
              <Balancer data-oid="uv0bsyr">{posts[0]?.title}</Balancer>
            </h3>
            {posts[0]?.description && (
              <p
                className="text-muted-foreground md:text-lg"
                data-oid="rfakhly"
              >
                <Balancer data-oid="03zyldk">{posts[0]?.description}</Balancer>
              </p>
            )}
            <Link
              href={posts[0]?.slug ?? "/#"}
              className="absolute inset-0"
              data-oid="hih5o93"
            >
              <span className="sr-only" data-oid="e0824v_">
                View Article
              </span>
            </Link>
          </div>
        </article>
      </section>

      <section data-oid="x_d0f5f">
        <h2 className="font-heading mb-4 text-3xl" data-oid="g3.s37a">
          Blog Posts
        </h2>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="osb6rdl"
        >
          {posts.slice(1).map((post) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
              data-oid="alj5dx7"
            >
              {post.image && (
                <Image
                  alt={post.title}
                  src={post.image}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  data-oid="2lqwu43"
                />
              )}
              <h2
                className="font-heading line-clamp-1 text-2xl"
                data-oid="gcnmlcb"
              >
                {post.title}
              </h2>
              {post.description && (
                <p
                  className="line-clamp-1 text-muted-foreground"
                  data-oid="9g8pkwb"
                >
                  {post.description}
                </p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground" data-oid="-erv4_l">
                  {formatDate(post.date)}
                </p>
              )}
              <Link
                href={post.slug}
                className="absolute inset-0"
                data-oid="u2lzmi6"
              >
                <span className="sr-only" data-oid="uffiz9.">
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
