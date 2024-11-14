import Image from "next/image";
import { Button } from "@/components/ui/button";
import Case from "@/assets/note-private.png";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-1">
            Note Private
          </h1>
          <p className="text-zinc-300 text-sm mb-8">Olá</p>
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src={Case}
              alt="Case Image"
              width={600}
              height={400}
              className="w-full rounded-[8px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-zinc-900/10 " />
          </div>
          <Button
            variant="default"
            className="mt-10 h-10 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/50 transition-colors duration-300 text-lg px-8 py-3 rounded-xl"
          >
            Pré-venda
            <ChevronRight size={12} strokeWidth={3} />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-zinc-800 to-zinc-950 z-0" />
    </section>
  );
}
