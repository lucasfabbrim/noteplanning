import Image from "next/image";
import WidgetImage from "@/assets/hand.png";
import ButtonPrimary from "@/components/button-primary";

export default function Widgets() {
  return (
    <section id="hero" className="text-white mx-auto py-10 px-1 pt-40">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <Image
          src={WidgetImage}
          alt="Widget"
          width={300}
          height={400}
          className="object-contain relative "
          priority
        />
        <h1 className="pt-3 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-xl md:text-4xl font-bold flex flex-col">
          Widgets
        </h1>
        <h1 className="pt-4 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold flex flex-col">
          Tudo na palma da sua mão!
        </h1>
        <p className="px-8 md:px-16 pt-2 text-sm md:text-base text-zinc-400/90">
          Acesse tudo de forma rápida e organizada com widgets inteligentes.
        </p>
        <ButtonPrimary />
      </div>
    </section>
  );
}
