import Brands from "@/components/sections/brands/brands";
import Faqs from "@/components/sections/faqs/faqs";
import Hero from "@/components/sections/hero/hero";
import Testimonials from "@/components/sections/testimonials/testimonials-section";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <header className="py-2 bg-gradient-to-b from-white to-zinc-300 justify-center text-center">
        <span className="bg-gradient-to-b from-black to-zinc-900 text-transparent bg-clip-text text-sm font-semibold tracking-tighter">
          Falta pouco para você organizar sua vida!
        </span>
      </header>
      <main className="flex flex-col">
        <Hero />
        <Brands />
        <Testimonials />
        <Faqs />
      </main>
    </div>
  );
}
