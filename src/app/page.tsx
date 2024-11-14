import Header from "@/components/header/header";
import Hero from "@/components/hero-section/hero";

export default function Home() {
  return (
    <div className="h-screen bg-black font-inter">
      <Header />
      <main className="flex flex-col">
        <Hero />
      </main>
    </div>
  );
}
