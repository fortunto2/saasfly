import Link from "next/link";

import { TableBody, TableCell, TableRow } from "@saasfly/ui/table";

import { ClusterOperations } from "~/components/k8s/cluster-operation";
import { formatDate } from "~/lib/utils";
import type { Cluster } from "~/types/k8s";

// import { ClusterOperations } from "~/components/k8s/cluster-operation";
// import { formatDate } from "~/lib/utils";

interface ClusterItemProps {
  cluster: Pick<Cluster, "id" | "name" | "location" | "plan" | "updatedAt">;
}

export function ClusterItem({ cluster }: ClusterItemProps) {
  return (
    <TableBody className="divide-y divide-gray-100" data-oid="kms8.ks">
      <TableRow key={String(cluster.id)} data-oid="ysbvy_-">
        <TableCell className="font-medium" data-oid="sip5ilv">
          <Link
            href={`/editor/cluster/${String(cluster.id)}`}
            className="font-semibold hover:underline"
            data-oid="rubem:p"
          >
            {cluster.name}
          </Link>
        </TableCell>
        <TableCell className="text-left" data-oid="8vgi8td">
          {cluster.location}
        </TableCell>
        <TableCell className="text-left" data-oid="c20ksfm">
          {formatDate(cluster.updatedAt?.toDateString())}
        </TableCell>
        <TableCell className="text-left" data-oid="xmx0092">
          {cluster.plan}
        </TableCell>
        <TableCell className="text-left" data-oid="-r3xyww">
          RUNNING
        </TableCell>
        <TableCell className="text-right" data-oid="jbu63bm">
          {/*<k post={{ id: cluster.id, name: cluster.name }} />*/}
          <ClusterOperations
            cluster={{ id: cluster.id, name: cluster.name }}
            data-oid="_t50o.f"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
