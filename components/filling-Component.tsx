"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import type { GenerateMetadataProps, GraphChart } from "@/lib";
import { githubUser } from "@/lib/zod/githubUser";
import { content } from "@/actions/content";
import { readStreamableValue } from "ai/rsc";
import { NoteComponent } from "./Chats/NoteComponent";
import { SkeletonLinesOfCode } from "./skeleton-loader";
import { GitHubLanguageChart } from "./language-bar-chart";
import { AiSummarySkeleton } from "./ai-summary-skeleton";
import { ResumeComponent } from "./ResumeComponent";
import DeveloperInsightsSkeleton from "./developer-insights-skeleton";
import GoodInsights from "./good-insights";
import ImprovmentComponent from "./improvment-component";
import { StatisticCard } from "./statistic-card";
import ShimmerButton from "./magicui/shimmer-button";
import Markdown from "react-markdown";

export const FillingComponent = ({ params }: { params: string }) => {
  const searchParams = useSearchParams();

  const incharge = searchParams.get("incharge");

  const [note, setNote] = useState<string>("");
  const [resume, setResume] = useState<any>("");
  const [graphChart, setGraphChart] = useState<GraphChart<string | number>[]>(
    []
  );
  const [insights, setInsights] = useState<any[]>([]);

  const [improvment, setImprovment] = useState<any[]>([]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getData = async (
      username: string | null,
      developer: string | null
    ) => {
      if (!username || !developer) return;

      try {
        const {
          treatMentNoteData,
          treatmentData,
          treatmentInsightsData,
          treatmentResumeData,
        } = await content(username, developer as any);

        setGraphChart(treatmentData?.code as any[]);

        let noteContent = "";
        for await (const chunk of readStreamableValue(treatMentNoteData)) {
          noteContent += chunk;
        }
        setNote(noteContent); // Set the note content after all chunks are processed
        setResume(treatmentResumeData);
        setInsights(treatmentInsightsData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message); // Log the error for better debugging
          alert(error.message);
        }
      }
    };

    getData(params, incharge);
  }, [params, incharge]);

  return (
    <div className="w-full h-full flex flex-col p-2 space-y-4 items-center justify-center">
      <NoteComponent value={note} />
      <div className="flex flex-col w-full max-w-2xl">
        {isPending ? (
          <SkeletonLinesOfCode />
        ) : (
          <GitHubLanguageChart
            content={graphChart as GraphChart<string | number>[]}
          />
        )}
      </div>
      {isPending ? (
        <AiSummarySkeleton />
      ) : (
        <ResumeComponent>
          <Markdown>{String(resume)}</Markdown>
        </ResumeComponent>
      )}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-3xl rounded-xl shadow-lg transition-colors duration-200">
          {isPending ? (
            <DeveloperInsightsSkeleton />
          ) : (
            <GoodInsights insights={insights} />
          )}
        </div>
        <div className="w-full max-w-3xl bg-white dark:bg-[#1e2124] rounded-xl shadow-lg transition-colors duration-200 px-6 pb-2 pt-1 m-2">
          <ImprovmentComponent />
        </div>
        <div className="p-6 w-auto">
          <StatisticCard />
        </div>
      </div>
      <div className="transition-all w-full flex items-center justify-center relative bottom-4">
        <ShimmerButton
          type="submit"
          className="text-white rounded-full px-6 py-2 hover:bg-primary duration-300 hover:scale-105"
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
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.77 8.286A3.5 3.5 0 0 1 5.577 6.88c.818 0 1.57.28 2.166.75" />
              <path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
              <path d="M5.576 5.379a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.764 5.184c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.18 3.18 0 0 0-2.558-2.45" />
            </g>
          </svg>
        </ShimmerButton>
      </div>
    </div>
  );
};
