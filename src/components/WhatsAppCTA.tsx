import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhatsAppCTA() {
  return (
    <div className="bg-gradient-to-tr from-green-600 via-green-600 to-green-700  flex flex-col items-center text-center space-y-6 w-full mx-auto pb-14">
      <div className="bg-green-500 rounded-full p-4 shadow-2xl inline-block mt-10">
        <svg
          className="w-16 h-16 text-white px-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="text-white space-y-3 pt-4 px-8">
        <h2 className="text-2xl font-bold">Ainda está com dúvida?</h2>
        <p className="text-zinc-200 font-medium text-sm ">
          Fique em paz! Clique no botão abaixo para falar com um consultor do
          nosso time. Estamos prontos e ansiosos para te atender.
        </p>
      </div>

      <div className="flex justify-center items-center pt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          whileInView={{ opacity: 1 }}
          onClick={() => window.open("https://wa.me/19993356780", "_blank")}
          className="bg-gradient-to-tl from-green-900 via-green-800 to-green-900 rounded-full h-14 flex items-center gap-3 px-8 shadow-xl shadow-green-800"
        >
          <span className="bg-white bg-clip-text text-transparent font-semibold text-base">
            Quero falar com um especialista
          </span>
          <ArrowRight size={16} className="text-green-600" strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}
