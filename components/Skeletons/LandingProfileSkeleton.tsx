import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const LandingProfileSkeleton = () => {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-secondary">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-3 w-[120px]" />
          </div>
        </div>
        <Skeleton className="mt-4 h-4 w-[250px]" />
        <div className="mt-4 flex space-x-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </CardContent>
    </Card>
  );
};
