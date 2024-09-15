"use client";

import { useEffect, useState } from "react";

export function AiSummarySkeleton() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-white dark:bg-secondary rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        <div
          className={`h-12 w-3/4 mb-4 bg-gradient-to-r from-purple-200 via-purple-200 to-gray-300/50 bg-opacity-50  rounded ${
            animate ? "animate-shimmer" : ""
          }`}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-wave"></div>
        </div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`h-8 ${
              i % 3 === 0 ? "w-full" : i % 3 === 1 ? "w-11/12" : "w-4/5"
            } mb-2 bg-gradient-to-r from-purple-200 via-purple-200 to-gray-300/50 bg-opacity-50 rounded ${
              animate ? "animate-shimmer" : ""
            }`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div
              className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-wave"
              style={{ animationDelay: `${i * 50}ms` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
