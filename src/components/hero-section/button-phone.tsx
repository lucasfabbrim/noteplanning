import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonPhone() {
  return (
    <div className="block lg:hidden items-center pt-8 relative">
      <Button
        variant="default"
        className="relative bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded-full"
      >
        <h1 className="flex px-2 gap-2.5 items-center">
          Pré-venda
          <ArrowRight size={4} strokeWidth={2} className="text-zinc-600" />
        </h1>
      </Button>
    </div>
  );
}
