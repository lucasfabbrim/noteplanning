"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ButtonPrimary() {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      window.location.href =
        "https://pagamentos.noteplanning.com/checkout/166499588:1";
      setIsClicked(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col pt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
        disabled={isClicked}
        className="relative rounded-full h-12 flex items-center gap-3 px-6 shadow-xl shadow-black/40 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 to-zinc-800" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
          initial={{ x: "-100%" }}
          animate={{ x: isHover ? "0%" : "-100%" }}
          transition={transition}
        />
        <motion.span
          className="relative z-10 font-medium text-base text-white"
          animate={{ color: isHover ? "#ffffff" : "#ffffff" }}
          transition={transition}
        >
          Eu quero organizar minha vida
        </motion.span>
        <AnimatePresence initial={false} mode="wait">
          {isHover || isClicked ? (
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
                className="text-white"
                strokeWidth={2.5}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
