import DiscordIcon from "@/assets/discord-gr.svg";
import FigmaIcon from "@/assets/figma-gr.svg";
import NetflixIcon from "@/assets/netflix-gr.svg";

export default function Brands() {
  return (
    <section id="brands" className="text-white mx-auto pt-4 pb-4 ">
      <div className="flex flex-col items-center text-center justify-center text-white">
        <h1 className="pt-4 tracking-tighter bg-gradient-to-r from-neutral-100 to-stone-400 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">
          Faça como as grandes empresas do mercado utilizando Notion.
        </h1>
        <p className="px-2 md:px-16 pt-3 text-sm md:text-base text-zinc-400/90">
          Com o nosso template, manter sua produtividade e organização nunca foi
          tão fácil!
        </p>
        <div className="flex items-center text-center justify-center gap-5 pt-2">
          <NetflixIcon />
          <DiscordIcon />
          <FigmaIcon />
        </div>
      </div>
    </section>
  );
}
