import avatar1 from "@/assets/testimonials/avatar-1.jpg";
import avatar2 from "@/assets/testimonials/avatar-2.jpg";
import avatar3 from "@/assets/testimonials/avatar-3.jpg";
import avatar4 from "@/assets/testimonials/avatar-4.jpg";
import avatar5 from "@/assets/testimonials/avatar-5.jpg";
import avatar6 from "@/assets/testimonials/avatar-6.jpg";
import avatar7 from "@/assets/testimonials/avatar-7.jpg";
import avatar8 from "@/assets/testimonials/avatar-8.jpg";
import avatar9 from "@/assets/testimonials/avatar-9.jpg";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "Como estudante, o Note Planning tem sido essencial para organizar minhas aulas e prazos. Simplesmente indispensável!",
    imageSrc: avatar1.src,
    name: "Larissa Fabbri",
    username: "@larissafabbri",
  },
  {
    text: "Desde que comecei a usar o Note Planning, nunca mais perdi um prazo. É perfeito para gerenciar estudos e trabalhos.",
    imageSrc: avatar2.src,
    name: "Gabriel Rezende",
    username: "@ga.rzd",
  },
  {
    text: "Este planner transformou minha rotina de estudos. Agora consigo equilibrar tudo com muito mais facilidade!",
    imageSrc: avatar3.src,
    name: "Maria Eduarda Briski",
    username: "@dudaa.briski",
  },
  {
    text: "Fiquei impressionada com a rapidez com que consegui integrar o Note Planning na minha rotina. Agora tudo flui muito melhor!",
    imageSrc: avatar4.src,
    name: "Elaine Cristina",
    username: "@elainebrisque",
  },
  {
    text: "Organizar e executar eventos ficou muito mais fácil. O Note Planning me ajuda a acompanhar tudo e não deixar nada passar despercebido.",
    imageSrc: avatar5.src,
    name: "Mateus Eler",
    username: "@ma_eler",
  },
  {
    text: "A personalização e a praticidade deste planner são incríveis. Ele se adapta exatamente às minhas necessidades!",
    imageSrc: avatar6.src,
    name: "Zé Felipe",
    username: "@zeefelipee",
  },
  {
    text: "Adotar o Note Planning na nossa equipe melhorou muito a organização e a comunicação entre todos. Simplesmente essencial!",
    imageSrc: avatar7.src,
    name: "Vitor Navarro",
    username: "@vitornavarro_",
  },
  {
    text: "Com o Note Planning, consigo gerenciar tarefas, acompanhar o progresso e organizar documentos, tudo em um só lugar.",
    imageSrc: avatar8.src,
    name: "Caio Porfirio",
    username: "@caiohfp",
  },
  {
    text: "A interface simples e os recursos robustos do Note Planning atendem perfeitamente às minhas necessidades no dia a dia.",
    imageSrc: avatar9.src,
    name: "Guilherme Godoy",
    username: "@gui.godoy04",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="text-white mx-auto py-10">
      <div className="flex flex-col items-center text-center justify-center text-black">
        <h1 className="pt-4 tracking-tighter bg-gradient-to-r from-neutral-500 to-stone-950 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
          O que nossos usuários dizem
        </h1>
        <p className="px-2 md:px-16 pt-3 text-sm md:text-base text-zinc-800/90">
          De uma ideia intuitivo a recursos poderosos, nosso planner se tornou
          uma ferramenta essencial.
        </p>
        <div className="flex items-center pt-4">
          <Star size={18} className="fill-black text-transparent" />
          <Star size={18} className="fill-black text-transparent" />
          <Star size={18} className="fill-black text-transparent" />
          <Star size={18} className="fill-black text-transparent" />
          <Star size={18} className="fill-black text-transparent" />
        </div>
        <div className="flex justify-center gap-3">
          <div className="flex flex-col gap-8 mt-10 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {firstColumn.map(({ text, imageSrc, name, username }) => (
              <div
                key={username}
                className="p-10 border border-none rounded-3xl shadow-xl shadow-black/10 max-w-xs bg-zinc-100"
              >
                <div className="text-zinc-950 italic text-start text-sm">
                  "{text}"
                </div>
                <div className="flex mt-10 gap-3 items-center text-start">
                  <div className="flex items-center gap-2">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-medium text-black tracking-tighter leading-4 text-sm">
                      {name}
                    </div>
                    <div className="text-zinc-800/90 tracking-tighter leading-4 text-xs">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-10 mt-10 lg:mt-8 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {secondColumn.map(({ text, imageSrc, name, username }) => (
              <div
                key={username}
                className="p-10 border border-none rounded-3xl shadow-xl shadow-black/10 max-w-xs bg-zinc-100"
              >
                <div className="text-zinc-950 italic text-start text-sm">
                  "{text}"
                </div>
                <div className="flex mt-10 gap-3 items-center text-start">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-medium text-black tracking-tighter leading-4 text-sm">
                      {name}
                    </div>
                    <div className="text-zinc-800/90 tracking-tighter leading-4 text-xs">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-10 mt-10 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {thirdColumn.map(({ text, imageSrc, name, username }) => (
              <div
                key={username}
                className="p-10 border border-none rounded-3xl shadow-xl shadow-black/10 max-w-xs bg-zinc-100"
              >
                <div className="text-zinc-950 italic text-start text-sm">
                  "{text}"
                </div>
                <div className="flex mt-10 gap-3 items-center text-start">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="font-medium text-black tracking-tighter leading-4 text-sm">
                      {name}
                    </div>
                    <div className="text-zinc-800/90 tracking-tighter leading-4 text-xs">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
