export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white"
      data-oid="mpy6miz"
    >
      <div className="block sm:hidden" data-oid=".zrwr89">
        xs
      </div>
      <div
        className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        data-oid="o74o50z"
      >
        sm
      </div>
      <div
        className="hidden md:block lg:hidden xl:hidden 2xl:hidden"
        data-oid="llc.2i6"
      >
        md
      </div>
      <div className="hidden lg:block xl:hidden 2xl:hidden" data-oid="xy.jn8t">
        lg
      </div>
      <div className="hidden xl:block 2xl:hidden" data-oid="4t9tfsi">
        xl
      </div>
      <div className="hidden 2xl:block" data-oid="q.de-5k">
        2xl
      </div>
    </div>
  );
}
