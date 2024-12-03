import { motion } from "framer-motion";
import { SquareDashedMousePointer } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Terei mais algum custo depois de comprar?",
    answer:
      "Os únicos investimentos que você fará é na academia (que você provavelmente já paga) e na sua alimentação. Sempre sugerimos alimentos de fácil acesso, para que você não enfrente dificuldade de seguir a dieta.",
  },
  {
    question: "O Notion é gratuito?",
    answer: "Não, todos os aplicativos necessários são gratuitos.",
  },
  {
    question: "Não sei utilizar o Notion, consiguirei utilizar?",
    answer:
      "Sim, todas as aulas ficam gravadas e disponíveis para você assistir quando quiser.",
  },
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer:
      "Sim, todas as aulas ficam gravadas e disponíveis para você assistir quando quiser.",
  },
  {
    question: "Eu consigo personalizar o template?",
    answer:
      "Sim, todas as aulas ficam gravadas e disponíveis para você assistir quando quiser.",
  },
];

export default function FrequentlyAsked() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container pb-8 text-white p-6 bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-black border-t border-t-zinc-800">
      <div className="w-auto lg:px-28 xl:px-28 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="pt-10 flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
              Perguntas Frequentes
            </h1>
            <span className="text-green-400 text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold">
              F.A.Q
            </span>
          </div>
          <div className="space-y-4 border-t border-t-zinc-900 pt-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-base md:text-lg lg:text-lg xl:text-lg text-white w-[200px] md:w-auto lg:w-auto xl:w-auto">
                    {item.question}
                  </span>
                  <SquareDashedMousePointer
                    size={20}
                    className={`transition-transform duration-200 text-green-400 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    maxHeight: openIndex === index ? "500px" : "0px",
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden bg-zinc-900/30 border-t border-t-zinc-900/90"
                  style={{ maxHeight: openIndex === index ? "auto" : 0 }}
                >
                  <div className="p-4">
                    <p className="text-zinc-200 text-sm lg:text-base md:text-base xl:text-base text-start">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
