import { Card, CardContent, CardFooter, CardHeader } from "@saasfly/ui/card";
import { Skeleton } from "@saasfly/ui/skeleton";

export function CardSkeleton() {
  return (
    <Card data-oid="6secx_h">
      <CardHeader className="gap-2" data-oid="2r516r0">
        <Skeleton className="h-5 w-1/5" data-oid="pfpde12" />
        <Skeleton className="h-4 w-4/5" data-oid="huz4o.f" />
      </CardHeader>
      <CardContent className="h-10" data-oid="4:ihlsk" />
      <CardFooter data-oid="3mhoaoa">
        <Skeleton className="h-8 w-[120px]" data-oid="q_qw9zu" />
      </CardFooter>
    </Card>
  );
}
