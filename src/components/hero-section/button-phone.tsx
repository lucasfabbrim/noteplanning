import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function ButtonPhone() {
  return (
    <div className="block lg:hidden items-center pt-8 relative">
      <Button
        variant="default"
        className="relative bg-zinc-900 border border-zinc-800/40 text-zinc-200 rounded-full flex"
      >
        <h1 className="flex px-2 gap-2 items-center">
          Pré-venda
          <ChevronRight
            size={3}
            strokeWidth={3}
            className="text-zinc-600 h-2 w-2"
          />
        </h1>
      </Button>
    </div>
  );
}
