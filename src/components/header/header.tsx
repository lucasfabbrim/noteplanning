import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-950 w-full h-10 flex justify-center">
      <h1 className="text-wrap text-zinc-300 flex flex-row items-center text-xs gap-3">
        <ChevronLeft size={12} className="text-zinc-500" /> Garanta agora a sua
        pré-venda do <span className="-ml-2 font-semibold">Note Private</span>
        <ChevronRight size={12} className="text-zinc-500" />
      </h1>
    </header>
  );
}
