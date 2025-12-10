"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BudgetButton from "@/components/buttons/BudgetButton";
import SitesCard from "@/components/servicesCards/SitesCard";
import TrafficCards from "@/components/servicesCards/TrafficCards";
import ConsultancyCard from "@/components/servicesCards/ConsultancyCard";

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const cardBorderRadius = "rounded-lg";

  const AnimatedCardWrapper = ({ children, className }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );

  const AnimatedTimelineStep = ({ children }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="flex flex-col bg-gray-200 h-full overflow-x-hidden">
      <Navbar />
      <section className="flex flex-col lg:flex-row gap-2 w-full py-4 lg:py-20 lg:px-40 2xl:py-56 items-center justify-center bg-white">
        <div className="w-full lg:hidden flex justify-center my-15">
          <img src="logo.png" className="size-32" />
        </div>
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-7 lg:gap-7">
          <h1 className="text-blue-950 text-2xl lg:text-5xl 2xl:text-8xl font-extrabold text-center lg:text-start">
            Seu Negócio Online <br />
            Pronto para vender
          </h1>
          <h2 className="text-blue-950 text-base lg:text-xl 2xl:text-3xl font-semibold">
            Sites pofissionais e gestão de tráfego
            <br />
            Que transformam cliques em clientes
          </h2>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <BudgetButton>Faça uma consultoria grátis</BudgetButton>
          </motion.div>
        </div>
        <div className="w-1/4 hidden lg:flex">
          <img src="logo.png" className="size-32 lg:size-52 2xl:size-96" />
        </div>
      </section>

      <section className="py-11 xl:p-22 w-full flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-9">
        <h1 className="text-blue-950 text-xl lg:text-3xl 2xl:text-5xl font-bold text-center lg:pl-12">
          Nossos serviços
        </h1>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-12">
          <AnimatedCardWrapper>
            <SitesCard />
          </AnimatedCardWrapper>

          <AnimatedCardWrapper>
            <TrafficCards />
          </AnimatedCardWrapper>

          <AnimatedCardWrapper>
            <ConsultancyCard />
          </AnimatedCardWrapper>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full gap-2 px-4 my-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl 2xl:text-5xl font-bold text-center mb-6 w-full lg:flex lg:items start lg:pl-30">
          Sobre a IP Soluções Digitais
        </h1>
        <div
          className={`
            ${cardBorderRadius} text-base md:text-lg xl:text-xl shadow-lg 
            w-11/12 md:w-3/4 xl:w-2/3 2xl:w-1/2 
            relative overflow-hidden p-1.5 animate-blue-border`}
        >
          <div
            className={`card-content bg-white ${cardBorderRadius} flex flex-col lg:flex-row lg:gap-10 items-center justify-center py-10 px-6 w-full h-full relative z-10`}
          >
            <div className="w-full flex items-center justify-center mb-8">
              <img src="logo.png" className="size-50" />
            </div>

            <div className="flex flex-col">
              <p className="text-gray-700 mb-4">
                Na <strong>IP Soluções Digitais</strong>, acreditamos que toda
                empresa deve ter uma presença online que
                <strong className="text-gray-900">
                  {" "}
                  gere resultados reais
                </strong>
                , e não apenas custos.
              </p>

              <p className="text-gray-700 mb-4">
                Entendemos sua frustração com o investimento digital sem
                retorno. Nossa missão é ser o seu
                <strong className="text-gray-900">
                  {" "}
                  parceiro estratégico
                </strong>{" "}
                de longo prazo. Nós traduzimos o complexo mundo digital em um
                <strong className="text-gray-900">
                  {" "}
                  plano de ação claro, objetivo e lucrativo
                </strong>
                .
              </p>
              <p className="text-gray-700 mb-6">
                Não entregamos apenas serviços, entregamos a{" "}
                <strong className="text-gray-900">
                  visibilidade estratégica{" "}
                </strong>
                necessária para que o seu negócio atraia clientes qualificados e
                <strong className="text-gray-900">
                  {" "}
                  escale o seu faturamento{" "}
                </strong>
                de forma sustentável. Seu sucesso é nosso
                <strong> único foco</strong>.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col items-center text-center lg:items-start lg:text-left">
                <p className="text-blue-950 text-lg font-bold mb-4">
                  Pronto para acelerar seus resultados?
                </p>
                <BudgetButton>Fale com um Consultor Agora</BudgetButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden flex flex-col items-center justify-center w-full py-10 lg:py-20 bg-[#EE6C20]">
        <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-amber-200 rounded-full opacity-40 blur-3xl mix-blend-soft-light"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-white rounded-full opacity-30 blur-3xl mix-blend-soft-light"></div>
        <div className="z-10 text-white text-3xl lg:text-6xl font-extrabold mb-12 lg:mb-16">
          Como funciona?
        </div>
        <div className="z-10 w-11/12 max-w-4xl text-white">
          <div className="relative border-l-4 border-dashed border-white/70 space-y-12 lg:space-y-20 pl-8 pr-4">
            <AnimatedTimelineStep>
              <div className="relative p-6 lg:p-10 bg-[#00000020] rounded-lg border border-white/30">
                <div className="absolute top-0 left-[-28px] bg-white w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-[#EE6C20] font-bold text-sm lg:text-lg shadow-md">
                  1
                </div>
                <h3 className="text-xl lg:text-3xl font-bold mb-3">
                  Diagnóstico
                </h3>
                <p className="text-sm lg:text-lg">
                  Realizamos uma reunião de briefing para entender a empresa e
                  definir as estratégias iniciais.
                </p>
              </div>
            </AnimatedTimelineStep>
            <AnimatedTimelineStep>
              <div className="relative p-6 lg:p-10 bg-[#00000020] rounded-lg border border-white/30">
                <div className="absolute top-0 left-[-28px] bg-white w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-[#EE6C20] font-bold text-sm lg:text-lg shadow-md">
                  2
                </div>
                <h3 className="text-xl lg:text-3xl font-bold mb-3">
                  Otimização
                </h3>
                <p className="text-sm lg:text-lg">
                  Monitoramos diariamente os anúncios e fazemos otimizações
                  semanais e mensais para melhorar a performance.
                </p>
              </div>
            </AnimatedTimelineStep>
            <AnimatedTimelineStep>
              <div className="relative p-6 lg:p-10 bg-[#00000020] rounded-lg border border-white/30">
                <div className="absolute top-0 left-[-28px] bg-white w-7 h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-[#EE6C20] font-bold text-sm lg:text-lg shadow-md">
                  3
                </div>
                <h3 className="text-xl lg:text-3xl font-bold mb-3">
                  Consultoria
                </h3>
                <p className="text-sm lg:text-lg">
                  Entregamos relatórios mensais, disponibilizamos um dashboard e
                  realizamos consultorias de alinhamento.
                </p>
              </div>
            </AnimatedTimelineStep>
          </div>
        </div>
      </section>
    </div>
  );
}
