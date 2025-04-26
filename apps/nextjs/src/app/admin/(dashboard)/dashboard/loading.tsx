import { BasicItemSkeleton } from "~/components/base-item";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export default function DashboardLoading() {
  return (
    <DashboardShell data-oid="cf4r1a-">
      <DashboardHeader
        heading="kubernetes"
        text="Create and manage clusters."
        data-oid="zq.x549"
      ></DashboardHeader>
      <div
        className="divide-border-200 divide-y rounded-md border"
        data-oid="pd:w9ns"
      >
        <BasicItemSkeleton data-oid="_bxy8xg" />
        <BasicItemSkeleton data-oid="4dpyms3" />
        <BasicItemSkeleton data-oid="wr77pje" />
      </div>
    </DashboardShell>
  );
}
