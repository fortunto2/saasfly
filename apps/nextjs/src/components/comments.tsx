import { cn } from "@saasfly/ui";
import Marquee from "@saasfly/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Alex",
    username: "@alex",
    body: "This tool has revolutionized the way our team works.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Shamoki",
    username: "@shamoki",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "王伟",
    username: "@wangwei",
    body: "这款 SaaS 服务简直是办公利器！我的工作效率提高了很多。",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "김민수",
    username: "@kios",
    body: "저는 이 SaaS 서비스에 매우 만족하고 있습니다.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "山田太郎",
    username: "@samtimkun",
    body: "このSaaSサービスには本当に感謝しています。",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      data-oid="hqt7s-k"
    >
      <div className="flex flex-row items-center gap-2" data-oid="rbcbn-:">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
          data-oid="-ejsvyg"
        />

        <div className="flex flex-col" data-oid="prk5wq7">
          <figcaption
            className="text-sm font-medium dark:text-white"
            data-oid="inn4pzj"
          >
            {name}
          </figcaption>
          <p
            className="text-xs font-medium dark:text-white/40"
            data-oid="51c_4pu"
          >
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm" data-oid="ii:igql">
        {body}
      </blockquote>
    </figure>
  );
};

const Comments = () => {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-4 sm:py-20 md:py-20 xl:py-20"
      data-oid="6slqw34"
    >
      <Marquee pauseOnHover className="[--duration:20s]" data-oid="_qprel8">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} data-oid="kq73t-g" />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s]"
        data-oid=".baeryp"
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} data-oid="i1q.l.x" />
        ))}
      </Marquee>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
        data-oid="-eul--p"
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
        data-oid="s8_w.3w"
      ></div>
    </div>
  );
};

export { Comments };
