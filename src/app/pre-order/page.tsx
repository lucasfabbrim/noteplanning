import Footer from "@/components/footer/footer";
import PreVendaForm from "@/components/pre-order/PreSaleForm";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="px-8 pt-10 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-1 text-center ">
          Entre para lista de espera!
        </h1>
        <h3 className="text-sm font-normal mb-8 text-center text-zinc-400">
          Preencha o formulário com suas informações.
        </h3>
        <PreVendaForm />
      </main>
      <Footer />
    </div>
  );
}
