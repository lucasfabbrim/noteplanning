"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonPrimary from "@/components/button-primary";
import HeroPhoto from "@/assets/macbook-1.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Widgets from "@/components/sections/widgets/widgets";
import PhoneSection from "@/components/phone-section";
import AboutSection from "@/components/sections/about/about-section";
import Testimonials from "@/components/sections/testimonials/testimonials-section";
import { ChatBubble } from "@/components/chat";
import { Instagram, Youtube } from "lucide-react";
import IconProfile from "@/app/icon.jpg";
import { DecemberCountdown } from "@/components/DecemberCountdown";

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const targets = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="h-12 bg-black text-white flex justify-center items-center text-center">
        <h1 className="text-sm md:text-base font-medium">
          Cupom "
          <span className="underline font-bold text-blue-600">PREVENDA</span>"
          com <span className="font-bold">10% de desconto</span>!
        </h1>
      </header>
      <main className="flex flex-col">
        <section
          ref={targetRef}
          id="hero"
          className="mx-auto flex flex-col md:flex-row mt-10 md:mt-20 px-4 md:px-8 lg:px-36"
        >
          <motion.div
            style={{ opacity, scale }}
            className="flex flex-col items-center text-center justify-center md:text-start md:justify-between md:items-start "
          >
            <h1 className="tracking-tighter bg-gradient-to-r from-neutral-700 to-stone-900 bg-clip-text text-transparent text-3xl/8 md:text-5xl font-bold">
              Organize-se e aumente a produtividade.
            </h1>
            <p className="pt-4 px-4 md:px-0 max-w-lg text-sm md:text-base text-zinc-700/90">
              Seu novo planejamento totalmente personalizado está a um clique de
              distância.
            </p>
            <div className="flex items-center justify-center pb-10">
              <ButtonPrimary />
            </div>
          </motion.div>
          <motion.div
            style={{ opacity, scale }}
            className="flex justify-center items-center relative mt-8 md:mt-0 fade-in-section"
          >
            <Image
              src={HeroPhoto}
              alt="MacBook"
              width={600}
              height={400}
              className="object-contain px-4"
              priority
            />
          </motion.div>
        </section>
        <section
          id="brand"
          className="px-4 flex flex-col mt-10 md:mt-16 lg:mt-20 items-center"
        >
          <h1 className="tracking-tighter bg-gradient-to-r from-neutral-600 to-stone-900 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
            Faça como as grandes empresas do mercado utilizando Notion.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-800/90">
            Com o nosso template, manter sua produtividade e organização nunca
            foi tão fácil!
          </p>
          <div className="flex items-center justify-center gap-5 mt-4">
            <NetflixIcon />
            <DiscordIcon />
            <FigmaIcon />
          </div>
        </section>
        <Widgets />
        <PhoneSection />
        <AboutSection />
        <Testimonials />
        <section id="pre-order" className="text-black mx-auto my-10">
          <DecemberCountdown />
        </section>
      </main>
      <footer className="py-8 border-t border-t-zinc-200 bg-zinc-100">
        <div className="justify-center text-center items-center flex gap-2">
          <Image
            src={IconProfile}
            alt="icon"
            width={40}
            height={40}
            priority
            className="items-center text-center rounded-full"
          />
          <h1 className="text-black tracking-tighter font-semibold text-lg">
            Note Planning
          </h1>
        </div>
        <div className="flex flex-col justify-between border-b  mx-6 pb-8 mt-6">
          <div className="flex flex-col items-center gap-1 text-sm">
            <h1 className="text-black font-semibold pb-3 pt-6">Políticas</h1>
            <h3 className="text-zinc-800 font-medium">
              Política de Privacidade
            </h3>
            <h3 className="text-zinc-800 font-medium">Termos de uso</h3>
          </div>
        </div>
        <div className="pt-8">
          <h1 className="text-zinc-800 font-semibold text-xs text-center px-6">
            © NOTE PLANNING® 2024. Todos os direitos reservados.
          </h1>
          <div className="flex flex-row gap-3 text-zinc-800 text-center justify-center py-4">
            <Instagram size={20} />
            <Youtube size={20} />
          </div>
        </div>
      </footer>
      <ChatBubble />
    </div>
  );
}
