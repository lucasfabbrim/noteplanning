"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Instagram,
  LayoutGrid,
  NotebookPen,
  PenLine,
  Play,
  Settings,
} from "lucide-react";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import { motion } from "framer-motion";
import Widget from "@/assets/hand.png";
import CommunityPhoto from "@/assets/cell.png";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="relative h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />
      <Header />

      <main className="flex flex-col relative z-10">
        <section id="hero" className="pt-10 px-2 text-center">
          <div className="flex flex-col justify-between">
            <HeroHeader
              title="Organize-se e aumente a produtividade."
              subtitle="Seu novo planejamento totalmente personalizado está a um clique
                de distância."
            />
          </div>
        </section>
        <section id="brands" className="px-2 text-center">
          <div className="flex flex-col justify-between">
            <Brands
              title="Faça como as grandes empresas do mercado utilizando Notion."
              subtitle="Com o nosso template, manter sua produtividade e organização nunca foi tão fácil!"
            />
          </div>
        </section>
        <div className="py-3 mt-12 mb-8 bg-zinc-900 border-t border-b border-zinc-800 items-center text-zinc-200 justify-center text-center text-xs flex gap-2">
          Aproveite as condições da pré-venda
          <ArrowDown size={10} className="text-zinc-600" strokeWidth={4} />
        </div>
        <section id="widgets" className="px-2 text-center pt-10">
          <div className="flex flex-col justify-between">
            <Widgets
              title="Tudo ao na palma da sua mão!"
              subtitle="Acesse tudo de forma rápida e organizada com widgets inteligentes."
            />
          </div>
        </section>
        <section id="community" className="px-10 pt-6 text-center">
          <div className="flex flex-col justify-between">
            <Community
              hashtag="DesafioPlanning"
              title="Um grupo exclusivo para quem adquirir pré-venda"
              subtitle="Faça parte da nossa comunidade e acompanhe novidades e desafios exclusivos para Dezembro!"
            />
          </div>
        </section>
        <section id="december" className="px-6 pt-20 text-center">
          <div className="flex flex-col justify-between">
            <December />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
type TimeLeft2 = {
  dias?: number;
};

function Header() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft2>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft(): TimeLeft2 {
    const difference = +new Date("2024-12-05") - +new Date();
    let timeLeft: TimeLeft2 = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      };
    }
    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof TimeLeft2]) {
      return null;
    }

    return (
      <span key={interval}>
        {timeLeft[interval as keyof TimeLeft2]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="h-10 bg-neutral-200 mb-4 items-center justify-center text-center pt-2 text-sm ">
      {timerComponents.length ? (
        <span className="font-semibold">
          Falta pouco! A <span className="font-bold">pré-venda</span> começa em{" "}
          <span className="font-bold">{timerComponents}</span>
        </span>
      ) : (
        <span className="">Time's up!</span>
      )}
    </div>
  );
}

interface HeroHeaderProps {
  title: string;
  subtitle: string;
}

function HeroHeader({ title, subtitle }: HeroHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
        {title}
      </h1>
      <h3 className="text-base text-neutral-400/90 font-medium px-5 tracking-tighter">
        {subtitle}
      </h3>
      <ButtonPrimary />
      <div className="flex justify-center items-center relative py-10 px-6">
        <Image
          src={Macbook}
          alt="MacBook"
          width={400}
          height={400}
          className="object-contain relative"
          priority
        />
      </div>
    </div>
  );
}

interface BrandsProps {
  title: string;
  subtitle: string;
}

function Brands({ title, subtitle }: BrandsProps) {
  return (
    <div className="flex flex-col gap-2.5 pt-8">
      <h1 className="text-2xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
        {title}
      </h1>
      <h3 className="text-sm text-neutral-400/90 font-medium px-5 tracking-tighter">
        {subtitle}
      </h3>
      <div className="flex items-center text-center justify-center gap-5 pt-2">
        <NetflixIcon />
        <DiscordIcon />
        <FigmaIcon />
      </div>
    </div>
  );
}

interface WidgetsProps {
  title: string;
  subtitle: string;
}

function Widgets({ title, subtitle }: WidgetsProps) {
  return (
    <div className="flex flex-col gap-2.5 pt-4 relative">
      <Image
        src={Widget}
        alt="Widget"
        width={300}
        height={400}
        className="object-contain relative ml-12"
        priority
      />
      <h3 className="bg-gradient-to-l from-zinc-700 to-zinc-300 text-transparent bg-clip-text text-xl font-semibold pt-3 z-0 md:text-3xl">
        Widgets
      </h3>
      <h1 className="text-2xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
        {title}
      </h1>
      <h3 className="text-sm text-neutral-400/90 font-medium px-5 tracking-tighter">
        {subtitle}
      </h3>
      <div className="pb-20">
        <ButtonPrimary />
      </div>
    </div>
  );
}

interface CommunityProps {
  hashtag: string;
  title: string;
  subtitle: string;
}

function Community({ hashtag, subtitle, title }: CommunityProps) {
  return (
    <div className="bg-neutral-900/70 w-auto flex flex-col rounded-[50px]">
      <div className="flex flex-col justify-center text-center py-4 gap-4">
        <h4 className="pt-4 text-sm bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tight">
          #{hashtag}
        </h4>
        <div className="px-4 pt-2">
          <h1 className="text-2xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
            {title}!
          </h1>
          <h3 className="text-xs text-neutral-400/90 font-medium pt-4 tracking-tighter">
            {subtitle}
          </h3>
        </div>
      </div>
      <div className="mt-auto pt-10">
        <Image
          src={CommunityPhoto}
          alt="Community"
          width={260}
          height={0}
          className="rounded-b-[14px] mx-auto shadow-lg"
          priority
        />
      </div>
    </div>
  );
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
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

function December() {
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
    <div className=" bg-black text-white py-12 px-1">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center justify-center space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter flex flex-col">
            <span className="mx-6 bg-gradient-to-l from-zinc-700 to-zinc-300 text-transparent bg-clip-text">
              DECEMBER
            </span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base pt-10">
            CONDIÇÃO ESPECIAL SOMENTE PARA{" "}
            <span className="font-bold">PRÉ-VENDA</span>!
          </p>
          <div className="flex items-center text-xs text-zinc-400 md:text-sm ">
            <p className="flex-1">
              Essa condição terá uma duração até o dia{" "}
              <span className="font-semibold text-zinc-300 ">
                11 de Dezembro de 2024
              </span>
              !
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 text-center px-6 md:px-40">
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, index) => (
            <motion.div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-neutral-400">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:px-40 py-2">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-full bg-zinc-900 rounded-[10px] px-6 py-6 transition-all duration-300 shadow-xl shadow-zinc-900/50"
              >
                <h3 className="gap-3 flex text-2xl font-semibold text-white mb-2 text-start items-center">
                  {plan.name}
                  <div className="w-auto bg-white border border-white/5 text-black text-xs font-medium py-1 px-3 rounded-full">
                    Popular
                  </div>
                </h3>
                <p className="text-[#A1A1A1] text-sm w-60 text-start">
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
                      className="flex items-center text-[#A1A1A1] text-xs"
                    >
                      <feature.icon className="w-4 h-4 text-green-500 mr-3" />
                      {feature.titulo}
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-col text-2xl font-bold text-white mb-2 text-center justify-center items-center">
                  <h1 className="text-xs font-normal text-zinc-300 pb-1">
                    De{" "}
                    <span className="line-through font-medium">R$ 220,99</span>,
                    por apenas:
                  </h1>
                  <h1 className="text-2xl">10x de R$ 12,79</h1>
                  <h1 className="text-base text-green-500 font-normal">
                    Ou R$ 97,90 à vista.
                  </h1>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-sm text-[#A1A1A1]">
            Entre na página de vendas clicando no botão abaixo, garanta seu
            template.
          </p>
          <div className="flex justify-center items-center text-center w-full ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              whileInView={{ opacity: 1 }}
              className="bg-white text-black font-semibold hover:bg-white/95 px-8 py-4 rounded-full h-12 flex items-center text-center gap-2 text-sm"
            >
              QUERO APROVEITAR A CONDIÇÃO
              <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-4 py-2 border-t border-t-zinc-900">
      <div className="flex flex-col justify-between text-center">
        <div className="flex flex-col gap-2 py-4">
          <h1 className="text-white font-bold text-sm">Links</h1>
          <ul className="text-zinc-400 gap-0.5 text-xs">
            <li>Central de Ajuda</li>
            <li>Canal de Ideias</li>
          </ul>
          <h1 className="text-white pt-4 font-bold text-xs">
            Siga o Note Planning!
          </h1>
          <ul className="text-zinc-400 gap-2 flex text-center justify-center items-center pt-1">
            <li>
              <Instagram size={12} />
            </li>
          </ul>
          <div className="items-center text-center">
            <p className="font-semibold text-xs text-white pt-4">
              Copyright © 2024 Todos os direitos reservados - Note Planning.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ButtonPrimary() {
  return (
    <div className="flex justify-center items-center pt-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 rounded-full h-14 flex items-center gap-3 px-8 shadow-xl shadow-zinc-600/15"
      >
        <span className="bg-white bg-clip-text text-transparent font-semibold text-base">
          Quero organizar minha vida
        </span>
        <ArrowRight size={16} className="text-zinc-400" strokeWidth={3} />
      </motion.button>
    </div>
  );
}
