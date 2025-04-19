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
      <DropdownMenu data-oid="pzofy.5">
        <DropdownMenuTrigger
          className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
          data-oid="pwakh9-"
        >
          <Icons.Ellipsis className="h-4 w-4" data-oid="2h8n52a" />
          <span className="sr-only" data-oid="w0w4hj9">
            Open
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" data-oid="r0z7k-7">
          <DropdownMenuItem data-oid=":j5lxdw">
            <Link
              href={`/en/editor/cluster/${cluster.id}`}
              className="flex w-full"
              data-oid="yyz75gt"
            >
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator data-oid="j5wq:ni" />
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-destructive focus:text-destructive"
            onSelect={() => setShowDeleteAlert(true)}
            data-oid="29:ed5q"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog
        open={showDeleteAlert}
        onOpenChange={setShowDeleteAlert}
        data-oid="ee3u.f."
      >
        <AlertDialogContent data-oid="u3yovyf">
          <AlertDialogHeader data-oid="tc6cwos">
            <AlertDialogTitle data-oid="t7a-95j">
              Are you sure you want to delete this cluster?
            </AlertDialogTitle>
            <AlertDialogDescription data-oid="i5pkvk1">
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter data-oid="f:s.i5j">
            <AlertDialogCancel data-oid="q:w07zw">Cancel</AlertDialogCancel>
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
              data-oid="y9gpww3"
            >
              {isDeleteLoading ? (
                <Icons.Spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  data-oid="4rt2mu_"
                />
              ) : (
                <Icons.Trash className="mr-2 h-4 w-4" data-oid="e1giuzo" />
              )}
              <span data-oid="gve9j1j">Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
