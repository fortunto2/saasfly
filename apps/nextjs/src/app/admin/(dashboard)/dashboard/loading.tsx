import { BasicItemSkeleton } from "~/components/base-item";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export default function DashboardLoading() {
  return (
    <DashboardShell data-oid=":sc17ft">
      <DashboardHeader
        heading="kubernetes"
        text="Create and manage clusters."
        data-oid="wl2blv_"
      ></DashboardHeader>
      <div
        className="divide-border-200 divide-y rounded-md border"
        data-oid="030tbhx"
      >
        <BasicItemSkeleton data-oid="3vf16a4" />
        <BasicItemSkeleton data-oid="6hlq1y6" />
        <BasicItemSkeleton data-oid="69:90tv" />
      </div>
    </DashboardShell>
  );
}
