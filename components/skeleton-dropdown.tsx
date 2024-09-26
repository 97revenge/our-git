"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SkeletonDropdown() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const shimmer = {
    hidden: { opacity: 0.3 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
    },
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4 space-y-4">
      <div className="space-y-2">
        <motion.div
          className="h-4 w-24 rounded bg-gray-200"
          variants={shimmer as any}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="h-8 w-full rounded bg-gray-200"
          variants={shimmer as any}
          initial="hidden"
          animate="visible"
        />
      </div>
      <div className="space-y-2">
        <motion.div
          className="h-4 w-32 rounded bg-gray-200"
          variants={shimmer as any}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          className="h-10 w-full rounded bg-gray-200"
          variants={shimmer as any}
          initial="hidden"
          animate="visible"
        />
      </div>
      <motion.div
        className="h-10 w-full rounded bg-purple-200"
        variants={shimmer as any}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
}
