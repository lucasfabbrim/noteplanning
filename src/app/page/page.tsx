"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import { motion } from "framer-motion";
import Widget from "@/assets/hand.png";
import CommunityPhoto from "@/assets/cell.png";

export default function Home() {
  return (
    <div className="relative h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />

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
        <div className="py-3 mt-12 mb-8 bg-black border-t border-b border-zinc-900/70 items-center text-zinc-400 justify-center text-center text-xs flex gap-2">
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
      </main>
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
    <div className="bg-neutral-900/70 w-auto flex flex-col mb-20 rounded-[50px]">
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
