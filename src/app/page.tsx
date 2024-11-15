import About from "@/components/about/about";
import Hero from "@/components/hero-section/hero";

export default function Home() {
  return (
    <div className="h-auto bg-black font-inter">
      <main className="flex flex-col">
        <Hero />
        <About />
      </main>
    </div>
  );
}
