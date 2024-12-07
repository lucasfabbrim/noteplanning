import Image from "next/image";

import Phone2 from "@/assets/iPhone 14 Pro.png";
import ButtonPrimary from "./button-primary";

export default function PhoneSection() {
  return (
    <section
      id="hero"
      className="text-white mx-auto bg-white w-full pt-10 pb-10"
    >
      <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-center md:text-start text-center justify-center text-white gap-32">
        <div className="relative aspect-auto top-10 md:top-10 -mt-32 md:-mt-4">
          <Image
            src={Phone2}
            alt="Widget"
            width={200}
            height={400}
            className="object-contain relative "
            priority
          />
        </div>

        <div className="flex flex-col pt-4 md:pt-10">
          <h1 className="pt-3 tracking-tighter pb-2 bg-gradient-to-r from-neutral-500 to-stone-950 bg-clip-text text-transparent text-xl md:text-4xl font-bold flex flex-col">
            #DESAFIOPLANNING
          </h1>
          <h1 className="md:pt-2 tracking-tighter bg-gradient-to-r from-neutral-600 to-stone-900 bg-clip-text text-transparent text-3xl md:text-5xl font-bold flex flex-col max-w-2xl">
            Um grupo de WhatsApp exclusivo para pré-venda.
          </h1>
          <p className="px-8 md:px-0 pt-2 text-sm md:text-base text-zinc-700/90 max-w-md">
            Faça parte da nossa comunidade e acompanhe novidades e desafios
            exclusivos para Dezembro!
          </p>
          <div className="flex items-center justify-center md:justify-start pb-10">
            <ButtonPrimary />
          </div>
        </div>
      </div>
    </section>
  );
}
