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
import { DockElement } from "./dock-element";

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
      <div className="transition-all w-full flex items-center justify-center relative bottom-4 p-6">
        <DockElement user={params as string} />
      </div>
    </div>
  );
};
