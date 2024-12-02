"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "Como o Layers é diferente de outras ferramentas de design?",
    answer:
      "Diferentemente das ferramentas de design tradicionais, o Layers prioriza velocidade e simplicidade sem sacrificar poder. Nossa interface inteligente se adapta ao seu fluxo de trabalho, reduzindo cliques e mantendo você no seu fluxo criativo.",
  },
  {
    question: "Existe uma curva de aprendizado?",
    answer:
      "O Layers é projetado para ser intuitivo desde o primeiro dia. A maioria dos designers se torna produtiva em horas, não semanas. Também fornecemos tutoriais interativos e documentação abrangente para ajudar você a começar.",
  },
  {
    question: "Como você lida com o controle de versão?",
    answer:
      "Cada alteração no Layers é automaticamente salva e versionada. Você pode revisar o histórico, restaurar versões anteriores e criar versões nomeadas para marcos importantes.",
  },
  {
    question: "Posso trabalhar offline?",
    answer:
      "Sim! O Layers inclui um modo offline robusto. As alterações são sincronizadas automaticamente quando você volta a ficar online, para que você possa continuar trabalhando em qualquer lugar.",
  },
  {
    question: "Como o Layers lida com a colaboração?",
    answer:
      "O Layers é construído para colaboração. Você pode convidar membros da equipe para seus projetos, compartilhar feedback e trabalhar juntos em tempo real.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="text-white mx-auto py-20 px-1 bg-gradient-to-b from-transparent via-transparent to-zinc-900/30"
    >
      <div className="flex flex-col items-center text-center justify-center text-white">
        <div className="items-center border border-zinc-600 text-white text-xs rounded-full flex">
          <span className="pl-4 py-1 text-zinc-300">Perguntas Frequentes</span>
          <div className="h-1.5 w-1.5 bg-white rounded-full mx-2.5 shadow-xl shadow-white/30 animate-pulse" />
        </div>
        <h1 className="pt-6 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-4xl md:text-4xl font-bold flex flex-col">
          Perguntas?
          <span className="text-2xl px-4">Estamos aqui para responder!</span>
        </h1>

        <div className="text-start items-center mt-12 flex flex-col gap-6 w-full max-w-3xl px-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bborder border-zinc-900 rounded-[12px] bg-zinc-900/70 p-5 w-full "
            >
              <button
                className="flex justify-between items-center w-full text-left gap-5"
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? null : index)
                }
              >
                <h3 className="font-bold tracking-tighter text-white text-sm">
                  {faq.question}
                </h3>
                <Plus
                  className={twMerge(
                    "text-zinc-400 transition-transform",
                    selectedIndex === index && "rotate-45",
                  )}
                />
              </button>
              {selectedIndex === index && (
                <div className="mt-6">
                  <p className="text-zinc-400 text-xs">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
