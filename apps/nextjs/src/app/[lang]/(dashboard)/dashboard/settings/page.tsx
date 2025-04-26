import { redirect } from "next/navigation";

import { authOptions, getCurrentUser } from "@saasfly/auth";

import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";
import { UserNameForm } from "~/components/user-name-form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login");
  }
  return (
    <DashboardShell data-oid="u_hhjmx">
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
        data-oid="z7eqbgo"
      />

      <div className="grid gap-10" data-oid="_cx8ayw">
        <UserNameForm
          user={{ id: user.id, name: user.name ?? "" }}
          data-oid="vk-b.1e"
        />
      </div>
    </DashboardShell>
  );
}
