import { BasicItemSkeleton } from "~/components/base-item";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export default function DashboardLoading() {
  return (
    <DashboardShell data-oid="jkgp0r:">
      <DashboardHeader
        heading="kubernetes"
        text="Create and manage clusters."
        data-oid="vy2265n"
      ></DashboardHeader>
      <div
        className="divide-border-200 divide-y rounded-md border"
        data-oid="j25qg_5"
      >
        <BasicItemSkeleton data-oid="dzh6fg:" />
        <BasicItemSkeleton data-oid="56ms8xo" />
        <BasicItemSkeleton data-oid="axc.k:6" />
      </div>
    </DashboardShell>
  );
}
