import * as React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function Testimonials({ dict }: { dict: Record<string, Record<string, string>> | undefined }) {
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
    <div className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 