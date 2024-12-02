import Faqs from "@/components/sections/faqs/faqs";
import Testimonials from "@/components/sections/testimonials/testimonials-section";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Testimonials />
      <Faqs />
    </div>
  );
}
