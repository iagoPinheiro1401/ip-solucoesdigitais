"use client";

import { Funnel } from "@phosphor-icons/react/dist/ssr";

export default function TrafegoCard() {
  const cardBorderRadius = 'rounded-lg'; 

  return (
    <section 
      className={`w-60 lg:w-lg h-70 lg:h-110 border-none ${cardBorderRadius} text-left relative overflow-hidden animate-blue-border`} // <-- Classe de animação aplicada
    >
      <div className={`card-content h-full w-full flex flex-col items-center justify-center lg:gap-10 p-4 ${cardBorderRadius} relative z-10`}>
          <div className="p-4 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Funnel size={50} color="#3f50d5" weight="bold" className="lg:size-20"/>
          </div>
          <div className="w-full pl-4 flex flex-col gap-3"> 
            <h1 className="text-lg lg:text-3xl font-bold text-left"> 
              Tráfego que<br /> converte
            </h1>
            <h3 className="lg:text-xl text-sm text-gray-400 text-left">Invista com inteligência e maximize seu retorno com campanhas segmentadas e otimizadas.</h3>
          </div>
      </div>
    </section>
  );
}