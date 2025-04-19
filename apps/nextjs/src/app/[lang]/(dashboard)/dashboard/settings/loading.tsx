import { CardSkeleton } from "~/components/card-skeleton";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell data-oid="lgq6:o2">
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
        data-oid=".kt8kj1"
      />

      <div className="grid gap-10" data-oid="dt26-te">
        <CardSkeleton data-oid="3wbg4_r" />
      </div>
    </DashboardShell>
  );
}
