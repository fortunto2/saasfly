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
      <DashboardShell data-oid="ezzalqi">
        <DashboardHeader
          heading="kubernetes"
          text={dict.common.dashboard.title_text}
          data-oid="xwncw2x"
        >
          <K8sCreateButton dict={dict.business} data-oid="vi4kuai" />
        </DashboardHeader>
        <div data-oid="_4evqtv">
          {clusters.length ? (
            <div
              className="divide-y divide-border rounded-md border"
              data-oid="w2zd6a5"
            >
              <div
                className="flex items-center justify-between p-4"
                data-oid="17wmh70"
              >
                <Table className="divide-y divide-gray-200" data-oid="2wfx3i.">
                  <TableCaption data-oid="whx6r2n">
                    A list of your k8s cluster .
                  </TableCaption>
                  <TableHeader data-oid="72n2gz8">
                    <TableRow className="hover:bg-gray-50" data-oid="orpc6n8">
                      <TableHead className="w-[100px]" data-oid="mhf76qp">
                        Name
                      </TableHead>
                      <TableHead data-oid="gkgwzc2">Location</TableHead>
                      <TableHead data-oid="irebc.t">UpdatedAt</TableHead>
                      <TableHead data-oid="5d-z.a0">Plan</TableHead>
                      <TableHead data-oid="wbys:s0">Status</TableHead>
                      <TableHead data-oid="th98g5_">ACTION</TableHead>
                    </TableRow>
                  </TableHeader>
                  {clusters.map((cluster) => (
                    <ClusterItem
                      key={String(cluster.id)}
                      cluster={cluster}
                      data-oid="nwwhk9d"
                    ></ClusterItem>
                  ))}
                </Table>
              </div>
            </div>
          ) : (
            <EmptyPlaceholder data-oid="8xg-moq">
              {/*<EmptyPlaceholder.Icon />*/}
              <EmptyPlaceholder.Title data-oid="el7:_b.">
                {dict.business.k8s.no_cluster_title}
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description data-oid="sugk28h">
                {dict.business.k8s.no_cluster_content}
              </EmptyPlaceholder.Description>
              <K8sCreateButton
                variant="outline"
                dict={dict.business}
                data-oid="znwchhb"
              />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    );
  }
}
