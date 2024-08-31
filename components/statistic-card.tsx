import { useState } from "react";
import { ArrowRightIcon, Moon, Sun, SkipBackIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerButton from "./magicui/shimmer-button";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

export const StatisticCard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <NeonGradientCard className="w-full max-w-3xl  bg-white dark:bg-[#1e2124] rounded-xl shadow-lg transition-colors duration-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatItem value="1,282+" description="creators using Typeframes" />
          <StatItem
            value="600%"
            description="increase in video engagement with AI suggestions"
          />
          <StatItem
            value="15,679+"
            description="videos made in an average of 8 minutes"
          />
          <div>
            {" "}
            <div className="flex flex-col items-center w-auto h-auto rounded-xl bg-gray-900/10 p-4">
              <img
                src={
                  "https://media.istockphoto.com/id/1316604492/pt/foto/profile-portrait-of-middle-aged-man-over-grey-background.jpg?s=612x612&w=0&k=20&c=FJ94x6MNblaaL4BoKfGa29ImEmupxN8n5WZksOiVYCQ="
                }
                alt="GitHub User Avatar"
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-24 lg:h-24 rounded-full  object-cover"
              />

              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full hover:shadow-md transition-shadow duration-300">
                @bapeontista
              </span>
            </div>
          </div>
        </div>
      </NeonGradientCard>
    </>
  );
};

export const StatItem = ({
  value,
  description,
}: {
  value: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 border-r border-gray-200 dark:border-gray-700 last:border-r-0">
      <span className="text-4xl font-bold white:text-black dark:white mb-2">
        {value}
      </span>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};
