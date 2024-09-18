"use client";

import { motion } from "framer-motion";

export function SkeletonLinesOfCode() {
  return (
    <div className="flex justify-center items-center p-2">
      <motion.div
        className="bg-white dark:bg-secondary rounded-lg shadow-md p-6 w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded-md w-1/3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded-md w-1/4 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="h-4 bg-gray-200 rounded-md w-1/3 animate-pulse" />
                <div className="h-6 bg-green-200 rounded-full w-16 animate-pulse" />
              </div>
            ))}
          </div>
          <div className="space-y-2 pt-4">
            <div className="h-4 bg-gray-200 rounded-md w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded-md w-1/2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
