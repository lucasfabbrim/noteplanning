export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl p-8 py-16 md:py-24 lg:px-8 mb-96"
    >
      <div className="grid items-start justify-between gap-5 md:grid-cols-2">
        <h1 className="leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-400 to-zinc-800 pr-8 text-3xl font-bold tracking-tight md:pr-16 md:text-5xl/[1.07]">
          Quem disse que organização tem que ser chato?
        </h1>
        <h3 className="pt-5 text-base text-zinc-400/80 font-medium">
          Com o <span className="text-zinc-300 font-medium">Note Private</span>,
          gerenciar a organização da sua vida é fácil, fortalecedor e nada
          chato. Nosso template intuitiva traz clareza, simplifica sua tomada de
          decisões financeiras e coloca o poder da organização na ponta dos seus
          dedos.
          <span className="text-zinc-300 font-medium">
            {" "}
            Diga não às planilhas e ferramentas projetadas nos anos 80.
          </span>
        </h3>
      </div>
    </section>
  );
}
