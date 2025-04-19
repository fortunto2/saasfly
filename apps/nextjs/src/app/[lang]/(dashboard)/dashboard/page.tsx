import React from "react";
import { redirect } from "next/navigation";

import { authOptions, getCurrentUser } from "@saasfly/auth";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@saasfly/ui/table";

import { EmptyPlaceholder } from "~/components/empty-placeholder";
import { DashboardHeader } from "~/components/header";
import { K8sCreateButton } from "~/components/k8s/cluster-create-button";
import { ClusterItem } from "~/components/k8s/cluster-item";
import { DashboardShell } from "~/components/shell";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import { trpc } from "~/trpc/server";
import type { ClustersArray } from "~/types/k8s";

export const metadata = {
  title: "Dashboard",
};

// export type ClusterType = RouterOutputs["k8s"]["getClusters"][number];
export default async function DashboardPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  //don't need to check auth here, because we have a global auth check in _app.tsx
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login");
  }
  const customer = await trpc.customer.queryCustomer.query({
    userId: user.id,
  });
  if (!customer) {
    await trpc.customer.insertCustomer.mutate({
      userId: user.id,
    });
  }
  // const accout
  const result: ClustersArray = await trpc.k8s.getClusters.query();
  if (result) {
    const clusters = result;
    const dict = await getDictionary(lang);
    return (
      <DashboardShell data-oid="6xc2_go">
        <DashboardHeader
          heading="kubernetes"
          text={dict.common.dashboard.title_text}
          data-oid="c4w6l95"
        >
          <K8sCreateButton dict={dict.business} data-oid="m5ojcik" />
        </DashboardHeader>
        <div data-oid="2_bzo4b">
          {clusters.length ? (
            <div
              className="divide-y divide-border rounded-md border"
              data-oid="3z6x6fo"
            >
              <div
                className="flex items-center justify-between p-4"
                data-oid="9z-yxfn"
              >
                <Table className="divide-y divide-gray-200" data-oid="9qym_i.">
                  <TableCaption data-oid="v1ks:w2">
                    A list of your k8s cluster .
                  </TableCaption>
                  <TableHeader data-oid="c:62.ws">
                    <TableRow className="hover:bg-gray-50" data-oid="oc_:mwm">
                      <TableHead className="w-[100px]" data-oid="eeavpjr">
                        Name
                      </TableHead>
                      <TableHead data-oid="7b_ap.x">Location</TableHead>
                      <TableHead data-oid="-o.rgak">UpdatedAt</TableHead>
                      <TableHead data-oid="9t4k20_">Plan</TableHead>
                      <TableHead data-oid=".oh_smo">Status</TableHead>
                      <TableHead data-oid="zsee6.t">ACTION</TableHead>
                    </TableRow>
                  </TableHeader>
                  {clusters.map((cluster) => (
                    <ClusterItem
                      key={String(cluster.id)}
                      cluster={cluster}
                      data-oid="d1f_f09"
                    ></ClusterItem>
                  ))}
                </Table>
              </div>
            </div>
          ) : (
            <EmptyPlaceholder data-oid="g.aiqsk">
              {/*<EmptyPlaceholder.Icon />*/}
              <EmptyPlaceholder.Title data-oid=":dnw27:">
                {dict.business.k8s.no_cluster_title}
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description data-oid="u.eglxr">
                {dict.business.k8s.no_cluster_content}
              </EmptyPlaceholder.Description>
              <K8sCreateButton
                variant="outline"
                dict={dict.business}
                data-oid="oxpnkq9"
              />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    );
  }
}
