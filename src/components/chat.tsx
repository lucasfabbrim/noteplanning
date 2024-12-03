"use client";

import Image from "next/image";
import { useState } from "react";

import Avatar from "@/assets/avatares/avatar-ia-1.jpg";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function ChatBubble() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  if (!isVisible) return null;

  const handleClick = () => {
    router.push("/#hero");
    setIsVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 flex items-end gap-2 z-50 cursor-pointer"
      onClick={handleClick}
      title="Ir para seção de preços"
    >
      <div className="bg-white rounded-xl shadow-lg p-2 mb-1">
        <p className="text-[13px] text-gray-800 whitespace-nowrap px-2">
          Comece o ano com organização
        </p>
      </div>
      <div className="relative animate-pulse">
        <Image
          src={Avatar}
          alt="Support Avatar"
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full" />
      </div>
    </motion.div>
  );
}
