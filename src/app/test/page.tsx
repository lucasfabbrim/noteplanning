"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import HeroPhoto from "@/assets/hero-photo.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Widgets from "@/components/sections/widgets/widgets";
import { DecemberCountdown } from "@/components/DecemberCountdown";
import { motion } from "framer-motion";

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
