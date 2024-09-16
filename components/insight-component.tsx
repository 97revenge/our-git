import { Award, Info, TrendingUp, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const InsightComponent = ({ ...props }) => {
  return (
    <>
      <TooltipProvider>
        <div className="mt-8">
          <h2 className="text-lx font-semibold mb-4 underline">
            Good Insights
          </h2>
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
