import { BookOpen, Code, Info, Share2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

export const ImprovmentComponent = () => {
  return (
    <>
      <TooltipProvider>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Areas for Improvement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImprovementCard
              icon={<BookOpen className="w-6 h-6 text-emerald-500" />}
              title="Documentation"
              description="Enhance README files and project documentation to make repositories more accessible to contributors."
              color="bg-emerald-100 dark:bg-emerald-900"
              tooltipContent="Well-documented projects attract more contributors and users, increasing the project's overall impact and sustainability."
            />
            <ImprovementCard
              icon={<Code className="w-6 h-6 text-amber-500" />}
              title="Code Quality"
              description="Implement more rigorous testing and increase overall code coverage across projects."
              color="bg-amber-100 dark:bg-amber-900"
              tooltipContent="Higher code quality and test coverage lead to more stable, maintainable projects and inspire confidence in potential users and contributors."
            />
            <ImprovementCard
              icon={<Share2 className="w-6 h-6 text-rose-500" />}
              title="Collaboration"
              description="Engage in more open-source collaborations to diversify skill set and expand network."
              color="bg-rose-100 dark:bg-rose-900"
              tooltipContent="Collaboration in open-source projects can lead to knowledge sharing, skill improvement, and expanded professional networks."
            />
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

function ImprovementCard({
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
    <TooltipProvider>
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
    </TooltipProvider>
  );
}
