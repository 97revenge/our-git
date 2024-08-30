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
import { useEffect, useState, useTransition } from "react";
import { chart } from "@/actions/chart";
import { ChartSkeleton } from "../Skeletons/ChartSkeleton";
import { Badge } from "../ui/badge";
const chartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const ChartComponent = () => {
  const [instance, setInstance] = useState<Array<any>>([]);
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
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={instance}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="browser"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) =>
                    chartConfig[value as keyof typeof chartConfig]?.label
                  }
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                  dataKey="visitors"
                  strokeWidth={2}
                  radius={8}
                  activeIndex={2}
                  activeBar={({ ...props }) => {
                    return (
                      <Rectangle
                        {...props}
                        fillOpacity={0.8}
                        stroke={props.payload.fill}
                        strokeDasharray={4}
                        strokeDashoffset={4}
                      />
                    );
                  }}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
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
