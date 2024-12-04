import ButtonPrimary from "@/components/button-primary";
import { Card, CardContent } from "@/components/ui/card";

export default function VideoSection() {
  return (
    <section id="testimonials" className="text-white mx-auto py-10 ">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <div className="items-center border border-[#141414] text-white rounded-full flex">
          <span className="px-3 py-1 text-[#767676] text-xs">
            Conheça de perto nosso template pré-personalizado!
          </span>
        </div>
        <h1 className="pt-4 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
          Mate sua curiosidade
        </h1>
        <p className="px-2 md:px-16 pt-3 text-sm md:text-base text-zinc-400/90">
          Inspire-se nos exemplos de áreas de membros pré-configuradas que
          deixamos criados para você.
        </p>
        <div className="mt-8 relative">
          <div className="bg-green-500 opacity-60 absolute z-0 inset-0 blur-3xl h-16 w-60 left-8 top-4" />

          <Card className="w-full rounded-lg flex mx-auto overflow-hidden border-transparent bg-transparent relative z-10">
            <CardContent className="p-0 relative">
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe
                  src="https://www.youtube.com/embed/3P-I5UI-KwA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full relative z-10"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <ButtonPrimary />
      </div>
    </section>
  );
}
