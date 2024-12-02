"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function ButtonPrimary() {
  const [isHover, setIsHover] = useState(false);

  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  return (
    <div className="flex justify-center items-center pt-6 pb-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative rounded-full h-11 flex items-center gap-3 px-6 shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 to-zinc-300" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
          initial={{ x: "-100%" }}
          animate={{ x: isHover ? "0%" : "-100%" }}
          transition={transition}
        />
        <motion.span
          className="relative z-10 font-medium text-base"
          animate={{ color: isHover ? "#ffffff" : "#000000" }}
          transition={transition}
        >
          Quero organizar minha vida
        </motion.span>
        <AnimatePresence initial={false} mode="wait">
          {isHover ? (
            <motion.div
              key="arrow"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={transition}
              className="relative z-10"
            >
              <ArrowRight size={16} className="text-white" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              key="chevron"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={transition}
              className="relative z-10"
            >
              <ChevronRight
                size={16}
                className="text-black"
                strokeWidth={2.5}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
