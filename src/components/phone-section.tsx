import { motion } from "framer-motion";
import Image from "next/image";

import Phone2 from "@/assets/iPhone 14 Pro.png";

export default function PhoneSection() {
  return (
    <section className="bg-black py-16 px-4 md:py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-zinc-900/50 rounded-[35px] border border-zinc-900 p-6 md:p-8 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block relative aspect-[4/3] md:aspect-auto top-9 left-36">
                <Image
                  src={Phone2}
                  alt="Discord community screenshot"
                  width={300}
                  height={300}
                  className="rounded-[10px] object-cover z-10 relative"
                />
                <div className="bg-[#00E472] opacity-30 absolute inset-0 blur-3xl w-[190px] h-[500px] left-8 top-10" />
              </div>
              <div className="space-y-4">
                <div className="items-center gap-3 border-b border-b-zinc-800/70 text-center justify-center flex flex-col">
                  <h4 className="bg-green-400 bg-clip-text text-transparent font-extrabold tracking-tighter text-base pb-3">
                    #DesafioPlanning
                  </h4>
                  <h3 className="text-2xl/8 items-center gap-4 md:text-3xl font-semibold text-white pb-4 text-center tracking-tighter">
                    Um grupo de WhatsApp exclusivo para pré-venda.
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-normal tracking-tighter items-center text-center">
                  Faça parte da nossa comunidade e acompanhe novidades e
                  desafios exclusivos para Dezembro!
                </p>
              </div>
              <div className="block lg:hidden ">
                <div className="relative aspect-[8/4] md:aspect-auto top-7 left-7">
                  <Image
                    src={Phone2}
                    alt="Discord community screenshot"
                    width={230}
                    height={300}
                    className="rounded-[10px] relative z-10"
                  />
                  <div className="bg-[#00E472] opacity-30 absolute inset-0 blur-3xl w-[200px] h-[340px] left-5 top-10" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
