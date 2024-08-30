"use server";

export const chart = () => {
  const chartData = [
    { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartNoteData = [
    { browser: "safari", note: 200, fill: "var(--color-safari)" },
  ];

  return { chartData, chartNoteData };
};
