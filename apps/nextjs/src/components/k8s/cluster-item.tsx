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
    <TableBody className="divide-y divide-gray-100" data-oid="0y9fm:7">
      <TableRow key={String(cluster.id)} data-oid="2tfdjzz">
        <TableCell className="font-medium" data-oid="rfw3s55">
          <Link
            href={`/editor/cluster/${String(cluster.id)}`}
            className="font-semibold hover:underline"
            data-oid="ac0ng2m"
          >
            {cluster.name}
          </Link>
        </TableCell>
        <TableCell className="text-left" data-oid="cuizwju">
          {cluster.location}
        </TableCell>
        <TableCell className="text-left" data-oid="8ic.9i5">
          {formatDate(cluster.updatedAt?.toDateString())}
        </TableCell>
        <TableCell className="text-left" data-oid="3g9a1s_">
          {cluster.plan}
        </TableCell>
        <TableCell className="text-left" data-oid="dnuq1yv">
          RUNNING
        </TableCell>
        <TableCell className="text-right" data-oid="tqrabvi">
          {/*<k post={{ id: cluster.id, name: cluster.name }} />*/}
          <ClusterOperations
            cluster={{ id: cluster.id, name: cluster.name }}
            data-oid="m7_i2b2"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
