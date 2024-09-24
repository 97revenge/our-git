"use client";

import { motion } from "framer-motion";

export function GlassLoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-6xl font-bold text-white text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Loading...
      </motion.h2>
    </motion.div>
  );
}
