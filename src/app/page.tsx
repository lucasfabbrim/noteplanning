"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  NotebookPen,
  PenLine,
  Play,
  Settings,
} from "lucide-react";
import NotePrivate from "@/assets/note-private.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Hand from "@/assets/hand.png";
import cell from "@/assets/cell.png";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  return (
    <motion.div
      className="relative h-screen bg-black font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />

      <motion.main className="flex flex-col relative z-10">
        <motion.section
          id="hero"
          className="pt-10 px-6 text-center"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="flex flex-col justify-between"
            variants={fadeInUp}
          >
            <div className="flex flex-col">
              <motion.h1
                className="text-white text-3xl font-bold"
                variants={fadeInUp}
              >
                Organize-se e produza{" "}
                <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text">
                  mais
                </span>
              </motion.h1>
              <motion.h3
                className="text-zinc-300/90 text-base text-center pt-3 font-medium"
                variants={fadeInUp}
              >
                Seu novo planejamento totalmente personalizado está a um clique
                de distância.
              </motion.h3>
              <motion.div
                className="flex justify-center items-center pt-6"
                variants={fadeInUp}
              >
                <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-14 rounded-full text-base text-white">
                  <span className="px-4 flex items-center gap-4">
                    Participe da pré-venda
                    <ArrowRight size={8} strokeWidth={2.5} />
                  </span>
                </Button>
              </motion.div>
              <motion.div
                className="flex justify-center items-center relative pt-14"
                variants={fadeInUp}
              >
                <Image
                  src={Macbook}
                  alt="MacBook"
                  width={400}
                  height={400}
                  className="object-contain relative"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="text-2xl text-white pt-16 font-semibold px-2"
            variants={fadeInUp}
          >
            Faça como empresas líderes do mercado organize usando o{" "}
            <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text">
              Notion
            </span>
          </motion.div>
          <motion.div
            className="text-sm text-zinc-400/90 font-medium px-4 pt-4"
            variants={fadeInUp}
          >
            O nosso template facilita o controle da sua produtividade e
            organização.{" "}
          </motion.div>
          <motion.div
            className="flex items-center text-center justify-center gap-5 pt-4"
            variants={fadeInUp}
          >
            <NetflixIcon />
            <DiscordIcon />
            <FigmaIcon />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center items-center relative pt-32 pb-20"
            variants={fadeInUp}
          >
            <Image
              src={Hand}
              alt="MacBook"
              width={300}
              height={400}
              className="object-contain relative "
              priority
            />
            <motion.h3
              className="bg-gradient-to-l from-zinc-700 to-zinc-300 text-transparent bg-clip-text text-xl font-semibold pt-3 z-0"
              variants={fadeInUp}
            >
              Widgets
            </motion.h3>
            <motion.h1
              className="text-2xl text-white pt-2 font-semibold px-1"
              variants={fadeInUp}
            >
              Tudo ao seu alcance, simplificado para você.
            </motion.h1>
            <motion.p
              className="text-zinc-400/90 px-3 pt-3 text-sm"
              variants={fadeInUp}
            >
              Acesse tudo de forma rápida e organizada com widgets inteligentes.
            </motion.p>
            <motion.div
              className="flex justify-center items-center pt-8 pb-10"
              variants={fadeInUp}
            >
              <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-14 rounded-full text-base text-white">
                <span className="px-4 flex items-center gap-4">
                  Participe da pré-venda
                  <ArrowRight size={8} strokeWidth={2.5} />
                </span>
              </Button>
            </motion.div>
          </motion.div>
          <WhatsappPromo />
          <motion.div className="flex flex-col pt-32" variants={fadeInUp}>
            <motion.h3
              className="bg-gradient-to-l from-zinc-500 to-zinc-50 text-transparent bg-clip-text text-lg font-semibold"
              variants={fadeInUp}
            >
              Note Private
            </motion.h3>
            <motion.h1
              className="text-white text-3xl font-semibold"
              variants={fadeInUp}
            >
              Mate sua curiosidade.
            </motion.h1>
            <motion.p
              className="text-zinc-400/90 text-base pt-4 px-1"
              variants={fadeInUp}
            >
              Inspire-se nos exemplos do template pré-configuradas que deixamos
              criados para você.
            </motion.p>
            <motion.div
              className="flex justify-center items-center relative pt-10 px-4"
              variants={fadeInUp}
            >
              <Image
                src={NotePrivate}
                alt="MacBook"
                width={400}
                height={400}
                className="object-contain relative rounded-[12px]"
                priority
              />
            </motion.div>
            <motion.div
              className="flex justify-center items-center pt-8 pb-10"
              variants={fadeInUp}
            >
              <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-14 rounded-full text-base text-white">
                <span className="px-4 flex items-center gap-4">
                  Participe da pré-venda
                  <ArrowRight size={8} strokeWidth={2.5} />
                </span>
              </Button>
            </motion.div>
            <BlackNovember />
          </motion.div>
        </motion.section>
      </motion.main>
      <Footer />
    </motion.div>
  );
}

function WhatsappPromo() {
  return (
    <motion.div
      className="py-4 bg-black px-2 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-md mx-auto relative">
        <Card className="bg-zinc-900/70 border-none overflow-visible relative h-[690px] rounded-[30px]">
          <CardContent className="p-5 mt-4">
            <motion.span
              className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text font-semibold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              #DesafioPlanning
            </motion.span>

            <motion.h2
              className="text-2xl text-white font-bold mt-7 px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Um grupo{" "}
              <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text">
                exclusivo{" "}
              </span>
              para quem adquirir pré-venda!
            </motion.h2>

            <motion.p
              className="text-zinc-400/90 text-xs mt-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Faça parte da nossa comunidade e acompanhe novidades e desafios
              exclusivos para Dezembro!
            </motion.p>
            <motion.div
              className="flex justify-center items-center pt-10 pb-20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-11 rounded-full text-sm text-white">
                <span className="px-4 flex items-center gap-4">
                  Participe da pré-venda
                  <ArrowRight size={8} strokeWidth={2.5} />
                </span>
              </Button>
            </motion.div>
            <motion.div
              className="-mt-3 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Image
                src={cell}
                alt="WhatsApp chat preview"
                width={300}
                height={400}
                className="rounded-2xl mx-auto shadow-lg absolute left-0 w-full"
                priority
              />
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

const plans = [
  {
    name: "Note Private",
    price: "R$ 127,98",
    features: [
      {
        titulo: "Template Note Private",
        icon: LayoutGrid,
      },
      {
        titulo: "Aulas de como utilizar",
        icon: Play,
      },
      {
        titulo: "Template Canva",
        icon: PenLine,
      },
      {
        titulo: "Ferramentas Extras",
        icon: Settings,
      },
      {
        titulo: "Desafio de 21 dias de Organização",
        icon: NotebookPen,
      },
    ],
  },
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function BlackNovember() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 25,
    hours: 4,
    minutes: 1,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-black text-white py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto space-y-12">
        <motion.div
          className="text-center justify-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter flex flex-col">
            <span className="mx-6 text-white">DEZEMBER</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base pt-10">
            CONDIÇÃO ESPECIAL SOMENTE PARA{" "}
            <span className="font-bold">PRÉ-VENDA</span>!
          </p>
          <div className="flex items-center text-xs text-zinc-400 md:text-sm ">
            <p className="flex-1">
              Essa condição terá uma duração até o dia{" "}
              <span className="font-semibold text-zinc-300 ">
                30 de Dezembro de 2024
              </span>
              !
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-4 text-center px-8 md:px-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="text-3xl md:text-4xl font-bold">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-neutral-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:px-40 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`h-full bg-zinc-900/50 rounded-[10px] px-6 py-6 border-2 ${
                  plan.name === "Note Private"
                    ? "border-zinc-900/85"
                    : "border-zinc-950"
                } transition-all duration-300`}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <h3 className="gap-3 flex text-2xl font-semibold text-white mb-2 text-start items-center">
                  {plan.name}
                  <div className="w-auto bg-white border border-white/5 text-black text-xs font-medium py-1 px-3 rounded-full">
                    Popular
                  </div>
                </h3>
                <p className="text-[#A1A1A1] text-sm w-60">
                  Compre agora e tenha seu template para{" "}
                  <span className="text-white">sempre</span>!
                </p>
                <p className="flex gap-2 items-center text-white text-sm pt-7">
                  Tudo o que você terá acesso
                  <ChevronDown size={14} strokeWidth={3} />
                </p>
                <ul className="space-y-2 mb-8 pt-4">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-[#A1A1A1] text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                    >
                      <feature.icon className="w-4 h-4 text-white mr-3" />
                      {feature.titulo}
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-col text-2xl font-bold text-white mb-2 text-center justify-center items-center">
                  <h1>10x de R$ 12,79</h1>
                  <h1 className="text-sm pt-1 text-zinc-400 font-normal">
                    R$ 127,98
                  </h1>
                </div>
              </div>
              {hoveredPlan === plan.name && (
                <motion.div
                  className="absolute inset-0 -z-10 bg-zinc-300 rounded-2xl opacity-20 blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-[#A1A1A1]">
            Entre na página de vendas clicando no botão abaixo, garanta seu
            template.
          </p>
          <Button
            className="bg-white text-black font-semibold hover:bg-white/95 px-8 py-4 rounded-full"
            variant="default"
          >
            QUERO APROVEITAR A CONDIÇÃO
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
