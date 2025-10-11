"use client";

import { List } from "@phosphor-icons/react";
import BudgetButton from "./buttons/BudgetButton";

export default function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center justify-between px-6 shadow-md bg-white">
      <div className="flex items-center gap-3">
        <img src="logo.png" className="size-8" />
        <h1 className="text-xs xl:text-xl font-bold">IP Soluções Digitais</h1>
      </div>
        <div className="hidden sm:flex flex-row items-center gap-4 lg:gap-24 text-xs xl:text-xl font-bold">
          <h1>Sobre</h1>
          <h1>Nossos Serviços</h1>
          <h1>Contato</h1>
        </div>
      <BudgetButton className="hidden sm:flex">Solicitar orçamento grátis</BudgetButton>
      <List size={32} color="#3747be" weight="bold" className="sm:hidden" />
    </nav>
  );
}
