import * as React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function Testimonials({
  dict,
}: {
  dict: Record<string, Record<string, string>> | undefined;
}) {
  const testimonials: Testimonial[] = [
    {
      quote: dict?.testimonial1?.quote ?? "",
      author: dict?.testimonial1?.author ?? "",
      role: dict?.testimonial1?.role ?? "",
    },
    {
      quote: dict?.testimonial2?.quote ?? "",
      author: dict?.testimonial2?.author ?? "",
      role: dict?.testimonial2?.role ?? "",
    },
    {
      quote: dict?.testimonial3?.quote ?? "",
      author: dict?.testimonial3?.author ?? "",
      role: dict?.testimonial3?.role ?? "",
    },
  ];

  return (
    <div className="bg-gray-50 py-20" data-oid="vp-_ejf">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        data-oid="jho3rix"
      >
        <div className="text-center" data-oid="f8ka4yn">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-oid="uqlxqx0"
          >
            What Our Users Say
          </h2>
        </div>
        <div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-oid="b08c14w"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg"
              data-oid="2r5zo8a"
            >
              <div className="flex items-center space-x-3" data-oid="4tvtv_w">
                <div
                  className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  data-oid="_ks3brx"
                />

                <div data-oid="5oj_4_4">
                  <p className="font-medium text-gray-900" data-oid="6g4j1k9">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500" data-oid="w8mw-l.">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600" data-oid="01v_mip">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
