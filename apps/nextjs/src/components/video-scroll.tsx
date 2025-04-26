"use client";

import Link from "next/link";
import Image from "next/image";

import { ContainerScroll } from "@saasfly/ui/container-scroll-animation";
import { ColourfulText } from "@saasfly/ui/colorful-text";

export function VideoScroll({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div className="flex flex-col overflow-hidden" data-oid="iap713c">
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className="text-4xl font-semibold text-black dark:text-white"
              data-oid="p911-:."
            >
              {dict?.first_text}
              <br data-oid=":l8x4xt" />
              <span
                className="text-4xl md:text-6xl font-bold mt-1 leading-none"
                data-oid=":rzpl77"
              >
                {dict?.second_text1}
                <ColourfulText
                  text={dict?.time_text ?? ""}
                  data-oid="bxm3y5n"
                />

                {dict?.second_text2}
              </span>
            </h1>
          </>
        }
        data-oid="blqengo"
      >
        <Link
          href="https://x.com/i/broadcasts/1eaKbaYVAXkxX"
          target="_blank"
          data-oid=":ysttil"
        >
          <Image
            src={`https://cdnv2.ruguoapp.com/FoAVSRtT2zVc96oDjAWrd5TvXXQ4v3.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            data-oid="mxa-hp7"
          />
        </Link>
      </ContainerScroll>
    </div>
  );
}
