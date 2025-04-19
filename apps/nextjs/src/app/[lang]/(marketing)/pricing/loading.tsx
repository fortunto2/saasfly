import { Skeleton } from "@saasfly/ui/skeleton";

export default function Loading() {
  return (
    <div
      className="flex w-full flex-col gap-16 py-8 md:py-8"
      data-oid="_m1ogmz"
    >
      <section
        className="container flex flex-col items-center"
        data-oid="o9_ooiz"
      >
        <div
          className="mx-auto flex w-full flex-col items-center gap-5"
          data-oid="xc6kl60"
        >
          <Skeleton className="mb-2 h-4 w-1/12" data-oid="yh1k94o" />
          <Skeleton className="h-10 w-2/6" data-oid="l-.wr6q" />
          <Skeleton className="mb-3 mt-5 h-8 w-1/5" data-oid="gq:.8-j" />
        </div>

        <div
          className="mx-auto grid w-full max-w-screen-lg gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3"
          data-oid="zs:5ow-"
        >
          <Skeleton className="h-[520px] w-full" data-oid="2.1.knw" />
          <Skeleton className="h-[520px] w-full" data-oid="86piajy" />
          <Skeleton className="h-[520px] w-full" data-oid="5:g-oag" />
        </div>

        <div
          className="mt-3 flex w-full flex-col items-center gap-2"
          data-oid="wd8ki.z"
        >
          <Skeleton className="h-4 w-2/6" data-oid="h_lpnet" />
          <Skeleton className="h-4 w-1/6" data-oid="e-gipy1" />
        </div>
      </section>

      <hr className="container" data-oid="pe9yu7m" />
    </div>
  );
}
