"use client";

export const FillingComponent = ({
  note,
  isPending,
  graphChart,
  resume,
  insights,
}: Props) => {
  return (
    <>
      <MinimalistProfile>
        <NoteComponent value={note} />
        <div className="flex flex-col w-full max-w-2xl">
          {isPending ? (
            <>
              <SkeletonLinesOfCode />
            </>
          ) : (
            <>
              <GitHubLanguageChart
                content={graphChart as GraphChart<string | number>[]}
              />
            </>
          )}
        </div>
      </MinimalistProfile>
      {isPending ? (
        <>
          <AiSummarySkeleton />
        </>
      ) : (
        <>
          <ResumeComponent>
            <Markdown>{String(`${resume}`)}</Markdown>
          </ResumeComponent>
        </>
      )}

      <div className="w-full flex flex-col justify-center items-center">
        {/* <InsightComponent>
         <InsightsSkeletonLoader />
       </InsightComponent> */}

        <div className="w-full max-w-3xl   rounded-xl shadow-lg transition-colors duration-200 ">
          {isPending ? (
            <>
              <DeveloperInsightsSkeleton />
            </>
          ) : (
            <>
              <GoodInsights insights={insights} />
            </>
          )}
        </div>
        <div className="w-full max-w-3xl  bg-white dark:bg-[#1e2124] rounded-xl shadow-lg transition-colors duration-200 px-6 pb-2 pt-1 m-2">
          <ImprovmentComponent />
        </div>

        <div className="p-6 w-auto">
          <StatisticCard />
        </div>
      </div>
      <div className="transition-all w-full flex items-center justify-center relative bottom-4">
        <ShimmerButton
          type="submit"
          className="transition-all transition-all  text-white rounded-full px-6 py-2 hover:bg-primary duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          // onClick={() => setView(!view)}
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
  );
};
