import Hero from "@/components/hero-section/hero";
import Intro from "@/components/intro/intro";

export default function Home() {
  return (
    <div className="h-screen bg-black font-inter">
      <main className="flex flex-col">
        <Hero />
        <Intro />
      </main>
    </div>
  );
}
