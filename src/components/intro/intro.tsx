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
        </h3>
        <span className="text-zinc-200/90 font-medium text-start text-sm -mt-2">
          {" "}
          Diga não às planilhas e ferramentas projetadas nos anos 80.
        </span>
      </div>
    </section>
  );
}
