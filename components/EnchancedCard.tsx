"use client";

import z from "zod";

import { useSearchParams } from "next/navigation";

import { useEffect, useState, useTransition } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  GithubIcon,
  TwitterIcon,
  GlobeIcon,
  MapPinIcon,
  MailIcon,
  BriefcaseIcon,
  StarIcon,
} from "lucide-react";
import { mock } from "@/actions/mock";
import { userSchema } from "@/lib/zod/user";
import { RoundedChard } from "./rounded-chart";
import SparklesText from "./magicui/sparkles-text";
import NumberTicker from "./magicui/number-ticker";
import { GitHubProfileExtended } from "./GitHubProfileExtended";
import { FadeUp } from "./motion-variants/fade-up";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          className={`h-5 w-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill={star <= rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
};

export const EnchancedCard = ({
  username,

  review,
}: {
  username: string;
  review: string;
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const [dev, setDev] = useState<z.infer<typeof userSchema>>(undefined);

  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setDev(data);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.cause);
        }
      }
    });
  }, []);

  const maxStat = Math.max(
    dev?.public_repos || 0,
    dev?.public_gists || 0,
    dev?.followers || 0,
    dev?.following || 5 || 0
  );

  if (isPending) {
    return (
      <>
        <div className="w-screen h-auto flex items-center justify-center">
          loading...
        </div>
      </>
    );
  }

  return (
    <>
      <FadeUp stagger={0.5}>
        <Card className="w-full max-w-xl overflow-hidden">
          <div className="bg-gradient-to-br from-purple-400 to-indigo-600 opacity-10 animate-pulse"></div>
          <CardHeader className="relative flex flex-row items-center space-y-0 pb-2">
            <Avatar className="h-24 w-24 ring-4 ring-white">
              <AvatarImage src={dev?.avatar_url} alt={`${dev?.name}`} />
              <AvatarFallback>❔</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <CardTitle className="text-3xl font-bold">{dev?.name}</CardTitle>
              <CardDescription className="text-lg">
                @{dev?.login}
              </CardDescription>
            </div>
            <Button className="ml-auto" variant="outline">
              Follow
            </Button>
          </CardHeader>
          <CardContent className="relative">
            <div className="mb-4 flex flex-wrap gap-2">
              {dev?.company && (
                <Badge
                  variant="secondary"
                  className="transition-all hover:scale-105"
                >
                  <BriefcaseIcon className="mr-1 h-3 w-3" />
                  {dev?.company}
                </Badge>
              )}
              {dev?.location && (
                <Badge
                  variant="secondary"
                  className="transition-all hover:scale-105"
                >
                  <MapPinIcon className="mr-1 h-3 w-3" />
                  {dev?.location}
                </Badge>
              )}
              {dev?.email && (
                <Badge
                  variant="secondary"
                  className="transition-all hover:scale-105"
                >
                  <MailIcon className="mr-1 h-3 w-3" />
                  {dev?.email}
                </Badge>
              )}
              {dev?.blog && (
                <Badge
                  variant="secondary"
                  className="transition-all hover:scale-105"
                >
                  <GlobeIcon className="mr-1 h-3 w-3" />
                  {dev?.blog}
                </Badge>
              )}
              {dev?.twitter_username && (
                <Badge
                  variant="secondary"
                  className="transition-all hover:scale-105"
                >
                  <TwitterIcon className="mr-1 h-3 w-3" />@
                  {dev?.twitter_username}
                </Badge>
              )}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">{dev?.bio}</p>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="repositories">Repositories</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="review">
                  <SparklesText
                    text="review"
                    className="w-full"
                    colors={{ first: "#2562ea", second: "#e1b2c6" }}
                    sparklesCount={5}
                  />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="py-4">
                <div className="transition-all grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Stats</h3>
                    <div className="space-y-2">
                      {Object.entries({
                        "Public Repos": dev?.public_repos || 0,
                        "Public Gists": dev?.public_gists || 0,
                        Followers: dev?.followers || 0,
                        Following: dev?.following || 0,
                      }).map(([label, value]) => (
                        <div key={label} className="flex items-center">
                          <span className="w-32 text-sm">{label}:</span>
                          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                              style={{ width: `${(value / maxStat) * 100}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm font-semibold">
                            <NumberTicker value={value} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Timeline</h3>
                    <svg className="w-full h-40" viewBox="0 0 300 100">
                      <line
                        x1="0"
                        y1="50"
                        x2="300"
                        y2="50"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />
                      {[
                        {
                          date: new Date(dev?.created_at as any),
                          label: "Joined",
                        },
                        {
                          date: new Date(dev?.updated_at as any),
                          label: "Last Update",
                        },
                      ].map((event, index) => {
                        const x = index * 250 + 25;
                        return (
                          <g key={event.label}>
                            <circle cx={x} cy="50" r="5" fill="#4f46e5" />
                            <text
                              x={x}
                              y="70"
                              textAnchor="middle"
                              fontSize="12"
                            >
                              {event.label}
                            </text>
                            <text
                              x={x}
                              y="85"
                              textAnchor="middle"
                              fontSize="10"
                              fill="#6b7280"
                            >
                              {event.date.toLocaleDateString()}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="repositories">
                Repository content here
              </TabsContent>
              <TabsContent value="projects">Projects content here</TabsContent>
              <TabsContent value="review" className="py-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Profile Review</h3>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">Overall Rating:</span>
                    <StarRating rating={4} />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim earum exercitationem animi reprehenderit molestiae
                    labore doloribus architecto tempora ex, rem autem possimus
                    repellendus quod et dolores ipsa reiciendis unde.
                    Voluptatibus.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Contribution Level
                      </span>
                      <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Profile Completeness
                      </span>
                      <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </FadeUp>
    </>
  );
};
