import Entreteniment from "@/components/entreteniment/entreteniment";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero-section/hero";
import Intro from "@/components/intro/intro";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />
      <main className="flex flex-col">
        <Hero />
        <Intro />
        <Entreteniment />
      </main>
      <Footer />
    </div>
  );
}
