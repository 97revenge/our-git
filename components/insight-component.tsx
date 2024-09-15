import { Award, Info, TrendingUp, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const InsightComponent = () => {
  return (
    <>
      <TooltipProvider>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Best Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InsightCard
              icon={<Zap className="w-6 h-6 text-purple-500" />}
              title="Rapid Growth"
              description="Gained Gold Tier status in just 3 years, showcasing exceptional progress and contribution."
              color="bg-purple-100 dark:bg-purple-900"
              tooltipContent="Gold Tier status is typically achieved through consistent, high-quality contributions and community engagement."
            />
            <InsightCard
              icon={<TrendingUp className="w-6 h-6 text-pink-500" />}
              title="Community Impact"
              description="High follower count of 1,234 indicates strong influence in the developer community."
              color="bg-pink-100 dark:bg-pink-900"
              tooltipContent="Followers often indicate the reach and impact of a developer's work and ideas within the GitHub ecosystem."
            />
            <InsightCard
              icon={<Award className="w-6 h-6 text-blue-500" />}
              title="Creative Coder"
              description="Unique blend of art and code, potentially pioneering new approaches in creative coding."
              color="bg-blue-100 dark:bg-blue-900"
              tooltipContent="Creative coding often involves using programming to create visual art, interactive experiences, or innovative user interfaces."
            />
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

function InsightCard({
  icon,
  title,
  description,
  color,
  tooltipContent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  tooltipContent: string;
}) {
  return (
    <div className={`${color} p-4 rounded-lg shadow-md`}>
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="ml-2 text-muted-foreground hover:text-foreground">
              <span className="sr-only">
                Additional information for {title}
              </span>
              <Info className="w-4 h-4" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
