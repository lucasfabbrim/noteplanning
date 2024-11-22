import Footer from "@/components/footer/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="h-screen bg-black font-inter">
      <GoogleAnalytics gaId="G-FXZJ4HXH96" />
      <main className="flex flex-col"></main>
      <Footer />
    </div>
  );
}
