"use client";
import { motion } from "framer-motion";

export const WordUp = ({ data }: { data: string }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const words = `${data}`;
  return (
    <motion.h1
      variants={container}
      className="transition-all text-red-500 dark:text-red-200 font-bold text-md"
      initial="hidden"
      animate="show"
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "15px" }}
          className=""
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
};
