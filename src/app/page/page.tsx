"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import { motion } from "framer-motion";

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
              title="Organize-se como as grandes empresas do mercado utilizando Notion."
              subtitle="Com o nosso template, manter sua produtividade e organização nunca foi tão fácil!"
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
    <div className="flex flex-col gap-2.5">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="text-3xl text-white font-bold px-1"
      >
        {title}
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="text-sm text-zinc-400 font-medium px-8"
      >
        {subtitle}
      </motion.h3>
      <ButtonPrimary />
      <motion.div
        className="flex justify-center items-center relative pt-14 pb-10 px-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
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
  );
}

interface BrandsProps {
  title: string;
  subtitle: string;
}

function Brands({ title, subtitle }: BrandsProps) {
  return (
    <div className="flex flex-col gap-2.5 pt-8">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="text-2xl text-white font-bold px-2"
      >
        {title}
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="text-sm text-zinc-400 font-medium px-6 pt-2"
      >
        {subtitle}
      </motion.h3>
      <motion.div
        className="flex items-center text-center justify-center gap-5 pt-2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      >
        <NetflixIcon />
        <DiscordIcon />
        <FigmaIcon />
      </motion.div>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="flex justify-center items-center pt-8">
      <motion.button
        exit={{ opacity: 0, x: -100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-tl from-zinc-900/50 via-zinc-600/50 to-zinc-900 rounded-full h-14 flex items-center gap-3 px-6 shadow-md shadow-neutral-900"
      >
        <span className="bg-white bg-clip-text text-transparent font-semibold">
          Quero organizar minha vida
        </span>
        <ArrowRight size={16} className="text-zinc-400" strokeWidth={3} />
      </motion.button>
    </div>
  );
}
