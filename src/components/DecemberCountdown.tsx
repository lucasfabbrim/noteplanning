"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

// Definição única de TimeLeft
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const plans = [
  {
    name: "Note Private",
    features: [
      { icon: CheckCircle2, titulo: "Template Note Private" },
      { icon: CheckCircle2, titulo: "Aulas de como utilizar" },
      { icon: CheckCircle2, titulo: "Template Canva" },
      { icon: CheckCircle2, titulo: "Ferramentas Extras" },
      { icon: CheckCircle2, titulo: "Desafio de 21 dias de Organização" },
    ],
  },
];

const calculateTimeLeft = (endDate: Date): TimeLeft => {
  const difference = +endDate - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export function DecemberCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date(
      Date.UTC(new Date().getFullYear(), 11, 12, 0, 0, 0),
    );

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-9 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            <span className="bg-white text-transparent bg-clip-text">
              PRÉ-VENDA
            </span>
          </h1>
          <p className="text-zinc-400 text-sm tracking-tighter md:text-xl font-medium">
            CONDIÇÃO ESPECIAL SOMENTE PARA{" "}
            <span className="font-bold text-green-400">PRÉ-VENDA</span>!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-4 text-center px-6"
        >
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, index) => (
            <div key={index} className="p-2">
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-zinc-400 mt-2 tracking-tighter">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-zinc-900/60 rounded-2xl p-8 shadow-xl"
      >
        {plans.map((plan) => (
          <div key={plan.name} className="relative">
            <h3 className="flex items-center text-3xl font-bold text-white mb-2">
              {plan.name}
              <span className="ml-3 bg-green-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                Popular
              </span>
            </h3>
            <p className="text-zinc-400 text-sm mb-8 tracking-tighter">
              Compre agora e tenha seu template para{" "}
              <span className="text-green-400 font-semibold">sempre</span>!
            </p>
            <div className="flex items-center text-white text-base font-medium mb-4 tracking-tighter">
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
                  className="flex items-center text-zinc-400 text-sm tracking-tighter"
                >
                  <feature.icon
                    aria-label="Ícone de verificação"
                    className="w-4 h-4 text-green-500 mr-3"
                  />
                  {feature.titulo}
                </motion.li>
              ))}
            </ul>
            <div className="text-center space-y-2 pt-8 tracking-tighter">
              <p className="text-zinc-400 text-sm">
                De{" "}
                <span className="line-through text-red-400 font-medium">
                  R$ 197,99
                </span>
                , por apenas:
              </p>
              <p className="text-4xl font-bold text-white">10x de R$ 9,79</p>
              <p className="text-xl text-green-400 font-semibold">
                Ou R$ 97,90 à vista
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center space-y-6 pt-6"
      >
        <p className="text-sm px-4 text-zinc-400">
          Entre na página de vendas clicando no botão abaixo e garanta seu
          template.
        </p>
        <Button
          variant="default"
          type="button"
          className="bg-white mt-8 h-12 rounded-full items-center shadow-xl shadow-[#00E472]/10"
        >
          <span className="px-2 text-black text-base font-medium flex items-center gap-3">
            Eu quero organizar minha vida
            <ArrowRight size={10} className="text-black w-2 h-2" />
          </span>
        </Button>
      </motion.div>
    </div>
  );
}
