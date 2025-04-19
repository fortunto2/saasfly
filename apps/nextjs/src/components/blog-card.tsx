import { FollowerPointerCard } from "@saasfly/ui/following-pointer";

export function XBlogArticle() {
  return (
    <div className="w-80" data-oid="uvgpm7x">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
            data-oid="kbzi6:z"
          />
        }
        data-oid="3a25gyz"
      >
        <div
          className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl"
          data-oid="z23gir2"
        >
          <div
            className="aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100"
            data-oid="1xm29rr"
          >
            <img
              src={blogContent.image}
              alt="thumbnail"
              className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl `}
              data-oid=".s0-e_i"
            />
          </div>
          <div className=" p-4" data-oid="80gr7ev">
            <h2
              className="my-4 text-lg font-bold text-zinc-700"
              data-oid="qgnvofl"
            >
              {blogContent.title}
            </h2>
            <h2
              className="my-4 text-sm font-normal text-zinc-500"
              data-oid=":91-000"
            >
              {blogContent.description}
            </h2>
            <div
              className="mt-10 flex flex-row items-center justify-between"
              data-oid="9669peh"
            >
              <span className="text-sm text-gray-500" data-oid="klunn_9">
                {blogContent.date}
              </span>
              <div
                className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white"
                data-oid="4r2-fne"
              >
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "Making-Sense-of-React-Server-Components",
  author: "Nextify",
  date: "26th March, 2024",
  title: "Making Sense of React Server Components",
  description:
    "So, here's something that makes me feel old: React celebrated its 10th birthday this year!",
  image:
    "https://cdn.sanity.io/images/tpb4obti/production/50c13f886c039225be4e7e99023b8f1e2b4161b9-1792x1024.png",
  authorAvatar:
    "https://pbs.twimg.com/profile_images/1766283284370305025/QKXW5W3M_400x400.jpg",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2" data-oid="88d71-u">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
      data-oid="02gx6f3"
    />

    <p data-oid="-qarogk">{title}</p>
  </div>
);
