import { Skeleton } from "@saasfly/ui/skeleton";

export default function Loading() {
  return (
    <div
      className="flex w-full flex-col gap-16 py-8 md:py-8"
      data-oid="4o1:8.u"
    >
      <section
        className="container flex flex-col items-center"
        data-oid="f7gm8mq"
      >
        <div
          className="mx-auto flex w-full flex-col items-center gap-5"
          data-oid="0vyj9t3"
        >
          <Skeleton className="mb-2 h-4 w-1/12" data-oid="tx6vw:s" />
          <Skeleton className="h-10 w-2/6" data-oid="5tjxep2" />
          <Skeleton className="mb-3 mt-5 h-8 w-1/5" data-oid="jrzfo5v" />
        </div>

        <div
          className="mx-auto grid w-full max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3"
          data-oid="xcdq4iq"
        >
          <Skeleton className="h-[520px] w-full" data-oid="r1us-eq" />
          <Skeleton className="h-[520px] w-full" data-oid="wy_zc7k" />
          <Skeleton className="h-[520px] w-full" data-oid="al_:mlk" />
        </div>

        <div
          className="mt-3 flex w-full flex-col items-center gap-2"
          data-oid="bb5_rw-"
        >
          <Skeleton className="h-4 w-2/6" data-oid="6m2.9r." />
          <Skeleton className="h-4 w-1/6" data-oid="qh0peis" />
        </div>
      </section>

      <hr className="container" data-oid="futm9-x" />
    </div>
  );
}
