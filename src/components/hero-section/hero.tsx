import { ChevronRight, Subtitles } from "lucide-react";
import { Gradient } from "./gradient";
import { Title } from "./title";
import { SubTitle } from "./subtitle";
import { ButtonPhone } from "./button-phone";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden transform-gpu"
    >
      <div className="flex flex-col items-center text-center px-3.5 pt-10">
        <Title />
        <SubTitle />
        <ButtonPhone />
      </div>
    </section>
  );
}
