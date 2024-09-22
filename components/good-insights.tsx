"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Lightbulb } from "lucide-react";

// const insights = [
//   {
//     title: "JavaScript Dominates",
//     description:
//       "PHP dominates, JavaScript and TypeScript rise, niche languages struggle.",
//     icon: Code2,
//     color: "from-yellow-400 to-orange-500",
//   },
//   {
//     title: "Logic Variety",
//     description:
//       "JavaScript and TypeScript dominate, highlighting logic for web development.",
//     icon: Brain,
//     color: "from-blue-400 to-indigo-500",
//   },
//   {
//     title: "Diverse Skills",
//     description:
//       "JavaScript and TypeScript dominate, niche skills have value, constant learning is key.",
//     icon: Lightbulb,
//     color: "from-green-400 to-emerald-500",
//   },
// ];

export function GoodInsights({ tag }: { tag: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Good Insights
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        Based on your user profile
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {tag.map(
          (
            insight: {
              color: "#26c485" | "#ecffb0" | "6d98ba";
              title: string;
              content: string;
            },
            index
          ) => (
            <motion.div
              key={index}
              className="relative bg-gray-50 rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-300 border border-gray-200 flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${insight?.color} rounded-t-xl`}
              />
              <div className="flex items-center mb-4">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${insight?.color}`}
                ></div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ml-3">
                  {insight?.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {insight?.content}
              </p>
              {hoveredIndex === index && (
                <motion.div
                  className="mt-4 text-sm font-medium text-gray-500 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="mr-2">Learn more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
