"use client";

import { List } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="w-full h-14 flex items-center content-center px-6 shadow-md">
      <div className="flex items-center w-full gap-3">
        <img src="logo.png" className="size-8" />
        <h1 className="text-xs font-bold">IP Soluções Digitais</h1>
      </div>
      <List size={32} color="#3747be" weight="bold" />
    </nav>
  );
}
