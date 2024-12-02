import avatar1 from "@/assets/avatares/avatar-1.png";
import avatar2 from "@/assets/avatares/avatar-2.png";
import avatar3 from "@/assets/avatares/avatar-3.png";
import avatar4 from "@/assets/avatares/avatar-4.png";
import avatar5 from "@/assets/avatares/avatar-5.png";
import avatar6 from "@/assets/avatares/avatar-6.png";
import avatar7 from "@/assets/avatares/avatar-7.png";
import avatar8 from "@/assets/avatares/avatar-8.png";
import avatar9 from "@/assets/avatares/avatar-9.png";
import Image from "next/image";

const testimonials = [
  {
    text: "Como estudante, o Note Planning tem sido essencial para organizar minhas aulas e prazos. Simplesmente indispensável!",
    imageSrc: avatar9.src,
    name: "Lucas Mendes",
    username: "@lucasmendesss_10",
  },
  {
    text: "Desde que comecei a usar o Note Planning, nunca mais perdi um prazo. É perfeito para gerenciar estudos e trabalhos.",
    imageSrc: avatar2.src,
    name: "Phelipi Ordonhas",
    username: "@oordonhas",
  },
  {
    text: "Este planner transformou minha rotina de estudos. Agora consigo equilibrar tudo com muito mais facilidade!",
    imageSrc: avatar1.src,
    name: "Maria Eduarda Briski",
    username: "@dudaa.briski",
  },

  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-10 text-white mx-auto pb-20">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <div className="items-center border border-zinc-900 text-white text-xs rounded-[10px] flex ">
          <span className="pl-4 py-1 text-zinc-300">Avaliações</span>
          <div className="h-1.5 w-1.5 bg-white rounded-full mx-2.5 shadow-xl shadow-white/30 animate-pulse" />
        </div>
        <h1 className="pt-4 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-2xl font-bold">
          O que nossos usuários dizem
        </h1>
        <p className="px-2 pt-3 text-sm text-zinc-400/90">
          De uma ideia intuitivo a recursos poderosos, nosso planner se tornou
          uma ferramenta essencial para usuários.
        </p>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-10 mt-10 justify-center [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {firstColumn.map(({ text, imageSrc, name, username }) => (
              <div
                key={username}
                className="p-10 border border-zinc-900 rounded-3xl shadow-xl shadow-zinc-900/30 max-w-xs bg-zinc-900/70"
              >
                <div className="text-zinc-300 italic text-start text-xs">
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
                    <div className="font-medium text-zinc-100 tracking-tighter leading-5 text-sm">
                      {name}
                    </div>
                    <div className="text-zinc-400/90 tracking-tighter leading-5 text-xs">
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
