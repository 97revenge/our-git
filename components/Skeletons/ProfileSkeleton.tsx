import React from "react";

export const ProfileCardSkeleton = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar skeleton */}
            <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse"></div>

            {/* Name skeleton */}
            <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>

            {/* Username skeleton */}
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>

            {/* Bio skeleton */}
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>

            {/* Location skeleton */}
            <div className="flex items-center space-x-2 w-full">
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            </div>

            {/* Followers skeleton */}
            <div className="flex items-center space-x-2 w-full">
              <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
            </div>

            {/* Hireable badge skeleton */}
            <div className="h-6 bg-gray-300 rounded-full w-1/4 animate-pulse"></div>

            {/* Visit button skeleton */}
            <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};
