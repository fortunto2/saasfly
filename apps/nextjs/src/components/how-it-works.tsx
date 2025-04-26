import * as Icons from "@saasfly/ui/icons";

export function HowItWorks({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div className="flex flex-col items-center w-full py-12" data-oid="2jb.5m5">
      <h2 className="text-3xl font-bold mb-4" data-oid="eldb6w.">
        {dict?.title}
      </h2>
      <p
        className="text-lg text-neutral-500 dark:text-neutral-400 mb-12"
        data-oid="htzu13y"
      >
        {dict?.subtitle}
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        data-oid="cju5tem"
      >
        <Step
          number={1}
          icon={
            <Icons.Heart
              className="h-6 w-6 text-purple-500"
              data-oid="0foqtml"
            />
          }
          title={dict?.step1_title ?? ""}
          description={dict?.step1_desc ?? ""}
          data-oid="vpzfiw4"
        />

        <Step
          number={2}
          icon={
            <Icons.Blocks
              className="h-6 w-6 text-purple-500"
              data-oid="41noo9u"
            />
          }
          title={dict?.step2_title ?? ""}
          description={dict?.step2_desc ?? ""}
          data-oid="c.kvbfp"
        />

        <Step
          number={3}
          icon={
            <Icons.Rocket
              className="h-6 w-6 text-purple-500"
              data-oid="n:mhiqw"
            />
          }
          title={dict?.step3_title ?? ""}
          description={dict?.step3_desc ?? ""}
          data-oid="a.502f6"
        />
      </div>
    </div>
  );
}

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Step({ number, icon, title, description }: StepProps) {
  return (
    <div
      className="flex flex-col items-center text-center p-6 rounded-3xl border dark:border-neutral-800 dark:bg-neutral-900/40 transition-all hover:shadow-lg"
      data-oid="q0i32g1"
    >
      <div
        className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 relative"
        data-oid="j-79utw"
      >
        {icon}
        <div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold"
          data-oid="3z5tjal"
        >
          {number}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3" data-oid="n4lle1a">
        {title}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400" data-oid="urx-12t">
        {description}
      </p>
    </div>
  );
}
