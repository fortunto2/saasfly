import { BasicItemSkeleton } from "~/components/base-item";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export default function DashboardLoading() {
  return (
    <DashboardShell data-oid="mdai99i">
      <DashboardHeader
        heading="kubernetes"
        text="Create and manage clusters."
        data-oid="ihd9t1h"
      ></DashboardHeader>
      <div
        className="divide-border-200 divide-y rounded-md border"
        data-oid=":52rue4"
      >
        <BasicItemSkeleton data-oid="2t.4q4f" />
        <BasicItemSkeleton data-oid="c15solv" />
        <BasicItemSkeleton data-oid="dyvmik0" />
      </div>
    </DashboardShell>
  );
}
