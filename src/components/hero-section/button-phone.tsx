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
          Entre na lista de pré-venda
          <ChevronRight
            size={3}
            strokeWidth={3}
            className="text-zinc-400 h-2 w-2"
          />
        </h1>
      </Button>
      <div
        className="absolute inset-0 mx-4"
        style={{
          borderBottom: "1px solid transparent",
          borderImage:
            "linear-gradient(to right, transparent, white, transparent) 1",
        }}
      />
    </div>
  );
}
