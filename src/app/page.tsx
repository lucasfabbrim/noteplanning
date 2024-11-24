"use client";

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
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="relative h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />

      <div
        className="absolute top-10 right-60 lg:top-0 lg:left-0  lg:w-[600px] w-[300px] h-[230px] bg-zinc-200 blur[300px] opacity-20"
        style={{
          filter: "blur(170px)",
        }}
      />

      <main className="flex flex-col relative z-10">
        <section id="hero" className="pt-10 px-6 text-center">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="text-white text-3xl font-bold ">
                Organize-se e produza{" "}
                <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text">
                  mais
                </span>
              </h1>
              <h3 className="text-zinc-300/90 text-base text-center pt-3 font-medium">
                Seu novo planejamento totalmente personalizado está a um clique
                de distância.
              </h3>
              <div className="flex justify-center items-center pt-6">
                <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-14 rounded-full text-base text-white">
                  <span className="px-4 flex items-center gap-4">
                    Participe da pré-venda
                    <ArrowRight size={8} strokeWidth={2.5} />
                  </span>
                </Button>
              </div>
              <div className="flex justify-center items-center relative pt-14">
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
          </div>
          <div className="text-2xl text-white pt-16 font-semibold px-2">
            Faça como empresas líderes do mercado organize usando o{" "}
            <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text">
              Notion
            </span>
          </div>
          <div className="text-sm text-zinc-400/90 font-medium px-4 pt-4">
            O nosso template facilita o controle da sua produtividade e
            organização.{" "}
          </div>
          <div className="flex items-center text-center justify-center gap-5 pt-4">
            <NetflixIcon />
            <DiscordIcon />
            <FigmaIcon />
          </div>
          <div className="flex flex-col justify-center items-center relative pt-32 pb-20">
            <Image
              src={Hand}
              alt="MacBook"
              width={300}
              height={400}
              className="object-contain relative "
              priority
            />
            <h3 className="bg-gradient-to-l from-zinc-700 to-zinc-300 text-transparent bg-clip-text text-xl font-semibold pt-3 z-0">
              Widgets
            </h3>
            <h1 className="text-2xl text-white pt-2 font-semibold px-1">
              Tudo ao seu alcance, simplificado para você.
            </h1>
            <p className="text-zinc-400/90 px-3 pt-3 text-sm">
              Acesse tudo de forma rápida e organizada com widgets inteligentes.
            </p>
            <div className="flex justify-center items-center pt-8 pb-10">
              <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-14 rounded-full text-base text-white">
                <span className="px-4 flex items-center gap-4">
                  Participe da pré-venda
                  <ArrowRight size={8} strokeWidth={2.5} />
                </span>
              </Button>
            </div>
          </div>
          <WhatsappPromo />
          <div className="flex flex-col pt-32">
            <h3 className="bg-gradient-to-l from-zinc-500 to-zinc-50 text-transparent bg-clip-text text-lg font-semibold">
              Note Private
            </h3>
            <h1 className="text-white text-3xl font-semibold">
              Mate sua curiosidade.
            </h1>
            <p className="text-zinc-400/90 text-base pt-4 px-1">
              Inspire-se nos exemplos do template pré-configuradas que deixamos
              criados para você.
            </p>
            <div className="flex justify-center items-center relative pt-10 px-4">
              <Image
                src={NotePrivate}
                alt="MacBook"
                width={400}
                height={400}
                className="object-contain relative rounded-[12px]"
                priority
              />
            </div>
            <div className="flex justify-center items-center pt-8 pb-10">
              <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-14 rounded-full text-base text-white">
                <span className="px-4 flex items-center gap-4">
                  Participe da pré-venda
                  <ArrowRight size={8} strokeWidth={2.5} />
                </span>
              </Button>
            </div>
            <BlackNovember />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function WhatsappPromo() {
  return (
    <div className="py-4 bg-black px-2 relative ">
      <div className="max-w-md mx-auto relative">
        <Card className="bg-zinc-900/70 border-none overflow-visible relative h-[690px] rounded-[30px]">
          <CardContent className="p-5 mt-4">
            <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text font-semibold text-lg">
              #DesafioPlanning
            </span>

            <h2 className="text-2xl text-white font-bold mt-7 px-2">
              Um grupo{" "}
              <span className="bg-gradient-to-l from-zinc-300 to-zinc-500 text-transparent bg-clip-text">
                exclusivo{" "}
              </span>
              para quem adquirir pré-venda!
            </h2>

            <p className="text-zinc-400/90 text-xs mt-3">
              Faça parte da nossa comunidade e acompanhe novidades e desafios
              exclusivos para Dezembro!
            </p>
            <div className="flex justify-center items-center pt-10 pb-20">
              <Button className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 border border-zinc-800 w-auto h-11 rounded-full text-sm text-white">
                <span className="px-4 flex items-center gap-4">
                  Participe da pré-venda
                  <ArrowRight size={8} strokeWidth={2.5} />
                </span>
              </Button>
            </div>
            <div className="-mt-3 relative">
              <Image
                src={cell}
                alt="WhatsApp chat preview"
                width={300}
                height={400}
                className="rounded-2xl mx-auto shadow-lg absolute left-0 w-full"
                priority
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
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

interface Feature {
  icon: React.ElementType;
  titulo: string;
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-black text-white py-12 px-4 border-t border-t-zinc-800">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center justify-center space-y-2">
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
        </div>

        <div className="grid grid-cols-4 text-center px-8 md:px-40">
          {[
            { value: timeLeft.days, label: "Dias" },
            { value: timeLeft.hours, label: "Horas" },
            { value: timeLeft.minutes, label: "Minutos" },
            { value: timeLeft.seconds, label: "Segundos" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-neutral-400">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:px-40 py-2">
          {plans.map((plan, index) => (
            <div key={plan.name} className="relative">
              <div
                className={`h-full bg-zinc-900/50 rounded-[10px] px-6 py-6 border-2 ${
                  plan.name === "Note Private"
                    ? "border-zinc-900/85"
                    : "border-zinc-950"
                } transition-all duration-300`}
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
                    <li
                      key={idx}
                      className="flex items-center text-[#A1A1A1] text-sm"
                    >
                      <feature.icon className="w-4 h-4 text-white mr-3" />
                      {feature.titulo}
                    </li>
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
                <div className="absolute inset-0 -z-10 bg-zinc-300 rounded-2xl opacity-20 blur-xl" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
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
        </div>
      </div>
    </div>
  );
}
