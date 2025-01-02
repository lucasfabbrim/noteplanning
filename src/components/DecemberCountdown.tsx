"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import ButtonPrimary from "./button-primary";

const features = [
  { title: "Template: Note Private" },
  { title: "👩‍🏫 Aulas de como utilizar" },
  { title: "🎁 Bônus: Template Canva" },
  { title: "🛠️ Ferramentas Extras" },
  { title: "👥 Comunidade Note Planning" },
  { title: "100% de Garantia em 7 dias" },
];

export function PricingCard() {
  return (
    <div className="max-w-md mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {/* Header */}
        <div className="bg-zinc-900 p-6 text-center">
          <h2 className="text-white text-2xl font-bold mb-2">Note Private</h2>
          <div className="text-zinc-300 text-sm">De R$127,90, por apenas:</div>
        </div>

        {/* Content */}
        <div className="bg-white p-6">
          {/* Price */}
          <div className="text-center mb-8">
            <div className="text-base text-zinc-500 mb-1">10x</div>
            <div className="text-zinc-500 text-5xl font-bold mb-2">R$ 9,35</div>
            <div className="text-sm text-zinc-600">Ou R$ 77,90 à vista.</div>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0">
                  <CircleCheck className="h-5 w-5 text-emerald-500" />
                </div>
                <span className="text-zinc-700 text-sm">{feature.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center  pb-10">
            <ButtonPrimary />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
