import { userSchema } from "@/lib/zod/user";
import z from "zod";

export const MinimalistProfile = (props: z.infer<typeof userSchema>) => {
  "use client";
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl text-gray-400">
              ?
            </div>
            <span className="ml-4 text-xl">@ {props?.name}</span>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm">
            Follow
          </button>
        </div>

        <div className="flex mb-6">
          <button className="px-4 py-2 bg-pink-50 text-pink-600 rounded-l-md">
            Overview
          </button>
          {props?.bio}
          <button className="px-4 py-2">Repositories</button>
          <button className="px-4 py-2">Projects</button>
          <button className="px-4 py-2 bg-pink-50 text-pink-600 rounded-r-md">
            review
          </button>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-lg font-semibold mb-4">Stats</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Public Repos: {props?.repos_url}</span>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between">
                <span>Public Gists: {props?.gists_url}</span>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between">
                <span>Followers: {props?.followers}</span>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex justify-between">
                <span>Following: {props?.following}</span>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <h2 className="text-lg font-semibold mb-4">Timeline</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-600">Joined</span>
              </div>
              <span className="text-sm text-gray-400">{props?.created_at}</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="ml-2 text-sm text-gray-600">Last Update</span>
              </div>
              <span className="text-sm text-gray-400">{props?.updated_at}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
