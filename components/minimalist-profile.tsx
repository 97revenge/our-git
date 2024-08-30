import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CalendarDays,
  GitFork,
  Star,
  Users,
  MapPin,
  Briefcase,
  Globe,
  Twitter,
  Zap,
  TrendingUp,
  Award,
  BookOpen,
  Code,
  Share2,
  Info,
} from "lucide-react";
import { z } from "zod";
import { ChartComponent } from "./Chats/ChartComponent";
import { NoteComponent } from "./Chats/NoteComponent";
import { StatisticCard } from "./statistic-card";

const userSchema = z
  .object({
    login: z.string(),
    id: z.number(),
    node_id: z.string(),
    avatar_url: z.string().url(),
    tier_id: z.string(),
    url: z.string().url(),
    html_url: z.string().url(),
    followers_url: z.string().url(),
    following_url: z.string(),
    gists_url: z.string(),
    starred_url: z.string(),
    subscriptions_url: z.string().url(),
    organizations_url: z.string().url(),
    repos_url: z.string().url(),
    events_url: z.string(),
    received_events_url: z.string().url(),
    type: z.literal("User"),
    site_admin: z.boolean(),
    name: z.string().nullable(),
    company: z.string().nullable(),
    blog: z.string(),
    location: z.string(),
    email: z.string().email().nullable(),
    hireable: z.boolean().nullable(),
    bio: z.string().nullable(),
    twitter_username: z.string().nullable(),
    public_repos: z.number(),
    public_gists: z.number(),
    followers: z.number(),
    following: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    review: z.string().optional(),
    titleGen: z.string().optional(),
  })
  .optional();

type User = z.infer<typeof userSchema>;

const mockUser: Partial<User | any> = {
  login: "github-artist",
  name: "GitHub Artist",
  avatar_url: "/placeholder.svg?height=128&width=128",
  bio: "Turning code into art, one commit at a time.",
  followers: 1234,
  following: 567,
  public_repos: 89,
  public_gists: 21,
  location: "Digital Canvas",
  company: "@ArtfulCode",
  blog: "https://github-artist.com",
  twitter_username: "github_artist",
  created_at: "2020-01-01T00:00:00Z",
  tier_id: "gold",
};

export const MinimalistProfile = ({ ...props }) => {
  return (
    <>
      <TooltipProvider>
        <div className="transition-all w-full h-full flex items-center  flex-col justify-center pb-4   ">
          <div className="w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2  ">
            <NoteComponent />
            <ChartComponent />
          </div>
          <Card className="w-full max-w-3xl shadow-md hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-2">
                  AI-Generated Summary
                </h2>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>
                    GitHub Artist is a prolific developer with a unique approach
                    to coding, viewing it as a form of artistic expression. With
                    89 public repositories and 21 gists, they demonstrate a
                    commitment to open-source contribution and knowledge
                    sharing.
                  </p>
                  <p>
                    Their substantial following of 1,234 users suggests a
                    significant impact on the developer community, while they
                    maintain a curated list of 567 accounts they follow, likely
                    for inspiration and collaboration.
                  </p>
                  <p>
                    Active since 2020, GitHub Artist has quickly risen to Gold
                    Tier status, indicating consistent and valuable
                    contributions to the platform. Their presence extends beyond
                    GitHub, with active engagement on Twitter and a personal
                    blog, fostering a multi-platform developer community.
                  </p>
                  <p>
                    Based in the metaphorical Digital Canvas and associated with
                    @ArtfulCode, GitHub Artist appears to be at the intersection
                    of technology and creativity, potentially working on
                    projects that blend artistic vision with coding expertise.
                  </p>
                </div>
              </div>
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
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">
                  Areas for Improvement
                </h2>
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
            </CardContent>
          </Card>
          <div className="p-6 w-auto">
            <StatisticCard />
          </div>
        </div>
      </TooltipProvider>
    </>
  );
};

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: number | string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {icon}
      <h2 className="text-sm font-semibold mt-2">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
}

function InfoChip({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string | null;
}) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {icon}
      <span>{value}</span>
    </div>
  );
}

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
