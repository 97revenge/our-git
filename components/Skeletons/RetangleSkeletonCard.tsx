import { Card } from "@/components/ui/card";
export const RetangleSkeletonCard = () => {
  return (
    <Card className="w-full max-w-[calc(100vw-2rem)] sm:max-w-4xl bg-white p-4 sm:p-6 rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="w-full sm:w-auto sm:flex-1 pb-4 sm:pb-0 sm:pr-4 border-b sm:border-b-0 sm:border-r border-gray-200">
          <div className="h-8 sm:h-10 bg-gray-200 rounded-md w-24 sm:w-28 mb-2 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-32 sm:w-40 animate-pulse"></div>
        </div>
        <div className="w-full sm:w-auto sm:flex-1 pb-4 sm:pb-0 px-0 sm:px-4 border-b sm:border-b-0 sm:border-r border-gray-200">
          <div className="h-8 sm:h-10 bg-gray-200 rounded-md w-20 sm:w-24 mb-2 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-40 sm:w-48 animate-pulse"></div>
        </div>
        <div className="w-full sm:w-auto sm:flex-1 pb-4 sm:pb-0 px-0 sm:px-4 border-b sm:border-b-0 sm:border-r border-gray-200">
          <div className="h-8 sm:h-10 bg-gray-200 rounded-md w-28 sm:w-32 mb-2 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-48 sm:w-56 animate-pulse"></div>
        </div>
        <div className="flex flex-col xs:flex-row sm:flex-col md:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-3 sm:space-x-0 sm:space-y-2 md:space-y-0 md:space-x-3 pt-4 sm:pt-0 sm:pl-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 rounded-md w-24 animate-pulse"></div>
        </div>
      </div>
    </Card>
  );
};
