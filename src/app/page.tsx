import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button";
import { GoogleAnalytics } from "@next/third-parties/google";
import Macbook from "@/assets/macbook.png";
import Image from "next/image";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";
import Hand from "@/assets/hand.png";
import cell from "@/assets/cell.png";

import { Card, CardContent } from "@/components/ui/card";

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
          <div className="flex flex-col justify-center items-center relative pt-14 ">
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
                width={300} // Define a largura
                height={400} // Define a altura
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
