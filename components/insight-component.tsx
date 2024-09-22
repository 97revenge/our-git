import { Award, Info, TrendingUp, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";

export const InsightComponent = ({ ...props }) => {
  return (
    <>
      <TooltipProvider>
        <div className=" p-8 bg-white dark:bg-secondary rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-green">
            Good Insights
          </h2>
          <Badge>Based by your user</Badge>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            {...props}
          ></div>
        </div>
      </TooltipProvider>
    </>
  );
};

export const InsightCard = ({
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
}) => {
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
};
