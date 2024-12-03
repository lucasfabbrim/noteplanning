"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroPhoto from "@/assets/hero-photo.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";

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
      </main>
    </div>
  );
}
