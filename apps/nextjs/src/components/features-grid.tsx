import { Card } from "@saasfly/ui/card";
import * as Icons from "@saasfly/ui/icons";

export function FeaturesGrid({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div
      className="flex gap-4 flex-col sm:flex-row md:flex-row xl:flex-row"
      data-oid="cnp78ih"
    >
      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="2rofvcq"
      >
        <div className="flex flex-col gap-2" data-oid="bra1lzy">
          <div className="flex items-center gap-2" data-oid="h332d3y">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="e2.y:-0"
            >
              <Icons.Blocks
                className="w-6 h-6 text-purple-500"
                data-oid="knilqlw"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="52c0cal">
              {dict?.monorepo_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid=":xcmp:h"
          >
            {dict?.monorepo_desc}
          </p>
        </div>
      </Card>

      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="3om:tky"
      >
        <div className="flex flex-col gap-2" data-oid="rugcjpk">
          <div className="flex items-center gap-2" data-oid=".s3drjz">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="q5ih7cv"
            >
              <Icons.Languages
                className="w-6 h-6 text-purple-500"
                data-oid="zmicw2_"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="45iku1z">
              {dict?.i18n_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="m2xk.6g"
          >
            {dict?.i18n_desc}
          </p>
        </div>
      </Card>

      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="fhp67:p"
      >
        <div className="flex flex-col gap-2" data-oid="pyx4xat">
          <div className="flex items-center gap-2" data-oid="kz0zzkm">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="a.:rsw7"
            >
              <Icons.Billing
                className="w-6 h-6 text-purple-500"
                data-oid="ox05sq8"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="::1jtqp">
              {dict?.payments_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="1xdu_cx"
          >
            {dict?.payments_desc}
          </p>
        </div>
      </Card>

      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="5:5egww"
      >
        <div className="flex flex-col gap-2" data-oid=":d1sj9.">
          <div className="flex items-center gap-2" data-oid="4tbekzw">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid=".49f_q3"
            >
              <Icons.ShieldCheck
                className="w-6 h-6 text-purple-500"
                data-oid="mxnog08"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="7homdci">
              {dict?.nextauth_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="3966wj."
          >
            {dict?.nextauth_desc}
          </p>
        </div>
      </Card>
    </div>
  );
}
