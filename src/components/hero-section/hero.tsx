import { Title } from "./title";
import { SubTitle } from "./subtitle";
import { ButtonPhone } from "./button-phone";
import Image from "next/image";

import ProductImage from "@/assets/note-private.png";
import { ArrowDown } from "lucide-react";
import { Gradient } from "./gradient";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden transform-gpu"
    >
      <Gradient />
      <div className="relative flex flex-col items-center text-center px-3.5 pt-24">
        <Title />
        <SubTitle />
        <div className="flex flex-col items-center">
          <div className="flex relative">
            <ButtonPhone />
            <div
              className="absolute inset-0 mx-4"
              style={{
                borderBottom: "0.2px solid transparent",
                borderImage:
                  "linear-gradient(to right, transparent, gray, transparent) 1",
              }}
            />
          </div>
          <h1 className="text-zinc-500 pt-6 text-xs">Saiba mais</h1>
          <ArrowDown
            size={10}
            strokeWidth={2}
            className="text-zinc-500 items-center text-center mt-2"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
