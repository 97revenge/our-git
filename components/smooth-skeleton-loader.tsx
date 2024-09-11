"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const SmoothSkeletonLoader = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes smoothPulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.6;
          }
        }
        .custom-skeleton {
          animation: smoothPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          background-color: #e2e8f0;
        }
      `}</style>
      <div className="w-full min-w-7xl transition-all transition-all flex items-center space-x-2 bg-gray-100 rounded-full p-2 transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-400">
        <div className="flex items-center w-full max-w-md p-2 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          <Skeleton className="flex-grow h-10 rounded-l-full custom-skeleton transition-all transition-all hover:shadow-xl flex-grow bg-transparent outline-none text-primary placeholder-gray-500 px-4 py-2 rounded-full" />
          <Skeleton className="w-24 h-10 ml-2 rounded-full custom-skeleton transition-all   text-white rounded-full px-6 py-2 bg-primary hover:bg-secondary duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          <Skeleton className="w-8 h-8 ml-2 rounded-full custom-skeleton transition-all transition-all  text-white rounded-full px-6 py-2 hover:bg-primary/20 duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/20" />
        </div>
      </div>
    </>
  );
};
