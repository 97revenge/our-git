"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Twitter } from "lucide-react";

export const DashboardChunk = () => {
  const [followers, setFollowers] = useState([
    {
      id: 1,
      name: "Olivia Martin",
      username: "@olivia_martin",
      isFollowing: false,
    },
    { id: 2, name: "Jackson Lee", username: "@jacksonl33", isFollowing: true },
    {
      id: 3,
      name: "Isabella Nguyen",
      username: "@bella_nguyen",
      isFollowing: false,
    },
    { id: 4, name: "William Kim", username: "@will_kim", isFollowing: false },
    { id: 5, name: "Sofia Davis", username: "@sofiadavis", isFollowing: true },
  ]);

  const toggleFollow = (id: number) => {
    setFollowers(
      followers.map((follower) =>
        follower.id === id
          ? { ...follower, isFollowing: !follower.isFollowing }
          : follower
      )
    );
  };

  return (
    <Card className="w-full max-w-md rounded-xl dark:bg-gray-800">
      <CardHeader className="space-y-1.5">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
          <Users className="h-5 w-5 sm:h-6 sm:w-6" />
          Who to Follow
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {followers.map((follower) => (
          <div
            key={follower.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-lg bg-muted/50 dark:bg-gray-700/50 p-3 transition-colors hover:bg-muted/80 dark:hover:bg-gray-700/80"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={`/placeholder.svg?height=40&width=40`}
                alt={follower.name}
              />
              <AvatarFallback>
                {follower.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1 flex-1 min-w-0">
              <p className="text-sm font-medium leading-none truncate">
                {follower.name}
              </p>
              <div className="flex items-center gap-2">
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground truncate">
                  {follower.username}
                </p>
              </div>
            </div>
            <Button
              variant={follower.isFollowing ? "secondary" : "default"}
              size="sm"
              className="w-full sm:w-auto mt-2 sm:mt-0"
              onClick={() => toggleFollow(follower.id)}
            >
              {follower.isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
