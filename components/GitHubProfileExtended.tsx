import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data (same as before)
const contributionData = [
  { name: "Sun", contributions: 2 },
  { name: "Mon", contributions: 5 },
  { name: "Tue", contributions: 10 },
  { name: "Wed", contributions: 8 },
  { name: "Thu", contributions: 12 },
  { name: "Fri", contributions: 3 },
  { name: "Sat", contributions: 7 },
];

const languageData = [
  { name: "JavaScript", value: 40 },
  { name: "Python", value: 30 },
  { name: "TypeScript", value: 20 },
  { name: "HTML", value: 10 },
];

const activityData = [
  { date: "2023-07-01", event: "Pushed to main in project-x" },
  { date: "2023-06-30", event: "Opened pull request in project-y" },
  { date: "2023-06-29", event: "Commented on issue #123" },
  { date: "2023-06-28", event: "Merged pull request in project-z" },
  { date: "2023-06-27", event: "Created new repository: awesome-project" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const GitHubProfileExtended = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Card className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
        <CardHeader>
          <CardTitle>Contribution Graph</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={contributionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="contributions" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]">
        <CardHeader>
          <CardTitle>Language Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={languageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {languageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="w-full lg:w-[calc(33.33%-0.67rem)]">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] sm:h-[400px] lg:h-[200px]">
            {activityData.map((activity, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.event}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.date}
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
