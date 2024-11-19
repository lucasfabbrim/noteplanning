import { Title } from "./title";
import { SubTitle } from "./subtitle";
import { ButtonPhone } from "./button-phone";
import Image from "next/image";

import ProductImage from "@/assets/note-private.png";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-auto overflow-hidden transform-gpu mb-4"
    >
      <div className="relative flex flex-col items-center text-center px-4 pt-16">
        <Title />
        <SubTitle />
        <div className="flex flex-col items-center">
          <ButtonPhone />
          <h1 className="text-zinc-100/90 pt-6 text-xs font-medium">
            Saiba mais
          </h1>
          <ArrowDown
            size={12}
            strokeWidth={2}
            className="text-zinc-100/90 items-center text-center mt-1"
          />
        </div>
        <div className="relative flex flex-col px-2 pt-8">
          <Image
            src={ProductImage}
            alt=""
            width={0}
            height={0}
            className="w-full rounded-[10px] relative"
          />
        </div>
      </div>
    </section>
  );
}
