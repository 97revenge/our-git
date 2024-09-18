"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function InsightsSkeletonLoader() {
  const shimmer = {
    hidden: { opacity: 0.3 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full max-w-7xl mx-auto ">
      <Card className="bg-white dark:bg-secondary text-white">
        <CardHeader>
          <motion.div
            className="h-8 w-40 bg-gray-500 dark:bg-primary-200 rounded"
            variants={shimmer}
            initial="hidden"
            animate="visible"
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          />
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          {[...Array(3)].map((_, index) => (
            <Card
              key={index}
              className="bg-gray-200 dark:bg-primary-200 flex-1 min-w-[200px]"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <motion.div
                  className="h-6 w-6 bg-gray-400 dark:bg-primary-200 rounded"
                  variants={shimmer}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="h-6 w-24 bg-gray-400 dark:bg-primary-200 rounded"
                  variants={shimmer}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2 + 0.1,
                  }}
                />
                <motion.div
                  className="h-6 w-6 bg-gray-400 dark:bg-primary-200 rounded-full"
                  variants={shimmer}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2 + 0.2,
                  }}
                />
              </CardHeader>
              <CardContent>
                <motion.div
                  className="h-4 w-full bg-gray-400 dark:bg-primary-200 rounded mb-2"
                  variants={shimmer}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2 + 0.3,
                  }}
                />
                <motion.div
                  className="h-4 w-5/6 bg-gray-400 dark:bg-primary-200 rounded"
                  variants={shimmer}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2 + 0.4,
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
