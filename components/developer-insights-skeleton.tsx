"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DeveloperInsightsSkeleton() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const shimmerVariants = {
    hidden: { x: "-100%" },
    visible: { x: "100%" },
  };

  return (
    <div className="w-full p-6 flex justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader className="pb-2">
          <motion.div
            className="h-8 w-3/4 bg-gray-200 rounded mb-2 overflow-hidden relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              variants={shimmerVariants}
              initial="hidden"
              animate="visible"
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
          <motion.div
            className="h-4 w-full bg-gray-200 rounded mb-6 overflow-hidden relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              variants={shimmerVariants}
              initial="hidden"
              animate="visible"
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2 overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                      variants={shimmerVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-2 overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                      variants={shimmerVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[1, 2, 3].map((line) => (
                    <div
                      key={line}
                      className="h-4 bg-gray-200 rounded overflow-hidden relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                        variants={shimmerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[1, 2, 3].map((tag) => (
                      <div
                        key={tag}
                        className="h-6 w-16 bg-gray-200 rounded overflow-hidden relative"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                          variants={shimmerVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
