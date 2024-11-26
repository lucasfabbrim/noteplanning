import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-zinc-950 bg-zinc-950 p-6 text-center">
        <div className="flex justify-center">
          <div className="text-emerald-400">
            <CircleCheck size={38} />
          </div>
        </div>

        <div className="space-y-2 pt-3">
          <h1 className="text-xl font-semibold text-white">
            OBRIGADO PELA COMPRA!
          </h1>
          <p className="text-sm text-zinc-400">
            Aguarde, a equipe de vendas entrará em contato em breve!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-4">
          <Button
            variant="outline"
            className="w-full border-zinc-950 bg-black text-zinc-400 hover:bg-zinc-900 hover:text-white h-12 text-base"
            asChild
          >
            <Link href="/dashboard">Voltar para Página Inicial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
