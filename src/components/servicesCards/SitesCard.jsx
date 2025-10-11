"use client";

import { CodeIcon } from "@phosphor-icons/react";

export default function SitesCard() {
  return (
    <section className="bg-white w-80 lg:w-2xl h-100 lg:h-180 border-blue-500 border-3 rounded-lg text-left flex flex-col items-center justify-center">
      <div className="p-4 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <CodeIcon size={50} color="#3f50d5" weight="bold" className="lg:size-30"/>
      </div>
      <div className="w-full pl-12 flex flex-col gap-3"> 
        <h1 className="text-xl lg:text-6xl font-bold text-left"> 
          Criação de sites<br /> profissionais
        </h1>
        <h3 className="lg:text-2xl text-sm text-gray-400 text-left">Sua presença digital que realmente<br/>gera resultados e atrai clientes qualificados.</h3>
      </div>
    </section>
  );
}