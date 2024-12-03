"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import { ArrowDown, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import { motion } from "framer-motion";
import CommunityPhoto from "@/assets/cell.png";
import { useState, useEffect } from "react";
import Carousel from "@/components/carousel/carousel";
import Testimonials from "@/components/sections/testimonials/testimonials-section";
import Faqs from "@/components/sections/faqs/faqs";
import Hero from "@/components/sections/hero/hero";
import Brands from "@/components/sections/brands/brands";
import ButtonPrimary from "@/components/button-primary";
import Widgets from "@/components/sections/widgets/widgets";

export default function Home() {
  return (
    <div className="relative h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />
      <header className="py-2 bg-gradient-to-b from-white to-zinc-300 justify-center text-center">
        <span className="bg-gradient-to-b from-black to-zinc-900 text-transparent bg-clip-text text-sm font-semibold tracking-tighter">
          Falta pouco para você organizar sua vida!
        </span>
      </header>
      <main className="flex flex-col">
        <Hero />
        <Brands />
        <div className="py-3 mt-12 mb-8 bg-transparent border-t border-b border-zinc-800 items-center text-zinc-200 justify-center text-center text-xs flex gap-2">
          Aproveite as condições da pré-venda
          <ArrowDown size={10} className="text-green-600" strokeWidth={4} />
        </div>
        <Widgets />
        <section id="community" className="px-10 pt-6 text-center">
          <div className="flex flex-col items-center">
            <Community
              hashtag="DesafioPlanning"
              title="Um grupo exclusivo para quem adquirir pré-venda"
              subtitle="Faça parte da nossa comunidade e acompanhe novidades e desafios exclusivos para Dezembro!"
            />
          </div>
        </section>
        <section id="template" className="px-4 pt-24 text-center">
          <div className="flex flex-col justify-between">
            <TemplateSection
              title="Mate sua curiosidade"
              subtitle="Inspire-se nos exemplos do template pré-configuradas que deixamos
              criados para você."
            />
            <div className="text-center pt-16">
              <Carousel />
            </div>
          </div>
        </section>
        <Testimonials />
        <section id="december" className="px-6 text-center">
          <div className="flex flex-col justify-between">
            <DecemberCountdown />
          </div>
        </section>
        <Faqs />
        <section id="suporte" className=" pt-20 text-center">
          <div className="flex flex-col justify-between"></div>
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

interface TemplateProps {
  title: string;
  subtitle: string;
}

function TemplateSection({ title, subtitle }: TemplateProps) {
  return (
    <div className="flex flex-col gap-2.5 pt-8">
      <h1 className="text-3xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
        {title}
      </h1>
      <h3 className="text-sm text-neutral-400/90 font-medium px-5 tracking-tighter">
        {subtitle}
      </h3>

      <div className="flex items-center text-center justify-center ">
        <ButtonPrimary />
      </div>
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

function Brandss({ title, subtitle }: BrandsProps) {
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

interface AboutProps {
  title: string;
  subtitle: string;
}

function About({ title, subtitle }: AboutProps) {
  return (
    <div className="flex flex-col gap-2.5 pt-8">
      <h1 className="text-2xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
        {title}
      </h1>
      <h3 className="text-sm text-neutral-400/90 font-medium px-5 tracking-tighter">
        {subtitle}
      </h3>
      <div className="flex items-center text-center justify-center ">
        <Carousel />
      </div>
    </div>
  );
}

interface WidgetsProps {
  title: string;
  subtitle: string;
}

function Widgetss({ title, subtitle }: WidgetsProps) {
  return (
    <div className="flex flex-col gap-2.5 pt-4 relative">
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
    <div className="relative bg-neutral-900/70 w-auto flex flex-col rounded-[50px] max-w-7xl">
      <div className="relative flex flex-col justify-center text-center py-4 gap-4 md:justify-between md:flex-row md:items-center md:text-start md:px-20 md:gap-20">
        <div className="md:items-start md:max-w-sm">
          <div className="px-4 pt-2 md:items-start">
            <h4 className="pt-4 text-sm bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tight">
              #{hashtag}
            </h4>
            <h1 className="text-2xl bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent font-extrabold tracking-tighter">
              {title}!
            </h1>
            <h3 className="text-xs text-neutral-400/90 font-medium pt-4 tracking-tighter">
              {subtitle}
            </h3>
            <div className="justify-center items-center pt-8 hidden md:block">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                whileInView={{ opacity: 1 }}
                className="bg-gradient-to-tl from-zinc-500/50 via-zinc-200/50 to-zinc-500 rounded-full h-14 flex items-center gap-3 px-8 shadow-xl shadow-zinc-600/15"
              >
                <span className="bg-white bg-clip-text text-transparent font-semibold text-base">
                  Quero participar da comunidade
                </span>
                <ArrowRight
                  size={16}
                  className="text-zinc-400"
                  strokeWidth={3}
                />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-10 md:pl-10 ">
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
    </div>
  );
}

import { Button } from "@/components/ui/button";

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

export function DecemberCountdown() {
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

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-t-zinc-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1">
          <div className="text-center">
            <h2 className="font-bold tracking-tight text-xl mb-1">
              Note Planning
            </h2>
            <p className="text-zinc-400 text-sm">
              Organize suas ideias, planeje seu futuro.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-t-zinc-800 text-center text-zinc-400 text-sm">
          Copyright © {new Date().getFullYear()} Todos os direitos reservados -
          Note Planning.
        </div>
      </div>
    </footer>
  );
}
