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
import { StatisticCard, StatItem } from "./statistic-card";

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

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { FadeUp } from "./motion-variants/fade-up";

export const MinimalistProfile = ({ ...props }) => {
  return (
    <>
      <div className="w-full flex items-center justify-center pb-6  ">
        <FadeUp stagger={0.15}>
          <div className="  w-screen flex items-center justify-center">
            <NeonGradientCard className="w-full max-w-3xl  bg-white dark:bg-[#1e2124] rounded-xl shadow-lg transition-colors duration-200">
              <div
                className="flex flex-col space-y-2 items-center justify-center"
                {...props}
              ></div>
            </NeonGradientCard>
          </div>
        </FadeUp>
      </div>
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
