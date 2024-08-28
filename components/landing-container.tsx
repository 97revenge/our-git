"use client";

import { useEffect, useState, useTransition } from "react";
import { streamComponent } from "@/actions/user";
import { ArrowRightIcon, Github, Globe, Twitter } from "lucide-react";
import AnimatedBeam from "./animata/animated-beam";

import z from "zod";
import { userSchema } from "@/lib/zod/user";
import Image from "next/image";
import ShimmerButton from "./magicui/shimmer-button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  EnchancedProfileCard,
  SocialLink,
  ThemeToggle,
} from "./EnchancedProfileCard";
import { ScrollArea } from "./ui/scroll-area";
import { mock } from "@/actions/mock";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { FadeUp } from "./motion-variants/fade-up";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const githubUser = z.object({
  username: z
    .string()
    .min(5, { message: "minumum of words is 5" })
    .max(35, { message: "maximum of words is 35" }),
});

export const LandingContainer = () => {
  const [isPending, startTransition] = useTransition();

  const [component, setComponent] = useState<React.ReactNode>();

  const [view, setView] = useState<boolean>(false);

  const [input, setInput] = useState<any>("");

  const [dev, setDev] = useState<z.infer<typeof userSchema>[]>([]);

  const handler = async (e: any) => {
    e.preventDefault();
    setComponent(await streamComponent(input));
    setView(!view);
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    async function getDevelopers() {
      try {
        const { instance } = await mock();
        setDev(instance);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.cause);
        }
      }
    }
    startTransition(getDevelopers);
  }, []);

  return (
    <>
      {/* Header */}
      {/* Main Content */}

      <AnimatedBeam className="transition-all h-full">
        <FadeUp stagger={0.15}>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          {view === false ? (
            <>
              <main className="transition-all flex-grow flex flex-col items-center justify-start w-full h-full   ">
                <div className="transition-all w-full  ">
                  <div
                    className="transition-all  flex flex-col
                  items-center justify-center w-full "
                  >
                    <h1 className="transition-all bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl   ">
                      Enchance your{" "}
                      <u className="transition-all bg-gradient-to-br dark:from-white from-pink-600 from-30% dark:to-white/40 to-black/40 bg-clip-text">
                        bio
                      </u>
                      <br />
                      With{" "}
                      <u className="transition-all bg-gradient-to-br dark:from-white from-blue-600 from-30% dark:to-white/40 to-black/40 bg-clip-text">
                        AI
                      </u>{" "}
                      and{" "}
                      <u className="transition-all bg-gradient-to-br dark:from-white from-gray-600 from-30% dark:to-white/40 to-black/40 bg-clip-text">
                        Github
                      </u>
                    </h1>
                  </div>
                </div>
                <div className="transition-all w-full  mt-2  flex flex-col space-y-2 items-center justify-center p-6">
                  <form
                    onSubmit={handler}
                    className="transition-all space-y-4 w-auto  "
                  >
                    <div className="transition-all flex items-center space-x-2 bg-gray-100 rounded-full p-2 transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-400">
                      <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Drop your github username ..."
                        className="transition-all hover:shadow-xl flex-grow bg-transparent outline-none text-primary placeholder-gray-500 px-4 py-2 rounded-full"
                      />
                      <ShimmerButton
                        type="submit"
                        className="transition-all  text-white rounded-full px-6 py-2 hover:bg-primary duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        Send{" "}
                        <ArrowRightIcon className="transition-all ml-2 h-4 w-4" />
                      </ShimmerButton>

                      <DropdownMenu>
                        <div className="transition-all  text-white rounded-full px-6 py-2 hover:bg-primary/20 duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/20">
                          <DropdownMenuTrigger asChild>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#295dff"
                                d="M17 21.025q-.2 0-.4-.05t-.375-.175l-3-1.75q-.35-.2-.537-.537t-.188-.738V14.25q0-.4.188-.737t.537-.538l3-1.75q.175-.125.375-.175T17 11t.388.063t.362.162l3 1.75q.35.2.55.538t.2.737v3.525q0 .4-.2.738t-.55.537l-3 1.75q-.175.1-.363.163t-.387.062M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.2.45-.337.938T10.1 15H10q-1.775 0-3.187.45t-2.313.9q-.225.125-.363.35T4 17.2v.8h6.3q.15.525.4 1.038t.55.962zm8-10q.825 0 1.413-.587T12 8t-.587-1.412T10 6t-1.412.588T8 8t.588 1.413T10 10m4.65 3.85L17 15.225l2.35-1.375L17 12.5zm3.1 5.2l2.25-1.3V15l-2.25 1.325zM14 17.75l2.25 1.325V16.35L14 15.025z"
                              />
                            </svg>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              Software Developers
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Design Developers
                            </DropdownMenuItem>
                            <DropdownMenuItem>Data Analyst</DropdownMenuItem>
                          </DropdownMenuContent>
                        </div>
                      </DropdownMenu>
                    </div>
                  </form>
                  {/* <p className="transition-all text-sm font-bold drop-shadow-md text-red-800 text-center">
                  lorem ipsum lorem ipsum lorem ipsum
                </p> */}
                </div>

                <div className="transition-all  w-full max-w-3xl p-4 ">
                  <h2 className="transition-all text-lg font-semibold mb-4">
                    Popular Developers
                  </h2>
                  <ScrollArea className="h-[500px] w-full px-auto flex items-center justify-center ">
                    <div className=" transition-all grid grid-cols-1 grid-flow-row sm:grid-cols-2    md:grid-cols-2 w-full  gap-4   ">
                      {dev.map((item, index) => {
                        return (
                          <>
                            <EnchancedProfileCard>
                              <Link href={`/test?user=${item?.login}`}>
                                <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300 max-h-full ">
                                  <div className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <Image
                                        alt="Claire Mac"
                                        src={`${item?.avatar_url}`}
                                        quality={100}
                                        className="w-16 h-16 rounded-full object-cover"
                                        width={16}
                                        height={16}
                                      />
                                      <div>
                                        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                          {item?.name}
                                        </h1>
                                        <Badge
                                          variant={"secondary"}
                                          className="text-sm text-primary dark:text-secondary"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="mr-1 bg-white rounded-full"
                                          >
                                            <path
                                              fill="#cf83a4"
                                              d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20"
                                            />
                                          </svg>{" "}
                                          <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {item?.location}
                                          </p>
                                        </Badge>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                      {item?.bio}
                                    </p>
                                    <div className="flex justify-start space-x-4">
                                      <Badge
                                        className="rounded-full"
                                        variant={"secondary"}
                                      >
                                        <SocialLink
                                          href={`https://twitter.com/${item?.twitter_username}`}
                                          icon={<Twitter size={18} />}
                                          label="Twitter"
                                        />
                                      </Badge>
                                      <Badge
                                        className="rounded-full"
                                        variant={"secondary"}
                                      >
                                        <SocialLink
                                          href={item?.html_url}
                                          icon={<Github size={18} />}
                                          label="GitHub"
                                        />
                                      </Badge>
                                      <Badge
                                        className="rounded-full"
                                        variant={"secondary"}
                                      >
                                        <SocialLink
                                          href={item?.blog}
                                          icon={<Globe size={18} />}
                                          label="Website"
                                        />
                                      </Badge>
                                    </div>
                                  </div>
                                </article>
                              </Link>
                            </EnchancedProfileCard>
                          </>
                        );
                      })}
                    </div>
                  </ScrollArea>
                </div>
              </main>
            </>
          ) : (
            <>
              <div className="w-full h-full ">
                {component ? (
                  component
                ) : (
                  <p className="transition-all text-gray-500 text-center transition-all duration-300 hover:text-gray-700">
                    Your response will appear here
                  </p>
                )}
              </div>
            </>
          )}
        </FadeUp>
      </AnimatedBeam>
    </>
  );
};
