'use client'

import { motion } from "framer-motion"

export function LargerSkeletonLoader() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-3xl shadow-lg">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4">
          <motion.div
            className="h-12 bg-gray-200 rounded-lg w-3/4"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="h-6 bg-gray-200 rounded-lg w-full"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </div>
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-2xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-6">
              <motion.div
                className="w-12 h-12 bg-gray-200 rounded-full"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="h-8 bg-gray-200 rounded-lg w-1/3"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.div
                className="h-8 bg-gray-200 rounded-lg w-24 ml-auto"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
            </div>
            <motion.div
              className="h-6 bg-gray-200 rounded-lg w-full"
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            />
            <div className="flex flex-wrap gap-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-8 bg-gray-200 rounded-full w-28"
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 + i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}