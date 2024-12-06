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
    <div className="flex flex-col justify-center items-center pt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
        disabled={isClicked}
        className="relative rounded-full h-10 flex items-center gap-3 px-6 shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 to-zinc-300" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
          initial={{ x: "-100%" }}
          animate={{ x: isHover ? "0%" : "-100%" }}
          transition={transition}
        />
        <motion.span
          className="relative z-10 font-medium text-base text-black"
          animate={{ color: isHover ? "#ffffff" : "#000000" }}
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
                className="text-black"
                strokeWidth={2.5}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <span className="text-xs font-medium pt-3 text-green-400">
        CUPOM DE <span className="font-semibold">"PREVENDA"</span> COM{" "}
        <span className="font-semibold">10% DE DESCONTO</span>
      </span>
    </div>
  );
}
