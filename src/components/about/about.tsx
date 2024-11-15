export default function About() {
  return (
    <section
      id="about"
      className="relative w-full h-auto overflow-hidden mb-96 pt-20"
    >
      <div className="flex flex-col text-start items-start px-6">
        <h1 className="leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-400 to-zinc-800 text-3xl font-bold max-w-72 border-b border-b-zinc-800 pb-5">
          Quem disse que organização tem que ser chato?
        </h1>
        <h3 className="pt-5 text-zinc-400 text-wrap max-w-xs text-sm font-normal tracking-normal leading-tight">
          Com o <span className="text-zinc-300 font-bold">Note Private</span>,
          gerenciar a organização da sua vida é fácil, fortalecedor e nada
          chato. Nosso template intuitiva traz clareza, simplifica sua tomada de
          decisões financeiras e coloca o poder da organização na ponta dos seus
          dedos.
          <span className="text-zinc-300 font-bold">
            {" "}
            Diga não às planilhas e ferramentas projetadas nos anos 80.
          </span>
        </h3>
      </div>
    </section>
  );
}
