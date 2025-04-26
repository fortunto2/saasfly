import { CardSkeleton } from "~/components/card-skeleton";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell data-oid="atsl4d9">
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
        data-oid="gjm_q-g"
      />

      <div className="grid gap-10" data-oid="7g35n:o">
        <CardSkeleton data-oid="e3g_i5." />
      </div>
    </DashboardShell>
  );
}
