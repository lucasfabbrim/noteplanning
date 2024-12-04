"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import ButtonPrimary from "@/components/button-primary";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "@/components/carousel/carousel";

export default function AboutSection() {
  return (
    <section id="testimonials" className="text-white mx-auto py-10">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <div className="items-center border border-[#141414] text-white rounded-full flex">
          <span className="px-3 py-1 text-[#767676] text-xs">
            Conheça de perto nosso template pré-personalizado!
          </span>
        </div>
        <h1 className="pt-4 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
          Mate sua curiosidade
        </h1>
        <p className="px-2 md:px-16 pt-3 text-sm md:text-base text-zinc-400/90 mb-8">
          Inspire-se nos exemplos de áreas de membros pré-configuradas que
          deixamos criados para você.
        </p>

        <div className="mt-4 -mb-10">
          <Carousel />
        </div>

        <div className="mt-8">
          <ButtonPrimary />
        </div>
      </div>
    </section>
  );
}
