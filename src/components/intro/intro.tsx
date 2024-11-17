import { LucideIcon, Wallet } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function Intro() {
  return (
    <section
      id="Intro"
      className="mx-auto max-w-7xl p-8 mt-10 py-16 md:py-24 lg:px-8 mb-96"
    >
      <div className="grid items-center justify-between gap-5 md:grid-cols-2">
        <h1 className="leading-none bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500  text-3xl font-bold md:text-5xl/[1.07] text-start">
          Quem disse que organização tem que ser chato?
        </h1>
        <h3 className="pt-2 text-sm text-zinc-400/80 font-medium text-start">
          Com o{" "}
          <span className="text-zinc-300/90 font-medium">Note Private</span>,
          gerenciar a organização da sua vida é fácil. Nosso template simplifica
          sua tomada de decisões e coloca o poder da organização na ponta dos
          seus dedos.
          <span className="text-zinc-200/90 font-medium text-start text-sm">
            {" "}
            Diga não às planilhas e ferramentas projetadas nos anos 80.
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-24 gap-10">
        <CardTemplate
          title="Finanças"
          subtitle="Organize sua vida financeira."
          description="Organize sua vida Financeira."
          icon={Wallet}
        />
        <CardTemplate
          title="Finanças"
          subtitle="Organize sua vida financeira."
          description="Organize sua vida Financeira."
          icon={Wallet}
        />
        <CardTemplate
          title="Finanças"
          subtitle="Organize sua vida financeira."
          description="Organize sua vida Financeira."
          icon={Wallet}
        />
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

function CardTemplate({ title, subtitle, icon: Icon, description }: CardProps) {
  return (
    <Card className="rounded-2xl flex flex-col h-[300px] overflow-hidden bg-zinc-900/20 border-zinc-900/40 shadow-2xl shadow-zinc-300/5">
      <CardContent className="flex flex-col relative">
        <div className="bg-white py-12 mt-10 rounded-l-[20px] flex items-center text-center justify-center gap-4 left-6 relative opacity-75 shadow-2xl shadow-white/10">
          <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
          <h2 className="text-2xl font-extrabold text-black">{title}</h2>
          <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-zinc-900/50 to-zinc-900/5" />
        </div>
      </CardContent>
      <CardFooter className="justify-start items-start flex flex-col gap-1">
        <p className="text-white/80 font-semibold text-lg">{subtitle}</p>
        <p className="text-zinc-400/90 text-sm">{description}</p>
      </CardFooter>
    </Card>
  );
}
