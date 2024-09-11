"use client";
import { useEffect, useState, useTransition } from "react";
import { GraphChart } from "@/lib/index";
import { ArrowRightIcon, Github, Globe, Twitter } from "lucide-react";
import AnimatedBeam from "./animata/animated-beam";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";
import { userSchema } from "@/lib/zod/user";
import Image from "next/image";
import ShimmerButton from "./magicui/shimmer-button";

import { readStreamableValue } from "ai/rsc";

import {
  DropdownMenu,
  DropdownMenuContent,
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
import { MinimalistProfile } from "./minimalist-profile";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { LandingProfileSkeleton } from "./Skeletons/LandingProfileSkeleton";
import MultipleSelector, { Option } from "./multiple-selector";
import { NoteComponent } from "./Chats/NoteComponent";
import { chart } from "@/actions/chart";

import { content } from "@/actions/content";
import { GitHubLanguageChart } from "./language-bar-chart";
import { SmoothSkeletonLoader } from "./smooth-skeleton-loader";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const OPTIONS: Option[] = [
  { label: "Front-End Developer", value: "front" },
  { label: "Back-End Developer", value: "back" },
  { label: "Full Stack Developer", value: "fullstack" },
  { label: "Data Analyst", value: "data" },
  { label: "Designer Developer", value: "designer" },
];

const githubUser = z.object({
  username: z
    .string()
    .min(5, { message: "Minimum of characters is 5" })
    .max(35, { message: "Maximum of characters is 35" })
    .refine(
      async (val) => {
        const response = await fetch(`https://api.github.com/users/${val}`);
        return response.ok && response.status === 200;
      },
      {
        message: "This user does not exist on GitHub",
      }
    ),
  developer: z.array(optionSchema).min(1),
});

export const LandingContainer = () => {
  const [isPending, startTransition] = useTransition();

  const [component, setComponent] = useState<React.ReactNode>();

  const [view, setView] = useState<boolean>(false);

  const [dev, setDev] = useState<z.infer<typeof userSchema>[]>([]);

  const [note, setNote] = useState<any>("");

  const [graphChart, setGraphChart] = useState<GraphChart<string | number>[]>(
    []
  );

  const handler = async (e: z.infer<typeof githubUser>) => {
    try {
      startTransition(async () => {
        const { chartData } = await chart();
        const { treatmentData, treatMentNoteData } = await content(
          e.username,
          e.developer as any
        );
        setGraphChart(treatmentData?.code as any[]);
        let noteContent = "";
        for await (const chunk of readStreamableValue(treatMentNoteData)) {
          noteContent += chunk;
        }
        setNote(noteContent);

        setView(!view);
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(JSON.stringify(err.message));
        alert(JSON.stringify(err.cause));
        setView(false);
      }
    }
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

  const form = useForm<z.infer<typeof githubUser>>({
    resolver: zodResolver(githubUser),
    defaultValues: {
      username: "",
    },
  });

  return (
    <>
      {/* Header */}
      {/* Main Content */}

      <AnimatedBeam className="transition-all transition-all h-full flex items-center justify-center">
        <FadeUp stagger={0.15}>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          {view === false ? (
            <>
              <main className="transition-all transition-all flex-grow flex flex-col items-center justify-start w-full h-full   ">
                <div className="transition-all transition-all w-full  ">
                  <div
                    className="transition-all transition-all  flex flex-col
                  items-center justify-center w-full "
                  >
                    <h1 className="transition-all transition-all bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl   ">
                      Enchance your{" "}
                      <u className="transition-all transition-all bg-gradient-to-br dark:from-white from-pink-600 from-30% dark:to-white/40 to-black/40 bg-clip-text">
                        bio
                      </u>
                      <br />
                      With{" "}
                      <u className="transition-all transition-all bg-gradient-to-br dark:from-white from-blue-600 from-30% dark:to-white/40 to-black/40 bg-clip-text">
                        AI
                      </u>{" "}
                      and{" "}
                      <u className="transition-all transition-all bg-gradient-to-br dark:from-white from-gray-600 from-30% dark:to-white/40 to-black/40 bg-clip-text">
                        Github
                      </u>
                    </h1>
                  </div>
                </div>
                <div className="transition-all transition-all w-full  mt-2  flex flex-col space-y-2 items-center justify-center p-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handler)}
                      className="transition-all transition-all space-y-4 w-auto  "
                    >
                      <FormField
                        control={form.control}
                        name="username"
                        rules={{ required: "Username is required" }}
                        render={({ field }) => {
                          return (
                            <>
                              {isPending ? (
                                <SmoothSkeletonLoader />
                              ) : (
                                <FormItem>
                                  <div className="transition-all transition-all flex items-center space-x-2 bg-gray-100 rounded-full p-2 transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-400">
                                    <FormControl>
                                      <input
                                        {...field}
                                        type="text"
                                        placeholder="Drop your github username ..."
                                        className="transition-all transition-all hover:shadow-xl flex-grow bg-transparent outline-none text-primary placeholder-gray-500 px-4 py-2 rounded-full"
                                        disabled={isPending}
                                      />
                                    </FormControl>
                                    <ShimmerButton
                                      disabled={isPending}
                                      type="submit"
                                      className="transition-all   text-white rounded-full px-6 py-2 bg-primary hover:bg-secondary duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    >
                                      Send
                                      <ArrowRightIcon className="transition-all transition-all ml-2 h-4 w-4" />
                                    </ShimmerButton>
                                    <DropdownMenu>
                                      <div className="transition-all transition-all  text-white rounded-full px-6 py-2 hover:bg-primary/20 duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/20">
                                        <DropdownMenuTrigger asChild>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            className={
                                              form.formState.errors.developer
                                                ? "transition-all animate-pulse"
                                                : "transition-all "
                                            }
                                          >
                                            <path
                                              fill={
                                                form.formState.errors.developer
                                                  ? "#f60002"
                                                  : "#295dff"
                                              }
                                              className="transition-all transition-all"
                                              d="M17 21.025q-.2 0-.4-.05t-.375-.175l-3-1.75q-.35-.2-.537-.537t-.188-.738V14.25q0-.4.188-.737t.537-.538l3-1.75q.175-.125.375-.175T17 11t.388.063t.362.162l3 1.75q.35.2.55.538t.2.737v3.525q0 .4-.2.738t-.55.537l-3 1.75q-.175.1-.363.163t-.387.062M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 8v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.2.45-.337.938T10.1 15H10q-1.775 0-3.187.45t-2.313.9q-.225.125-.363.35T4 17.2v.8h6.3q.15.525.4 1.038t.55.962zm8-10q.825 0 1.413-.587T12 8t-.587-1.412T10 6t-1.412.588T8 8t.588 1.413T10 10m4.65 3.85L17 15.225l2.35-1.375L17 12.5zm3.1 5.2l2.25-1.3V15l-2.25 1.325zM14 17.75l2.25 1.325V16.35L14 15.025z"
                                            />
                                          </svg>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent className="transition-all transition-all w-full  p-2 rounded-xl h-[250px]">
                                          <FormField
                                            control={form.control}
                                            name="developer"
                                            render={({ field }) => (
                                              <div className="transition-all ">
                                                <FormItem className="transition-all  p-2">
                                                  <FormLabel>
                                                    Choose your role
                                                  </FormLabel>
                                                  <FormControl>
                                                    <MultipleSelector
                                                      value={field.value}
                                                      onChange={field.onChange}
                                                      defaultOptions={OPTIONS}
                                                      maxSelected={1}
                                                      onMaxSelected={() =>
                                                        alert(
                                                          "Voçe só pode adicionar um."
                                                        )
                                                      }
                                                      placeholder="Select your role..."
                                                      emptyIndicator={
                                                        <p className="transition-all text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                                          no more results...
                                                        </p>
                                                      }
                                                    />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              </div>
                                            )}
                                          />
                                        </DropdownMenuContent>
                                      </div>
                                    </DropdownMenu>
                                  </div>
                                </FormItem>
                              )}
                            </>
                          );
                        }}
                      />

                      {form.formState.errors.username && (
                        <>
                          <div className="transition-all w-full flex items-center justify-center ">
                            <p className="transition-all  py-2 transition-all text-sm font-bold drop-shadow-md text-red-800 text-center">
                              Your username requires be valid ...
                            </p>
                          </div>
                        </>
                      )}
                    </form>
                  </Form>
                </div>

                <div className="transition-all transition-all  w-full max-w-3xl p-4 ">
                  <h2 className="transition-all transition-all text-lg font-semibold mb-4">
                    Popular Developers
                  </h2>
                  <ScrollArea className="transition-all h-[500px] w-full px-auto flex items-center justify-center ">
                    <div className="transition-all  transition-all grid grid-cols-1 grid-flow-row sm:grid-cols-2    md:grid-cols-2 w-full  gap-4   ">
                      {isPending ? (
                        <>
                          <LandingProfileSkeleton />
                          <LandingProfileSkeleton />
                          <LandingProfileSkeleton />
                          <LandingProfileSkeleton />
                          <LandingProfileSkeleton />
                          <LandingProfileSkeleton />
                        </>
                      ) : (
                        dev.map((item, index) => {
                          return (
                            <>
                              {isPending ? (
                                <>
                                  <LandingProfileSkeleton />
                                </>
                              ) : (
                                <>
                                  <EnchancedProfileCard>
                                    <Link href={`/test?user=${item?.login}`}>
                                      <article className="transition-all bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300 max-h-full ">
                                        <div className="transition-all p-4">
                                          <div className="transition-all flex items-center space-x-2 mb-2">
                                            <Image
                                              alt="Claire Mac"
                                              src={`${item?.avatar_url}`}
                                              quality={100}
                                              className="transition-all w-16  h-16 rounded-full object-full"
                                              width={106}
                                              height={16}
                                            />
                                            <div>
                                              <h1 className="transition-all text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                {item?.login}
                                              </h1>
                                              <Badge
                                                variant={"secondary"}
                                                className="transition-all text-sm text-primary dark:text-secondary"
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="16"
                                                  height="16"
                                                  viewBox="0 0 24 24"
                                                  className="transition-all mr-1 bg-white rounded-full"
                                                >
                                                  <path
                                                    fill="#cf83a4"
                                                    d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20"
                                                  />
                                                </svg>{" "}
                                                {item?.location && (
                                                  <>
                                                    <p className="transition-all text-sm text-gray-600 dark:text-gray-300">
                                                      {item?.location}
                                                    </p>
                                                  </>
                                                )}
                                              </Badge>
                                            </div>
                                          </div>
                                          <p className="transition-all text-sm text-gray-600 dark:text-gray-300 mb-4">
                                            {item?.bio}
                                          </p>
                                          <div className="transition-all flex justify-start space-x-4">
                                            <Badge
                                              className="transition-all rounded-full"
                                              variant={"secondary"}
                                            >
                                              <SocialLink
                                                href={`https://twitter.com/${item?.twitter_username}`}
                                                icon={<Twitter size={18} />}
                                                label="Twitter"
                                              />
                                            </Badge>
                                            <Badge
                                              className="transition-all rounded-full"
                                              variant={"secondary"}
                                            >
                                              <SocialLink
                                                href={item?.html_url}
                                                icon={<Github size={18} />}
                                                label="GitHub"
                                              />
                                            </Badge>
                                            <Badge
                                              className="transition-all rounded-full"
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
                              )}
                            </>
                          );
                        })
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </main>
            </>
          ) : (
            <>
              <MinimalistProfile>
                <NoteComponent value={note} />
                <div className="flex flex-col w-full max-w-2xl">
                  <GitHubLanguageChart
                    content={graphChart as GraphChart<string | number>[]}
                  />
                </div>
              </MinimalistProfile>

              <div className="transition-all w-full flex items-center justify-center relative bottom-4">
                <ShimmerButton
                  type="submit"
                  className="transition-all transition-all  text-white rounded-full px-6 py-2 hover:bg-primary duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  onClick={() => setView(!view)}
                >
                  Generate Another
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                  >
                    <g
                      fill="none"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2.77 8.286A3.5 3.5 0 0 1 5.577 6.88c.818 0 1.57.28 2.166.75" />
                      <path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
                      <path d="M5.576 5.379a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.764 5.184c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.18 3.18 0 0 0-2.558-2.45" />
                    </g>
                  </svg>
                </ShimmerButton>
              </div>
            </>
          )}
        </FadeUp>
      </AnimatedBeam>
    </>
  );
};
