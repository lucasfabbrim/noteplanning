"use client";

import Image from "next/image";
import Macbook from "@/assets/macbook.png";
import ButtonPrimary from "@/components/button-primary";

export default function Hero() {
  return (
    <section id="hero" className="text-white mx-auto pt-10 px-1">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <div className="items-center border border-zinc-800 text-white text-xs rounded-full flex">
          <div className="h-2 w-2 bg-green-400 rounded-full mx-2.5 shadow-xl shadow-white/30 animate-pulse" />
          <span className="pr-4 py-1 text-zinc-300">
            Organização e Produtividade
          </span>
        </div>
        <h1 className="pt-6 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-4xl md:text-4xl font-bold flex flex-col">
          Organize-se e aumente a produtividade.
        </h1>
        <p className="px-2 md:px-16 pt-3 text-sm md:text-base text-zinc-400/90">
          Seu novo planejamento totalmente personalizado está a um clique de
          distância.
        </p>
        <ButtonPrimary />
        <div className="flex justify-center items-center relative py-10 px-6">
          <div className="bg-green-400 absolute inset-0 blur-3xl h-20 w-60 opacity-20 top-16 left-20 animate-pulse" />
          <Image
            src={Macbook}
            alt="MacBook"
            width={400}
            height={400}
            className="object-contain relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
