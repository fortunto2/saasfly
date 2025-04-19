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
    <div className="flex flex-col overflow-hidden" data-oid="3a5im.x">
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className="text-4xl font-semibold text-black dark:text-white"
              data-oid="osvo0:i"
            >
              {dict?.first_text}
              <br data-oid="z8-kjt3" />
              <span
                className="text-4xl md:text-6xl font-bold mt-1 leading-none"
                data-oid="7ies_4n"
              >
                {dict?.second_text1}
                <ColourfulText
                  text={dict?.time_text ?? ""}
                  data-oid="e8:5a3l"
                />

                {dict?.second_text2}
              </span>
            </h1>
          </>
        }
        data-oid="o0647ef"
      >
        <Link
          href="https://x.com/i/broadcasts/1eaKbaYVAXkxX"
          target="_blank"
          data-oid="0c-t.4m"
        >
          <Image
            src={`https://cdnv2.ruguoapp.com/FoAVSRtT2zVc96oDjAWrd5TvXXQ4v3.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            data-oid="tey0w0x"
          />
        </Link>
      </ContainerScroll>
    </div>
  );
}
