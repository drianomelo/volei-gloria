import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Volleyball,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Header />

      <div className="container mx-auto pt-20 mb-0">
        <h1 className="text-7xl flex flex-col gap-2 mb-10 font-medium">
          <span>Domine a quadra.</span>
          <span>
            Voe com o{" "}
            <span className="bg-linear-to-r from-[#277f4a] to-[#ffd21f] bg-clip-text text-transparent">
              Vôlei Glória.
            </span>
          </span>
        </h1>

        <a
          href="#"
          className="flex items-center gap-12 bg-zinc-950 w-fit text-white py-3.5 px-6 rounded-full"
        >
          Contato para Parcerias <ArrowRight size={18} />
        </a>
      </div>

      <Carousel />

      <div className="bg-zinc-950 w-full relative py-24 overflow-hidden">
        <Image
          src="/images/mao-bola.png"
          alt="Logo do time Vôlei Glória"
          width={700}
          height={100}
          className="absolute top-2/4 -translate-y-2/4 -left-24"
        />

        <div className="container mx-auto flex flex-col justify-end items-end">
          <h2 className="text-white w-210 text-6xl leading-[1.2] mb-40">
            Para quem busca a vitória, o{" "}
            <span className="bg-linear-to-r from-[#277f4a] to-[#ffd21f] bg-clip-text text-transparent">
              detalhe técnico
            </span>{" "}
            e a{" "}
            <span className="bg-linear-to-r from-[#277f4a] to-[#ffd21f] bg-clip-text text-transparent">
              preparação profissional
            </span>{" "}
            fazem toda a diferença.
          </h2>

          <div className="flex w-210 gap-10">
            <div className="flex flex-col flex-1">
              <div className="border border-white/10 w-18 h-18 rounded-full flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" stopColor="#277f4a" />
                      <stop offset="100%" stopColor="#ffd21f" />
                    </linearGradient>
                  </defs>

                  <Volleyball stroke="url(#grad)" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-medium mt-4.5 mb-1.5">
                DNA Competitivo
              </h3>
              <p className="text-white/50">
                Treinamentos de nível profissional focados em tática avançada.
              </p>
            </div>

            <div className="flex flex-col flex-1">
              <div className="border border-white/10 w-18 h-18 rounded-full flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" stopColor="#277f4a" />
                      <stop offset="100%" stopColor="#ffd21f" />
                    </linearGradient>
                  </defs>

                  <ShieldCheck stroke="url(#grad)" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-medium mt-4.5 mb-1.5">
                Fisiologia e Saúde
              </h3>
              <p className="text-white/50">
                Suporte completo em preparação física e prevenção de lesões.
              </p>
            </div>

            <div className="flex flex-col flex-1">
              <div className="border border-white/10 w-18 h-18 rounded-full flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" stopColor="#277f4a" />
                      <stop offset="100%" stopColor="#ffd21f" />
                    </linearGradient>
                  </defs>

                  <BrainCircuit stroke="url(#grad)" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-medium mt-4.5 mb-1.5">
                Foco e Disciplina
              </h3>
              <p className="text-white/50">
                Desenvolvimento da mentalidade de campeão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
