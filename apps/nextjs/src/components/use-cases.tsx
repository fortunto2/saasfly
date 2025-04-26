import * as Icons from "@saasfly/ui/icons";
import { Card } from "@saasfly/ui/card";

export function UseCases({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div className="flex flex-col items-center w-full py-12" data-oid="_d8440a">
      <h2 className="text-3xl font-bold mb-12" data-oid=".0va434">
        {dict?.title}
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        data-oid="6bpg9:a"
      >
        <UseCase
          icon={
            <Icons.User
              className="h-6 w-6 text-purple-500"
              data-oid="zdjt1z."
            />
          }
          title={dict?.creators_title ?? ""}
          description={dict?.creators_desc ?? ""}
          data-oid="ktbqj84"
        />

        <UseCase
          icon={
            <Icons.Billing
              className="h-6 w-6 text-purple-500"
              data-oid="-x5w:bu"
            />
          }
          title={dict?.business_title ?? ""}
          description={dict?.business_desc ?? ""}
          data-oid="6ydq9ru"
        />

        <UseCase
          icon={
            <Icons.Heart
              className="h-6 w-6 text-purple-500"
              data-oid="fyuu73x"
            />
          }
          title={dict?.musicians_title ?? ""}
          description={dict?.musicians_desc ?? ""}
          data-oid="-gt55cu"
        />

        <UseCase
          icon={
            <Icons.Organization
              className="h-6 w-6 text-purple-500"
              data-oid="2u-dz7k"
            />
          }
          title={dict?.agencies_title ?? ""}
          description={dict?.agencies_desc ?? ""}
          data-oid="d:zn4s7"
        />
      </div>
    </div>
  );
}

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function UseCase({ icon, title, description }: UseCaseProps) {
  return (
    <Card
      className="p-6 rounded-3xl border dark:border-neutral-800 dark:bg-neutral-900/40 transition-all hover:shadow-lg hover:transform hover:scale-105 flex flex-col items-center text-center"
      data-oid="i-6w9h-"
    >
      <div
        className="mb-4 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
        data-oid="9g.u2.:"
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3" data-oid="four0..">
        {title}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400" data-oid="sal8_e9">
        {description}
      </p>
    </Card>
  );
}
