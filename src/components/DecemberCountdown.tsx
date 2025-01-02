"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import ButtonPrimary from "./button-primary";

const plans = [
  {
    name: "Note Private",
    features: [
      { icon: CheckCircle2, titulo: "Template Note Private" },
      { icon: CheckCircle2, titulo: "Aulas de como utilizar" },
      { icon: CheckCircle2, titulo: "Template Canva" },
      { icon: CheckCircle2, titulo: "Ferramentas Extras" },
      { icon: CheckCircle2, titulo: "Comunidade" },
    ],
  },
];

export function DecemberCountdown() {
  return (
    <div className="py-9 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-zinc-100 rounded-2xl p-8 shadow-xl shadow-black/15"
      >
        {plans.map((plan) => (
          <div key={plan.name} className="relative">
            <h3 className="flex items-center text-3xl font-bold text-black mb-2">
              {plan.name}
              <span className="ml-3 bg-green-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                Popular
              </span>
            </h3>
            <p className="text-zinc-800/90 text-sm mb-8 tracking-tighter">
              Compre agora e tenha seu template para{" "}
              <span className="text-green-400 font-semibold">sempre</span>!
            </p>
            <div className="flex items-center text-black text-base font-medium mb-4 tracking-tighter">
              Tudo o que você terá acesso
              <ChevronDown size={20} className="ml-2 text-green-400" />
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                  className="flex items-center text-zinc-800 text-sm tracking-tighter"
                >
                  <feature.icon
                    aria-label="Ícone de verificação"
                    className="w-4 h-4 text-green-500 mr-2"
                  />
                  {feature.titulo}
                </motion.li>
              ))}
            </ul>
            <div className="text-center space-y-2 pt-8 tracking-tighter">
              <p className="text-zinc-800 text-sm">
                De{" "}
                <span className="line-through text-red-500 font-medium">
                  R$ 127,90
                </span>
                , por apenas:
              </p>
              <p className="text-4xl font-bold text-black">10x de R$ 9,35</p>
              <p className="text-xl text-green-500 font-semibold">
                Ou R$ 77,90 à vista
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex items-center justify-center  pb-10">
        <ButtonPrimary />
      </div>
    </div>
  );
}
