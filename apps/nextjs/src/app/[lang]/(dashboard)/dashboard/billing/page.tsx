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
      data-oid="4jycli3"
    >
      <SubscriptionCard dict={dict.business.billing} data-oid="try-syw" />

      <UsageCard data-oid="eidr1la" />
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
    <Card data-oid=".8:04l:">
      <CardHeader data-oid="ffx8ybt">
        <CardTitle data-oid="7s5cii3">Subscription</CardTitle>
      </CardHeader>
      <CardContent data-oid="6ri83_v">
        {subscription ? (
          <p dangerouslySetInnerHTML={{ __html: content }} data-oid="-3i0dp2" />
        ) : (
          <p data-oid="eiyi5nl">{dict.noSubscription}</p>
        )}
      </CardContent>
      <CardFooter data-oid="pzgkd7z">
        <SubscriptionForm
          hasSubscription={!!subscription}
          dict={dict}
          data-oid="qw7xjbo"
        />
      </CardFooter>
    </Card>
  );
}

function UsageCard() {
  return (
    <Card className="mt-4" data-oid="79f.xbn">
      <CardHeader data-oid="t8x_1h2">
        <CardTitle data-oid="fm:8lm1">Usage</CardTitle>
      </CardHeader>
      <CardContent data-oid="1hs7mz.">None</CardContent>
    </Card>
  );
}
