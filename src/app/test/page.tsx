"use client";

import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import HeroPhoto from "@/assets/hero-photo.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Widgets from "@/components/sections/widgets/widgets";
import { DecemberCountdown } from "@/components/DecemberCountdown";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import ButtonPrimary from "@/components/button-primary";
import { ChatBubble } from "@/components/chat";

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
            <ButtonPrimary />
            <div className="flex justify-center items-center relative mt-16">
              <div className="bg-[#00E472] absolute inset-0 blur-3xl w-[220px] h-[66px] left-20 top-10" />
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
        <section id="pre-order" className="text-white mx-auto my-10">
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
      <ChatBubble />
    </div>
  );
}
