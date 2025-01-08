"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroPhoto from "@/assets/macbook-1.png";
import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Widgets from "@/components/sections/widgets/widgets";
import PhoneSection from "@/components/phone-section";
import AboutSection from "@/components/sections/about/about-section";
import Testimonials from "@/components/sections/testimonials/testimonials-section";
import { ChatBubble } from "@/components/chat";
import IconProfile from "@/app/icon.jpg";
import { PricingCard } from "@/components/DecemberCountdown";
import { ArrowDown, ArrowRight, PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <main className="flex flex-col">
        <section
          ref={targetRef}
          id="hero"
          className="mx-auto mt-6 md:mt-20 md:px-8 lg:px-48"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div
              style={{ opacity, scale }}
              className="px-2 flex flex-col items-center text-center justify-center md:text-start md:justify-between md:items-start "
            >
              <div className="flex flex-col items-center lg:items-start pb-4">
                <div className="flex items-center lg:items-start pt-4 pb-0.5">
                  <Star
                    size={18}
                    className="fill-yellow-500 text-transparent"
                  />
                  <Star
                    size={18}
                    className="fill-yellow-500 text-transparent"
                  />
                  <Star
                    size={18}
                    className="fill-yellow-500 text-transparent"
                  />
                  <Star
                    size={18}
                    className="fill-yellow-500 text-transparent"
                  />
                  <Star
                    size={18}
                    className="fill-yellow-500 text-transparent"
                  />
                </div>
                <h4 className="text-xs text-zinc-600 font-extrabold">
                  4.75/5 de 532 clientes
                </h4>
              </div>
              <h1 className="tracking-tighter bg-gradient-to-r from-neutral-700 to-stone-900 bg-clip-text text-transparent text-4xl/10 md:text-5xl xl:text-6xl font-extrabold drop-shadow-lg">
                <span className="underline decoration-slice decoration-zinc-800">
                  Organize
                </span>{" "}
                sua vida e seja mais{" "}
                <span className="underline decoration-slice decoration-zinc-800">
                  produtivo.
                </span>
              </h1>

              <p className="pt-4 px-2 md:px-0 text-base/5 md:text-base lg:text-lg text-zinc-900/90 font-medium">
                Organize tudo o que importa em um só lugar. Simplifique sua
                rotina e alcance resultados excepcionais em um só lugar!
              </p>

              <div className="items-center justify-center pt-7">
                <div className="flex flex-col gap-4">
                  <Button className="relative flex items-center gap-2 px-8 py-3 h-10 text-base font-semibold rounded-full shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] bg-white border border-transparent overflow-hidden group transition-all duration-200 ease-out active:scale-95 hover:bg-green-400 hover:text-white text-black">
                    <span className="relative z-10">Saiba mais</span>
                    <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                      <PlayCircle size={12} />
                    </span>
                    <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] transition-all duration-500 ease-out group-hover:w-full"></span>
                  </Button>
                  <Button className="relative flex items-center gap-2 px-8 py-4 h-10 text-base font-semibold rounded-full shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] bg-zinc-900 border border-transparent overflow-hidden group transition-all duration-200 ease-out active:scale-95 hover:bg-green-400 text-white">
                    <span className="relative z-10">Quero ter acesso</span>
                    <span className="relative z-10 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                    <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] transition-all duration-500 ease-out group-hover:w-full"></span>
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ opacity, scale }}
              className="flex flex-col justify-center items-center relative mt-8 md:mt-0 fade-in-section"
            >
              <iframe
                id="panda-5fb53f44-7a7c-4788-835a-ec57365e5f6c"
                src="https://player-vz-a996022d-e6b.tv.pandavideo.com.br/embed/?v=5fb53f44-7a7c-4788-835a-ec57365e5f6c"
                style={{ border: "none" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen={true}
                width="350"
                height="350"
                fetchpriority="high"
                className="rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </div>
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
          <PricingCard />
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
        </div>
      </footer>
      <ChatBubble />
    </div>
  );
}
