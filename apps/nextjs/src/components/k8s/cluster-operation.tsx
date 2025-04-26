"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@saasfly/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";
import * as Icons from "@saasfly/ui/icons";
import { toast } from "@saasfly/ui/use-toast";

import { trpc } from "~/trpc/client";
import type { Cluster } from "~/types/k8s";

async function deleteCluster(clusterId: number) {
  // await trpc.k8s.deleteCluster.mutate({ id: clusterId });
  const res = await trpc.k8s.deleteCluster.mutate({ id: clusterId });
  if (!res?.success) {
    toast({
      title: "Something went wrong.",
      description: "Your cluster was not deleted. Please try again.",
      variant: "destructive",
    });
  }

  return true;
}

interface ClusterOperationsProps {
  cluster: Pick<Cluster, "id" | "name">;
}

export function ClusterOperations({ cluster }: ClusterOperationsProps) {
  const router = useRouter();
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false);

  return (
    <>
      <DropdownMenu data-oid="qu3n8j1">
        <DropdownMenuTrigger
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
          data-oid="1:zoamb"
        >
          <Icons.Ellipsis className="h-4 w-4" data-oid="kd9le9r" />
          <span className="sr-only" data-oid="wvy4m8:">
            Open
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" data-oid="md6lbfw">
          <DropdownMenuItem data-oid="8ikqh_q">
            <Link
              href={`/en/editor/cluster/${cluster.id}`}
              className="flex w-full"
              data-oid="88-07xl"
            >
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator data-oid="m-dr--x" />
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-destructive focus:text-destructive"
            onSelect={() => setShowDeleteAlert(true)}
            data-oid="cuk32-d"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog
        open={showDeleteAlert}
        onOpenChange={setShowDeleteAlert}
        data-oid="pyrcryr"
      >
        <AlertDialogContent data-oid="z0lagec">
          <AlertDialogHeader data-oid="fgmcjr2">
            <AlertDialogTitle data-oid="4f3slh.">
              Are you sure you want to delete this cluster?
            </AlertDialogTitle>
            <AlertDialogDescription data-oid=".p1s-.c">
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter data-oid="cvxp7r4">
            <AlertDialogCancel data-oid=":c:8x.i">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async (event) => {
                event.preventDefault();
                setIsDeleteLoading(true);

                const deleted = await deleteCluster(cluster.id);

                if (deleted) {
                  setIsDeleteLoading(false);
                  setShowDeleteAlert(false);
                  router.refresh();
                }
              }}
              className="bg-red-600 focus:ring-red-600"
              data-oid="n8_wbbo"
            >
              {isDeleteLoading ? (
                <Icons.Spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="sqpm5yy"
                />
              ) : (
                <Icons.Trash className="mr-2 h-4 w-4" data-oid="c.5sdvb" />
              )}
              <span data-oid="d:73qc5">Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
