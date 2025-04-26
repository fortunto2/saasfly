import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@saasfly/ui/card";

import { DashboardShell } from "~/components/shell";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { trpc } from "~/trpc/server";
import { SubscriptionForm } from "./subscription-form";

export const metadata = {
  title: "Billing",
  description: "Manage billing and your subscription plan.",
};

interface Subscription {
  plan: string | null;
  endsAt: Date | null;
}

export default async function BillingPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <DashboardShell
      title={dict.business.billing.billing}
      description={dict.business.billing.content}
      className="space-y-4"
      data-oid="689m7oe"
    >
      <SubscriptionCard dict={dict.business.billing} data-oid="xdw5nv3" />

      <UsageCard data-oid="_4i7uec" />
    </DashboardShell>
  );
}

function generateSubscriptionMessage(
  dict: Record<string, string>,
  subscription: Subscription,
): string {
  const content = String(dict.subscriptionInfo);
  if (subscription.plan && subscription.endsAt) {
    return content
      .replace("{plan}", subscription.plan)
      .replace("{date}", subscription.endsAt.toLocaleDateString());
  }
  return "";
}

async function SubscriptionCard({ dict }: { dict: Record<string, string> }) {
  const subscription = (await trpc.auth.mySubscription.query()) as Subscription;
  const content = generateSubscriptionMessage(dict, subscription);
  return (
    <Card data-oid="j64iw8r">
      <CardHeader data-oid="bqzu.iy">
        <CardTitle data-oid="p2gkptw">Subscription</CardTitle>
      </CardHeader>
      <CardContent data-oid="6fiuuvc">
        {subscription ? (
          <p dangerouslySetInnerHTML={{ __html: content }} data-oid="e5:0wat" />
        ) : (
          <p data-oid="c7tp-5k">{dict.noSubscription}</p>
        )}
      </CardContent>
      <CardFooter data-oid="xx_39og">
        <SubscriptionForm
          hasSubscription={!!subscription}
          dict={dict}
          data-oid="hn9v8-x"
        />
      </CardFooter>
    </Card>
  );
}

function UsageCard() {
  return (
    <Card className="mt-4" data-oid="f.rybal">
      <CardHeader data-oid="8s8jh0q">
        <CardTitle data-oid="bq1micu">Usage</CardTitle>
      </CardHeader>
      <CardContent data-oid="g5hf_mx">None</CardContent>
    </Card>
  );
}
