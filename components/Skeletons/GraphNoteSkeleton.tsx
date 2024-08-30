import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const GraphNoteSkeleton = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="h-6 w-1/2 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-200 rounded-md animate-pulse" />
        </div>
        <div className="mt-6 flex items-center justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full border-8 border-gray-200 animate-pulse" />
            <div className="absolute inset-4 rounded-full border-8 border-gray-300 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-16 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
