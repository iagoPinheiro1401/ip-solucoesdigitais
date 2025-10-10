"use client";

import { List } from "@phosphor-icons/react";
import BudgetButton from "./buttons/BudgetButton";

export default function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center content-center px-6 shadow-md">
      <div className="flex items-center w-full sm:w-3xs gap-3">
        <img src="logo.png" className="size-8" />
        <h1 className="text-xs font-bold">IP Soluções Digitais</h1>
      </div>
      <div className="hidden sm:flex flex-row w-full items-center justify-between text-xs font-bold">
        <div className="pl-2 flex flex-row items-center gap-4">
          <h1>Sobre</h1>
          <h1>Nossos Serviços</h1>
          <h1>Contato</h1>
        </div>
        <BudgetButton />
      </div>
      <List size={32} color="#3747be" weight="bold" className="sm:hidden" />
    </nav>
  );
}
