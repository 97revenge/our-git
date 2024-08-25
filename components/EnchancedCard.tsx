"use client";

import { useState } from "react";
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

const user = {
  login: "johndoe",
  id: 12345,
  avatar_url: "/placeholder.svg?height=100&width=100",
  name: "John Doe",
  company: "Tech Corp",
  blog: "https://johndoe.com",
  location: "San Francisco, CA",
  email: "john@example.com",
  hireable: true,
  bio: "Passionate developer and open source contributor",
  twitter_username: "johndoe",
  public_repos: 50,
  public_gists: 20,
  followers: 1000,
  following: 500,
  created_at: "2015-05-10T00:00:00Z",
  updated_at: "2023-06-15T00:00:00Z",
};

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

export const EnchancedCard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const maxStat = Math.max(
    user.public_repos,
    user.public_gists,
    user.followers,
    user.following
  );

  return (
    <Card className="w-full max-w-xl overflow-hidden">
      <div className="bg-gradient-to-br from-purple-400 to-indigo-600 opacity-10 animate-pulse"></div>
      <CardHeader className="relative flex flex-row items-center space-y-0 pb-2">
        <Avatar className="h-24 w-24 ring-4 ring-white">
          <AvatarImage src={user.avatar_url} alt={user.name} />
          <AvatarFallback>
            {user.login.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
          <CardDescription className="text-lg">@{user.login}</CardDescription>
        </div>
        <Button className="ml-auto" variant="outline">
          Follow
        </Button>
      </CardHeader>
      <CardContent className="relative">
        <div className="mb-4 flex flex-wrap gap-2">
          {user.company && (
            <Badge
              variant="secondary"
              className="transition-all hover:scale-105"
            >
              <BriefcaseIcon className="mr-1 h-3 w-3" />
              {user.company}
            </Badge>
          )}
          {user.location && (
            <Badge
              variant="secondary"
              className="transition-all hover:scale-105"
            >
              <MapPinIcon className="mr-1 h-3 w-3" />
              {user.location}
            </Badge>
          )}
          {user.email && (
            <Badge
              variant="secondary"
              className="transition-all hover:scale-105"
            >
              <MailIcon className="mr-1 h-3 w-3" />
              {user.email}
            </Badge>
          )}
          {user.blog && (
            <Badge
              variant="secondary"
              className="transition-all hover:scale-105"
            >
              <GlobeIcon className="mr-1 h-3 w-3" />
              {user.blog}
            </Badge>
          )}
          {user.twitter_username && (
            <Badge
              variant="secondary"
              className="transition-all hover:scale-105"
            >
              <TwitterIcon className="mr-1 h-3 w-3" />@{user.twitter_username}
            </Badge>
          )}
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{user.bio}</p>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="repositories">Repositories</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="py-4">
            <div className="transition-all grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Stats</h3>
                <div className="space-y-2">
                  {Object.entries({
                    "Public Repos": user.public_repos,
                    "Public Gists": user.public_gists,
                    Followers: user.followers,
                    Following: user.following,
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
                        {value}
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
                    { date: new Date(user.created_at), label: "Joined" },
                    { date: new Date(user.updated_at), label: "Last Update" },
                  ].map((event, index) => {
                    const x = index * 250 + 25;
                    return (
                      <g key={event.label}>
                        <circle cx={x} cy="50" r="5" fill="#4f46e5" />
                        <text x={x} y="70" textAnchor="middle" fontSize="12">
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
                John Doe is an active and engaged developer with a strong
                presence in the open-source community. With {user.public_repos}{" "}
                public repositories and {user.followers} followers, theyve
                clearly made a significant impact. Their consistent activity
                since joining in {new Date(user.created_at).getFullYear()} shows
                dedication to their craft.
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
  );
};
