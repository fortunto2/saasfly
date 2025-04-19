import { Card, CardContent, CardHeader, CardTitle } from "@saasfly/ui/card";

import { DashboardShell } from "~/components/shell";

export default function Loading() {
  return (
    <DashboardShell
      title="Billing"
      description="Manage your subscription and billing details"
      className="space-y-4"
      data-oid="xykqx4f"
    >
      <LoadingCard title="Subscription" data-oid="ny0flu0" />
      <LoadingCard title="Usage" data-oid="g91ot84" />
    </DashboardShell>
  );
}

function LoadingCard(props: { title: string }) {
  return (
    <Card className="mt-4" data-oid="ueo-zfy">
      <CardHeader data-oid="-954f_-">
        <CardTitle data-oid="ng1._zu">{props.title}</CardTitle>
      </CardHeader>
      <CardContent data-oid="kgv.ah3">
        <div
          className="h-24 animate-pulse rounded bg-muted"
          data-oid="ocoyca-"
        />
      </CardContent>
    </Card>
  );
}
