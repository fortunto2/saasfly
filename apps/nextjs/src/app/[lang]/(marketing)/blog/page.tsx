import { compareDesc } from "date-fns";

import { BlogPosts } from "~/components/blog/blog-posts";
import { allPosts } from ".contentlayer/generated";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main data-oid="dan_o94">
      <BlogPosts posts={posts} data-oid="66apewz" />
    </main>
  );
}
