import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";

export default function Home() {
  return (
    <div className="relative h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />

      <div
        className="absolute top-10 right-60 lg:top-0 lg:left-0  lg:w-[600px] w-[300px] h-[230px] bg-sky-500 blur[300px] opacity-20"
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
                <span className="bg-gradient-to-l from-blue-700 to-cyan-300 text-transparent bg-clip-text">
                  mais
                </span>
                .
              </h1>
              <h3 className="text-zinc-300/90 text-base text-center pt-3 font-medium">
                Seu novo planejamento totalmente personalizado está a um clique
                de distância.
              </h3>
              <div className="flex justify-center items-center pt-6">
                <Button className="bg-blue-600/10 border border-cyan-600 w-auto h-14 rounded-full text-lg text-white">
                  <span className="px-4 flex items-center gap-2">
                    Quero organizar minha vida
                    <ChevronRight size={12} strokeWidth={3} />
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
            <span className="bg-gradient-to-l from-blue-700 to-cyan-300 text-transparent bg-clip-text">
              Notion
            </span>
            .
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
