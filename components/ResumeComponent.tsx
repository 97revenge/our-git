import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { TooltipProvider } from "@/components/ui/tooltip";
import Markdown from "react-markdown";

export const ResumeComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <TooltipProvider>
        <div className="transition-all w-full h-full flex items-center  flex-col justify-center pb-4   ">
          <Card className="w-full max-w-3xl shadow-md hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2">
                  AI-Generated Summary
                </h2>
                <div className="text-sm text-muted-foreground space-y-2">
                  {children}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TooltipProvider>
    </>
  );
};
