"use client";

import ButtonPrimary from "@/components/button-primary";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "@/components/carousel/carousel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="text-white mx-auto bg-zinc-200/50 w-full pt-14 md:pt-4"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center md:text-start text-center justify-center text-white md:gap-24">
        <div className="md:pt-20">
          <Carousel />
        </div>
        <div className="flex flex-col mt-10 md:-mt-14">
          <h1 className="md:pt-2 tracking-tighter bg-gradient-to-r from-neutral-600 to-stone-900 bg-clip-text text-transparent text-3xl md:text-4xl font-bold flex flex-col md:max-w-xl">
            Mate sua curiosidade.
          </h1>
          <p className="px-10 md:px-0 pt-4 md:pb-2 text-sm md:text-base text-zinc-700/90 font-medium md:max-w-lg">
            Inspire-se nos exemplos de áreas de membros pré-configuradas que
            deixamos criados para você.
          </p>
          <div className="px-10 md:px-0 pb-10 flex items-center justify-center md:justify-start">
            <ButtonPrimary />
          </div>
        </div>
      </div>
    </section>
  );
}
