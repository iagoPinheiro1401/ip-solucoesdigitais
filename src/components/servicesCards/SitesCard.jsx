"use client";

import { Code } from "@phosphor-icons/react";

export default function SitesCard() {
  return (
    <section className="bg-white w-60 lg:w-lg h-70 lg:h-110 border-blue-500 border-3 rounded-lg text-left flex flex-col items-center justify-center lg:gap-10">
      <div className="p-4 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Code size={50} color="#3f50d5" weight="bold" className="lg:size-20"/>
      </div>
      <div className="w-full pl-4 flex flex-col gap-3"> 
        <h1 className="text-lg lg:text-3xl font-bold text-left"> 
          Criação de sites<br /> profissionais
        </h1>
        <h3 className="lg:text-xl text-sm text-gray-400 text-left">Sua presença digital que realmente gera resultados e atrai clientes qualificados.</h3>
      </div>
    </section>
  );
}