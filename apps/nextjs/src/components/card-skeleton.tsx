import { Card, CardContent, CardFooter, CardHeader } from "@saasfly/ui/card";
import { Skeleton } from "@saasfly/ui/skeleton";

export function CardSkeleton() {
  return (
    <Card data-oid="r8vtx8v">
      <CardHeader className="gap-2" data-oid="kl.vgz_">
        <Skeleton className="h-5 w-1/5" data-oid="ka_-8e-" />
        <Skeleton className="h-4 w-4/5" data-oid="hvgd:a3" />
      </CardHeader>
      <CardContent className="h-10" data-oid="zpo8:zz" />
      <CardFooter data-oid="-386z-f">
        <Skeleton className="h-8 w-[120px]" data-oid=".j7fwm." />
      </CardFooter>
    </Card>
  );
}
