import { SubTitle } from "../entreteniment/subtitle-entreteniment";
import { Title } from "../entreteniment/title-entreteniment";
import { ButtonPhone } from "../hero-section/button-phone";

export default function Entreteniment() {
  return (
    <section className="relative mx-auto mt-16 max-w-full p-6 pt-4 pb-10 lg:px-8">
      <div className="relative flex flex-col items-center text-center px-4 pt-24">
        <div
          className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-zinc-500 to-zinc-800 opacity-20" />
        </div>
        <Title />
        <SubTitle />
        <div className="pt-8">
          <ButtonPhone />
        </div>
      </div>
    </section>
  );
}
