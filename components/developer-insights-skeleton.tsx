"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Component() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const shimmerVariants = {
    hidden: { x: "-100%" },
    visible: { x: "100%" },
  };

  return (
    <div className="w-full p-8 flex justify-center  dark:bg-secondary">
      <Card className="w-full max-w-6xl shadow-lg">
        <CardHeader className="pb-6">
          <motion.div
            className="h-10 w-1/3 bg-white dark:bg-secondary rounded mb-4 overflow-hidden relative"
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
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </motion.div>
          <motion.div
            className="h-6 w-2/3 bg-gray-200 rounded mb-6 overflow-hidden relative"
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
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
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
              <Card className="h-full shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                        variants={shimmerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <div className="h-8 w-1/2 bg-gray-200 rounded overflow-hidden relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                        variants={shimmerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </div>
                  {[1, 2, 3].map((line) => (
                    <div
                      key={line}
                      className="h-5 bg-gray-200 rounded overflow-hidden relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                        variants={shimmerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
