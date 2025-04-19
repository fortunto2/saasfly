import { Card, CardContent, CardFooter, CardHeader } from "@saasfly/ui/card";
import { Skeleton } from "@saasfly/ui/skeleton";

export function CardSkeleton() {
  return (
    <Card data-oid="v0cddfh">
      <CardHeader className="gap-2" data-oid="qnawnqv">
        <Skeleton className="h-5 w-1/5" data-oid="dggaem0" />
        <Skeleton className="h-4 w-4/5" data-oid="duqt-ow" />
      </CardHeader>
      <CardContent className="h-10" data-oid="6jbq2ko" />
      <CardFooter data-oid="zrj2_7e">
        <Skeleton className="h-8 w-[120px]" data-oid="m9d0ok3" />
      </CardFooter>
    </Card>
  );
}
