"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Bug, GitMerge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LargerSkeletonLoader } from "@/components/larger-skeleton-loader";

const improvementAreas = [
  {
    title: "Code Quality",
    description:
      "Improve your code quality by focusing on clean code principles and best practices.",
    icon: AlertTriangle,
    color: "text-red-500",
    tags: ["Clean Code", "Refactoring", "Code Review"],
    action: "Enhance",
  },
  {
    title: "Debug Efficiently",
    description:
      "Sharpen your debugging skills to quickly identify and resolve issues in your code.",
    icon: Bug,
    color: "text-orange-500",
    tags: ["Debugging", "Error Handling", "Logging"],
    action: "Master",
  },
  {
    title: "Optimize Workflow",
    description:
      "Streamline your development process and improve collaboration with better Git practices.",
    icon: GitMerge,
    color: "text-pink-500",
    tags: ["Git", "CI/CD", "Workflow Optimization"],
    action: "Streamline",
  },
];

<LargerSkeletonLoader />;

export default function ImprovmentComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Areas for Improvement
      </h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
        Focus on these key areas to enhance your development skills and reduce
        errors
      </p>
      <div className="space-y-4">
        {improvementAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="border-l-4 border-l-gray-300 hover:border-l-gray-400 transition-colors duration-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center space-x-3">
                  <div className={`${area.color}`}>
                    <area.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">
                    {area.title}
                  </CardTitle>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm font-medium"
                  >
                    {area.action}
                  </Button>
                </motion.div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
