import { Card, CardContent, CardFooter, CardHeader } from "@saasfly/ui/card";
import { Skeleton } from "@saasfly/ui/skeleton";

export function CardSkeleton() {
  return (
    <Card data-oid="3wjbgha">
      <CardHeader className="gap-2" data-oid="hu:2c_:">
        <Skeleton className="h-5 w-1/5" data-oid="4tvpp1-" />
        <Skeleton className="h-4 w-4/5" data-oid="urxcz0g" />
      </CardHeader>
      <CardContent className="h-10" data-oid="64.x7hj" />
      <CardFooter data-oid="uvngbdk">
        <Skeleton className="h-8 w-[120px]" data-oid="q98294b" />
      </CardFooter>
    </Card>
  );
}
