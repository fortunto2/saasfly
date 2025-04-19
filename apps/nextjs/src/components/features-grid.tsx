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
      data-oid="3dq17cr"
    >
      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="615tczw"
      >
        <div className="flex flex-col gap-2" data-oid="-exsh30">
          <div className="flex items-center gap-2" data-oid="oopj09h">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="n12n1jp"
            >
              <Icons.Blocks
                className="w-6 h-6 text-purple-500"
                data-oid="qsqa60p"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="v.tjg9e">
              {dict?.monorepo_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="5vasv_n"
          >
            {dict?.monorepo_desc}
          </p>
        </div>
      </Card>

      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="xvstfoh"
      >
        <div className="flex flex-col gap-2" data-oid="m6e.kvf">
          <div className="flex items-center gap-2" data-oid="t5g4ksi">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="54dbq:t"
            >
              <Icons.Languages
                className="w-6 h-6 text-purple-500"
                data-oid="32j6sk7"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="cdzwus7">
              {dict?.i18n_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="oodh7vh"
          >
            {dict?.i18n_desc}
          </p>
        </div>
      </Card>

      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="s1l6d6t"
      >
        <div className="flex flex-col gap-2" data-oid="zmd43rb">
          <div className="flex items-center gap-2" data-oid="tb0uqi:">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="22uieby"
            >
              <Icons.Billing
                className="w-6 h-6 text-purple-500"
                data-oid="iq8mh2d"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="4ihfs9s">
              {dict?.payments_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="45smd-t"
          >
            {dict?.payments_desc}
          </p>
        </div>
      </Card>

      <Card
        className="p-3 w-full rounded-3xl dark:border-neutral-800 dark:bg-neutral-900/40"
        data-oid="txvvujd"
      >
        <div className="flex flex-col gap-2" data-oid="fl5:ozd">
          <div className="flex items-center gap-2" data-oid="da2x7n5">
            <div
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              data-oid="w6m5l-4"
            >
              <Icons.ShieldCheck
                className="w-6 h-6 text-purple-500"
                data-oid="fp04fga"
              />
            </div>
            <h2 className="text-lg font-semibold" data-oid="..53di-">
              {dict?.nextauth_title}
            </h2>
          </div>
          <p
            className="leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium"
            data-oid="ijp:syl"
          >
            {dict?.nextauth_desc}
          </p>
        </div>
      </Card>
    </div>
  );
}
