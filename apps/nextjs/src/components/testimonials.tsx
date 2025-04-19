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
    <div className="bg-gray-50 py-20" data-oid="re6_y9d">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        data-oid="nj76eaz"
      >
        <div className="text-center" data-oid="bb.ola3">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            data-oid="3317p0q"
          >
            What Our Users Say
          </h2>
        </div>
        <div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-oid="wf79u56"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg"
              data-oid="rg9l0yn"
            >
              <div className="flex items-center space-x-3" data-oid="q_q4mao">
                <div
                  className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                  data-oid="ve_io5h"
                />

                <div data-oid=":xo18ls">
                  <p className="font-medium text-gray-900" data-oid="ia:h6zz">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500" data-oid="tlzluw:">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600" data-oid="vci7afo">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
