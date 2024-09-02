"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Badge } from "../ui/badge";
import { GraphNoteSkeleton } from "../Skeletons/GraphNoteSkeleton";
import { useEffect, useState, useTransition } from "react";
import { chart } from "@/actions/chart";
import { content } from "@/actions/content";
import type { InstanceNote } from "@/lib";

const chartConfig = {
  note: {
    label: "Note",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// posso pedir para AI analisar todo o contexto inserido e entregar uma nota de 0 a 1000 coisa do tipo ...
export const NoteComponent = ({ note }: { note: any }) => {
  let chartNoteData = [
    { browser: "safari", note: note, fill: "var(--color-safari)" },
  ];

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const { chartNoteData } = await chart();

      // setInstance(chartNoteData);
    });
  }, []);

  if (isPending) {
    return (
      <>
        <GraphNoteSkeleton />
      </>
    );
  }

  return (
    <>
      <Card className="flex flex-col w-full max-w-2xl ">
        <CardHeader className="items-center pb-0">
          <CardTitle>Radial Chart - Text</CardTitle>
          <CardDescription>
            <Badge variant={"default"}>Based by your user</Badge>{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <RadialBarChart
              data={[
                { browser: "safari", note: note, fill: "var(--color-safari)" },
              ]}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="note" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {[
                              {
                                browser: "safari",
                                note: note,
                                fill: "var(--color-safari)",
                              },
                            ][0].note.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            note
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
      </Card>
    </>
  );
};
