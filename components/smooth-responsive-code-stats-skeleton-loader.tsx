"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const SmoothResponsiveCodeStatsSkeletonLoader = () => {
  return (
    <Card className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      <CardContent className="p-4 sm:p-6 md:p-8">
        <Skeleton className="h-6 sm:h-7 md:h-8 w-32 sm:w-40 md:w-48 mb-2 sm:mb-3 animate-pulse" />
        <Skeleton className="h-4 sm:h-5 w-40 sm:w-48 md:w-56 mb-6 sm:mb-8 animate-pulse" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-5 sm:h-6 w-20 sm:w-24 animate-pulse" />
              <Skeleton className="h-6 sm:h-7 md:h-8 w-24 sm:w-28 rounded-full animate-pulse" />
            </div>
          ))}
        </div>

        <Skeleton className="h-4 sm:h-5 w-full mt-6 sm:mt-8 animate-pulse" />
      </CardContent>
      <CardFooter className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
        <Skeleton className="h-4 sm:h-5 w-full sm:w-64 md:w-80 animate-pulse" />
      </CardFooter>
    </Card>
  );
};
