import { userSchema } from "@/lib/zod/user";
import Link from "next/link";
import z from "zod";
import { ArticleReview } from "./article-review";

export const ArticleAI = (props: Partial<z.infer<typeof userSchema>>) => {
  return (
    <>
      <div className="   ">
        <div className="w-full max-w-md bg-white dark:bg-gray-500/10  rounded-lg p-4  duration-300 transition-all shadow-md hover:shadow-xl">
          <div className="flex flex-col items-center mb-4">
            <img
              src={props?.avatar_url}
              alt="GitHub User Avatar"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
            />
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 hover:drop-shadow-xl transition-all duration-300">
                {props?.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                @ {props?.login}
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 mb-4 text-center">
            {props?.bio}
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs sm:text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {props?.location}
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 text-xs sm:text-sm mb-4">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              Followers:
              {props?.followers}
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-2 mb-4">
            {props?.email && (
              <>
                <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full hover:shadow-md transition-shadow duration-300">
                  {props?.email}
                </span>
              </>
            )}
            {props?.twitter_username && (
              <>
                <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full hover:shadow-md transition-shadow duration-300">
                  {props?.twitter_username}
                </span>
              </>
            )}
            {props?.hireable == true ? (
              <>
                <span className="px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full hover:shadow-md transition-shadow duration-300">
                  hireable
                </span>
              </>
            ) : (
              <>
                <span className="px-2 py-1 text-xs font-semibold bg-purple-100 text-red-800 rounded-full hover:shadow-md transition-shadow duration-300">
                  non-rireable
                </span>
              </>
            )}
          </div>
          <div className="flex items-center justify-center w-full ">
            {" "}
            <a
              href={props?.url as string}
              className="w-auto px-4 py-2 bg-blue-500 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
