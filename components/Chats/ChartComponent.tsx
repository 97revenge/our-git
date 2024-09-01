"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React, { useEffect, useState, useTransition } from "react";
import { chart } from "@/actions/chart";
import { ChartSkeleton } from "../Skeletons/ChartSkeleton";
import { Badge } from "../ui/badge";
import { content } from "@/actions/content";

export const chartConfig = {
  lines: {
    label: "Lines of code",
  },
  Typescript: {
    label: "TS",
    color: "hsl(#2e707a)",
  },
  Javascript: {
    label: "JS",
    color: "hsl(#b283c8)",
  },
  CSS: {
    label: "CSS",
    color: "hsl(#b283c8)",
  },
} satisfies ChartConfig;

export const ChartComponent = ({ children }: { children: React.ReactNode }) => {
  const [instance, setInstance] = useState<{ [index: string]: string | any }>(
    []
  );
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const { chartData } = await chart();
      setInstance(chartData);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <ChartSkeleton />
      </>
    );
  }

  return (
    <>
      <div className="transition-all shadow-sm hover:shadow-xl flex flex-col space-y-2  ">
        <div className="transition-all shadow-sm hover:shadow-xl flex-col items-start gap-2 text-sm   rounded-xl"></div>
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart - Active</CardTitle>
            <CardDescription>
              <Badge variant={"default"}>Last updated - June 2024</Badge>{" "}
            </CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>

        <div className="space-y-2 ">
          <div className="transition-all shadow-sm hover:shadow-xl flex-col items-start gap-2 text-sm">
            <Card>
              <CardContent className="transition-all  p-2 gap-2">
                <Badge variant={"default"}>
                  <div className="transition-all  flex  font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="transition-all s h-4 w-4" />
                  </div>
                </Badge>{" "}
                <div className="transition-all  leading-none text-muted-foreground">
                  Showing total visitors for the last 6 months
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
