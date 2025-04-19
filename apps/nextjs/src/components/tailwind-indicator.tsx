export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white"
      data-oid="ecb24mk"
    >
      <div className="block sm:hidden" data-oid="kcm:ft.">
        xs
      </div>
      <div
        className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
        data-oid="j1lrw.2"
      >
        sm
      </div>
      <div
        className="hidden md:block lg:hidden xl:hidden 2xl:hidden"
        data-oid="b8cym7k"
      >
        md
      </div>
      <div className="hidden lg:block xl:hidden 2xl:hidden" data-oid="fab9cdx">
        lg
      </div>
      <div className="hidden xl:block 2xl:hidden" data-oid="nobl9h0">
        xl
      </div>
      <div className="hidden 2xl:block" data-oid=":4k77y7">
        2xl
      </div>
    </div>
  );
}
