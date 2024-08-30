import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ChartSkeleton = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          <Skeleton className="h-8 w-3/4" />
        </CardTitle>
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent className="mt-4">
        <div className="flex justify-between items-end space-x-2 h-40">
          <Skeleton className="w-1/5 h-1/2" />
          <Skeleton className="w-1/5 h-2/3" />
          <Skeleton className="w-1/5 h-full" />
          <Skeleton className="w-1/5 h-1/2" />
          <Skeleton className="w-1/5 h-1/4" />
        </div>
        <div className="flex justify-between mt-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
    </Card>
  );
};
