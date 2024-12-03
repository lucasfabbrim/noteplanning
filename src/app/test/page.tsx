"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import HeroPhoto from "@/assets/hero-photo.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Widgets from "@/components/sections/widgets/widgets";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <main className="flex flex-col">
        <section id="hero" className="text-white mx-auto pt-10">
          <div className="flex flex-col items-center text-center justify-between">
            <div className="items-center border border-[#141414] text-white rounded-full flex">
              <span className="px-3 py-1 text-[#767676] text-xs">
                Alguns passos para uma vida mais organizada e produtiva.
              </span>
            </div>
            <h1 className="pt-6 px-2 max-w-sm tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-4xl/8 font-bold">
              Organize-se e aumente a produtividade.
            </h1>
            <p className="pt-4 px-6 max-w-xs text-xs text-zinc-400/90">
              Seu novo planejamento totalmente personalizado está a um clique de
              distância.
            </p>
            <Button
              variant="default"
              className="bg-[#00E472] mt-8 rounded-full items-center shadow-xl shadow-[#00E472]/10"
            >
              <span className="px-2 text-black text-sm font-medium flex items-center gap-2">
                Eu quero organizar minha vida
                <ArrowRight size={10} className="text-black w-2 h-2" />
              </span>
            </Button>
            <div className="flex justify-center items-center relative mt-16">
              <div className="bg-[#00E472] absolute inset-0 blur-3xl w-[220px] h-[66px] left-20 top-10 animate-pulse" />
              <Image
                src={HeroPhoto}
                alt="MacBook"
                width={400}
                height={400}
                className="object-contain relative z-10 px-4"
                priority
              />
            </div>
            <h1 className="pt-16 px-2 max-w-sm tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-2xl/6 font-bold">
              Faça como as grandes empresas do mercado utilizando Notion.
            </h1>
            <p className="pt-4 px-6 max-w-xs text-xs text-zinc-400/90">
              Com o nosso template, manter sua produtividade e organização nunca
              foi tão fácil!
            </p>
            <div className="flex items-center text-center justify-center gap-5 pt-2">
              <NetflixIcon />
              <DiscordIcon />
              <FigmaIcon />
            </div>
          </div>
        </section>
        <Widgets />
        <section id="pricing" className="text-white mx-auto my-10">
          <DecemberCountdown />
        </section>
        <section id="suporte" className=" pt-20 text-center">
          <div className="flex flex-col justify-between">
            <WhatsAppCTA />
          </div>
        </section>
      </main>
      <footer className="py-8 border-t border-t-green-800">
        <div className="flex flex-col justify-between border-b border-b-zinc-800 mx-6 pb-8">
          <div className="flex flex-col items-center gap-1 text-sm">
            <h1 className="text-white font-semibold pb-3 pt-6">Políticas</h1>
            <h3 className="text-zinc-500 font-medium">
              Política de Privacidade
            </h3>
            <h3 className="text-zinc-500 font-medium">Termos de uso</h3>
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-zinc-500 font-semibold text-xs text-center px-6">
            © NOTE PLANNING® 2024. Todos os direitos reservados.
          </h1>
          <div className="flex flex-row gap-3 text-zinc-400 text-center justify-center py-4">
            <Instagram size={20} />
            <Youtube size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

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

function DecemberCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const endDateFormatted = new Date();
  endDateFormatted.setDate(endDateFormatted.getDate() + 7);

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8 ">
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
            <span className="font-bold text-green-400 ">PRÉ-VENDA</span>!
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-zinc-900/40 rounded-2xl p-8 shadow-xl"
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
                    <feature.icon className="w-4 h-4 text-green-500 mr-3" />
                    {feature.titulo}
                  </motion.li>
                ))}
              </ul>
              <div className="text-center space-y-2 pt-8 tracking-tighter">
                <p className="text-zinc-400 text-sm">
                  De{" "}
                  <span className="line-through text-green-400 font-medium">
                    R$ 227,99
                  </span>
                  , por apenas:
                </p>
                <p className="text-4xl font-bold text-white">10x de R$ 9,79</p>
                <p className="text-xl text-green-400 font-semibold">
                  Ou R$ 87,90 à vista
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
            className="bg-white mt-8 h-12 rounded-full items-center shadow-xl shadow-[#00E472]/10"
          >
            <span className="px-2 text-black text-base font-medium flex items-center gap-3">
              Eu quero organizar minha vida
              <ArrowRight size={10} className="text-black w-2 h-2" />
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

function WhatsAppCTA() {
  return (
    <div className="bg-gradient-to-tr from-green-600 via-green-600 to-green-700  flex flex-col items-center text-center space-y-6 w-full mx-auto pb-14">
      <div className="bg-green-500 rounded-full p-4 shadow-2xl inline-block mt-10">
        <svg
          className="w-16 h-16 text-white px-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="text-white space-y-3 pt-4 px-8">
        <h2 className="text-2xl font-bold">Ainda está com dúvida?</h2>
        <p className="text-zinc-200 font-medium text-sm ">
          Fique em paz! Clique no botão abaixo para falar com um consultor do
          nosso time. Estamos prontos e ansiosos para te atender.
        </p>
      </div>

      <div className="flex justify-center items-center pt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          whileInView={{ opacity: 1 }}
          onClick={() => window.open("https://wa.me/19993356780", "_blank")}
          className="bg-gradient-to-tl from-green-900 via-green-800 to-green-900 rounded-full h-14 flex items-center gap-3 px-8 shadow-xl shadow-green-800"
        >
          <span className="bg-white bg-clip-text text-transparent font-semibold text-base">
            Quero falar com um especialista
          </span>
          <ArrowRight size={16} className="text-green-600" strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}
