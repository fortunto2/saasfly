import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "~/lib/get-dictionary";

import { RightsideMarketing } from "~/components/rightside-marketing";
import { HowItWorks } from "~/components/how-it-works";
import { UseCases } from "~/components/use-cases";
import { Testimonials } from "~/components/testimonials";
import { FinalCta } from "~/components/final-cta";
import { FeatureHighlights } from "~/components/feature-highlights";

import { AnimatedTooltip } from "@saasfly/ui/animated-tooltip";
import { BackgroundLines } from "@saasfly/ui/background-lines";
import { Button } from "@saasfly/ui/button";
import { ColourfulText } from "@saasfly/ui/colorful-text";
import * as Icons from "@saasfly/ui/icons";

import type { Locale } from "~/config/i18n-config";
import { VideoScroll } from "~/components/video-scroll";

const people = [
  {
    id: 1,
    name: "tianzx",
    designation: "CEO at Nextify",
    image: "https://avatars.githubusercontent.com/u/10096899",
    link: "https://x.com/nextify2024",
  },
  {
    id: 2,
    name: "jackc3",
    designation: "Co-founder at Nextify",
    image: "https://avatars.githubusercontent.com/u/10334353",
    link: "https://x.com/BingxunYao",
  },
  {
    id: 3,
    name: "imesong",
    designation: "Contributor",
    image: "https://avatars.githubusercontent.com/u/3849293",
  },
  {
    id: 4,
    name: "ziveen",
    designation: "Contributor",
    image: "https://avatars.githubusercontent.com/u/22560152",
  },
  {
    id: 5,
    name: "Zenuncl",
    designation: "Independent Software Developer",
    image: "https://avatars.githubusercontent.com/u/3316062",
  },
  {
    id: 6,
    name: "Innei",
    designation: "Indie Developer",
    image: "https://avatars.githubusercontent.com/u/41265413",
  },
];

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  // Используем any для совместимости до обновления типов
  const marketing = dict.marketing as any;

  return (
    <>
      <section className="container" data-oid="fngxo8a">
        <div
          className="grid grid-cols-1 gap-10 xl:grid-cols-2"
          data-oid="x2fshm6"
        >
          <div className="flex flex-col items-start h-full" data-oid="meve4lx">
            <BackgroundLines className="h-full" data-oid="d3dnxmr">
              <div
                className="flex flex-col pt-4 md:pt-36 lg:pt-36 xl:pt-36"
                data-oid="en198ho"
              >
                <div className="mt-20" data-oid="hp9sofl">
                  <div
                    className="mb-6 max-w-4xl text-left text-4xl font-semibold dark:text-zinc-100 md:text-5xl xl:text-5xl md:leading-[4rem] xl:leading-[4rem]"
                    data-oid="zv__9.u"
                  >
                    {marketing.title || "Turn Vibes into Videos – Instantly."}
                    <ColourfulText text="SuperDuperAI" data-oid="v:f8csa" />
                  </div>
                </div>

                <div className="mt-4" data-oid=".3n_abu">
                  <span
                    className="text-neutral-500 dark:text-neutral-400 sm:text-lg"
                    data-oid="fi958qi"
                  >
                    {marketing.sub_title ||
                      "AI filmmaking for creators, businesses, musicians, and teams."}
                  </span>
                </div>

                <div
                  className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0 z-10"
                  data-oid="hg8_eeh"
                >
                  <Link href="/signup" data-oid="6p_yqm7">
                    <Button
                      className="bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg px-6 h-12 font-medium"
                      data-oid="m6n_fif"
                    >
                      {marketing.get_started}
                      <Icons.ArrowRight
                        className="h-5 w-5"
                        data-oid=":nq-3ew"
                      />
                    </Button>
                  </Link>

                  <Link href="#demo" data-oid="g7armqe">
                    <Button
                      variant="outline"
                      className="rounded-full text-lg px-6 h-12 font-medium"
                      data-oid="d3-e.7t"
                    >
                      {marketing.explore_product}
                      <Icons.ArrowRight
                        className="h-5 w-5"
                        data-oid="4.5880q"
                      />
                    </Button>
                  </Link>
                </div>

                <div
                  className="flex xl:flex-row flex-col items-center justify-start mt-4 w-full"
                  data-oid="i:4zsqt"
                >
                  <div className="flex" data-oid="7rkwth7">
                    <AnimatedTooltip items={people} data-oid="inhga4a" />
                  </div>
                  <div
                    className="flex flex-col items-center justify-start ml-8"
                    data-oid="3x7az_p"
                  >
                    <div className="w-[340px]" data-oid="9gmeon-">
                      <text className="font-semibold" data-oid="0lvj3ua">
                        9{" "}
                      </text>
                      <text
                        className="text-neutral-500 dark:text-neutral-400"
                        data-oid="es8a:0e"
                      >
                        {marketing.contributors.contributors_desc}
                      </text>
                    </div>
                    <div className="w-[340px]" data-oid="vygm0tb">
                      <text
                        className="text-neutral-500 dark:text-neutral-400"
                        data-oid="h.5vqcb"
                      >
                        {marketing.contributors.developers_first}
                      </text>
                      <ColourfulText text="2000" data-oid="2vi_y49" />
                      <text
                        className="text-neutral-500 dark:text-neutral-400"
                        data-oid="o5:3pqz"
                      >
                        {marketing.contributors.developers_second}
                      </text>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundLines>
          </div>

          <div
            className="hidden h-full w-full xl:block bg-background"
            data-oid="dx_w79u"
          >
            <div className="flex flex-col pt-44" data-oid="1.vcnsf">
              <RightsideMarketing
                dict={marketing.right_side}
                data-oid="jw..4l8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container pt-24" data-oid="mcjgb1k">
        <HowItWorks dict={marketing.how_it_works} data-oid="buziddc" />
      </section>

      <section id="demo" className="container pt-16" data-oid="myxqfs-">
        <VideoScroll dict={marketing.video} data-oid="dn_ymfi" />
      </section>

      <section id="features" className="container mt-24" data-oid="a_62rtv">
        <FeatureHighlights data-oid="5ic2tsm" />
      </section>

      <section id="use-cases" className="container pt-24" data-oid="975tnr6">
        <UseCases dict={marketing.use_cases} data-oid="xol0pbw" />
      </section>

      <section id="testimonials" className="container pt-24" data-oid="-w7_1jo">
        <div
          className="flex h-full w-full flex-col items-center"
          data-oid="7aym3pf"
        >
          <div data-oid="6qlj02d">
            <h1
              className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl"
              data-oid="_hqquyp"
            >
              {marketing.people_comment.title}
            </h1>
          </div>
          <div
            className="mb-6 text-lg text-neutral-500 dark:text-neutral-400 text-center max-w-3xl"
            data-oid="tmy6.se"
          >
            {marketing.people_comment.desc}
          </div>

          <Testimonials dict={marketing.testimonials} data-oid="4ojr_.c" />
        </div>
      </section>

      <section id="sponsors" className="container pt-16" data-oid="d.dn2kg">
        <div
          className="flex flex-col justify-center items-center pt-10"
          data-oid="58n.pqq"
        >
          <div
            className="text-lg text-neutral-500 dark:text-neutral-400"
            data-oid="nrokzi3"
          >
            {marketing.sponsor.title}
          </div>
          <div className="mt-4 flex items-center gap-4" data-oid="bymxr.4">
            <Link
              href="https://www.twillot.com/"
              target="_blank"
              data-oid="itdn0-c"
            >
              <Image
                src="https://www.twillot.com/logo-128.png"
                width="48"
                height="48"
                alt="twillot"
                data-oid="hkmek9x"
              />
            </Link>
            <Link
              href="https://www.setupyourpay.com/"
              target="_blank"
              data-oid="lbnmo9o"
            >
              <Image
                src="https://www.setupyourpay.com/logo.png"
                width="48"
                height="48"
                alt="setupyourpay"
                data-oid="pvg0klk"
              />
            </Link>
            <Link
              href="https://opencollective.com/superduperai"
              target="_blank"
              data-oid="jz-vim9"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 hover:bg-accent dark:hover:bg-neutral-800/30"
                data-oid="zd26zms"
              >
                <Icons.Heart
                  className="w-5 h-5 fill-pink-600 text-pink-600 dark:fill-pink-700 dark:text-pink-700"
                  data-oid="e4h1je0"
                />

                <span
                  className="text-sm font-medium text-neutral-500 dark:text-neutral-200"
                  data-oid="geawr7y"
                >
                  {marketing.sponsor.donate || ""}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="cta" className="container py-24" data-oid="e7eqa:d">
        <FinalCta dict={marketing} data-oid="j7kfwpz" />
      </section>
    </>
  );
}
