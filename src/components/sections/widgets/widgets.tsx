import ButtonPrimary from "@/components/button-primary";
import Image from "next/image";
import WidgetImage from "@/assets/hand.png";

export default function Widgets() {
  return (
    <section id="hero" className="text-white mx-auto py-10 px-1">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <Image
          src={WidgetImage}
          alt="Widget"
          width={300}
          height={400}
          className="object-contain relative ml-12"
          priority
        />
        <div className="mt-4 items-center border border-zinc-900 text-white text-xs rounded-full flex ">
          <div className="h-2 w-2 bg-green-400 rounded-full mx-2.5 shadow-xl shadow-white/30 animate-pulse" />
          <span className="pr-4 py-1 text-zinc-300">Widgets</span>
        </div>
        <h1 className="pt-6 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold flex flex-col">
          Tudo na palma da sua mão!
        </h1>
        <p className="px-8 md:px-16 pt-2 text-sm md:text-base text-zinc-400/90">
          Afesse tudo de forma rápida e organizada com widgets inteligentes.
        </p>
        <ButtonPrimary />
      </div>
    </section>
  );
}
