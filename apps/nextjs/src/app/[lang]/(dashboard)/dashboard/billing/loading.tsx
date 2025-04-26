import { Card, CardContent, CardHeader, CardTitle } from "@saasfly/ui/card";

import { DashboardShell } from "~/components/shell";

export default function Loading() {
  return (
    <DashboardShell
      title="Billing"
      description="Manage your subscription and billing details"
      className="space-y-4"
      data-oid="tr0te-p"
    >
      <LoadingCard title="Subscription" data-oid="5j:8vpf" />
      <LoadingCard title="Usage" data-oid="hf9a87v" />
    </DashboardShell>
  );
}

function LoadingCard(props: { title: string }) {
  return (
    <Card className="mt-4" data-oid="px-y1ss">
      <CardHeader data-oid="exf0mfc">
        <CardTitle data-oid="76_100r">{props.title}</CardTitle>
      </CardHeader>
      <CardContent data-oid="vtivh_e">
        <div
          className="h-24 animate-pulse rounded bg-muted"
          data-oid="h9d4m4."
        />
      </CardContent>
    </Card>
  );
}
