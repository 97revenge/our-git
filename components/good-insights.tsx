"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Insights = Array<{
  icon?: Partial<React.ReactNode>;
  color?: string;
  content: string;
  title: string;
}>;

export default function GoodInsights({ insights }: { insights: Insights }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [instance, setInstance] = useState<Insights>([]);

  useEffect(() => {
    const updatedInsights = insights.map((insight, index) => {
      let color: string, icon: JSX.Element;

      switch (index) {
        case 0:
          color = "from-blue-500 to-blue-700"; // Gradient colors for first insight
          icon = <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />; // Icon for first insight
          break;
        case 1:
          color = "from-green-500 to-green-700"; // Colors for second insight
          icon = <Brain className="w-5 h-5 sm:w-6 sm:h-6" />; // Icon for second insight
          break;
        case 2:
          color = "from-yellow-500 to-yellow-700"; // Colors for third insight
          icon = <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />; // Icon for third insight
          break;
        default:
          color = "from-gray-500 to-gray-700";
          icon = <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      }

      return {
        ...insight,
        color,
        icon,
      };
    });

    setInstance(updatedInsights);
  }, [insights]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Developer Insights
      </h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
        Based on your user profile and recent activity
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {instance.map((insight, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="bg-gray-50 dark:bg-gray-800 border-none hover:shadow-md transition-shadow duration-300 h-full">
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${insight.color} rounded-t-lg`}
              />
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${insight?.color} text-white`}
                >
                  {insight?.icon as React.ReactNode}
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3">
                  {insight.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {/* Additional tags or other content can go here */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
