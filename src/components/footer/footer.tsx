import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="isolate mx-auto max-w-7xl p-6 pb-12 pt-16 lg:px-8">
      <div className="border-t border-white/10 pt-4 md:flex md:items-center md:justify-between">
        <div className="flex justify-center md:order-2 text-white pt-6 flex-col items-center text-center">
          <h1 className="text-white font-bold pb-3">Links</h1>
          <div className="flex flex-col md:flex-row gap-1 items-center text-zinc-500 font-bold text-sm">
            <h1>Central de Ajuda</h1>
            <span className="hidden md:block">|</span>
            <h1>Canal de Ideias</h1>
          </div>
        </div>
        <div className="flex justify-center md:order-2 text-white pt-6 flex-col items-center text-center">
          <h1 className="text-white font-bold pb-3">Siga o Note Planning</h1>
          <div className="flex flex-row gap-2 items-center">
            <Instagram size={18} className="text-zinc-500" />
            <Linkedin size={18} className="text-zinc-500" />
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4 leading-5 text-zinc-500 max-md:flex-col md:order-1 md:mt-0 md:border-none border-t border-t-zinc-800 pt-6">
          <div className="items-center text-center">
            <p className="font-semibold text-sm">
              Copyright © 2024 Todos os direitos reservados - Note Planning.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
