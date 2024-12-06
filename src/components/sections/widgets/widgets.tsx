import Image from "next/image";
import WidgetImage from "@/assets/phone.png";
import ButtonPrimary from "@/components/button-primary";

export default function Widgets() {
  return (
    <section
      id="widgets"
      className="text-white mx-auto bg-zinc-200/50 w-full mt-10"
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center md:text-start text-center justify-center ">
        <div className="relative aspect-auto">
          <Image
            src={WidgetImage}
            alt="Widget"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col pt-4 md:pt-10">
          <h1 className="tracking-tighter pb-2 bg-gradient-to-r from-neutral-500 to-stone-950 bg-clip-text text-transparent text-xl md:text-4xl font-bold">
            Widgets
          </h1>
          <h1 className="md:pt-2 tracking-tighter bg-gradient-to-r from-neutral-600 to-stone-900 bg-clip-text text-transparent text-3xl md:text-5xl font-bold">
            Tudo na palma da sua mão!
          </h1>
          <p className="px-8 md:px-0 pt-2 text-sm md:text-base text-zinc-700/90">
            Acesse tudo de forma rápida e organizada com widgets inteligentes.
          </p>
          <div className="flex items-center justify-center md:justify-start pb-10">
            <ButtonPrimary />
          </div>
        </div>
      </div>
    </section>
  );
}
