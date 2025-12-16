"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const whatsappLink =
    "https://wa.me/88981745976?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20grátis";
  const accentColor = "#3747be";

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Como Funciona", href: "#processo" },
    { name: "Nossos Serviços", href: "#servicos" },
    { name: "Perguntas Frequentes", href: "#faq" },
  ];

  const budgetButtonClasses = `bg-blue-700 px-10 xl:px-10 py-2 sm:py-2 border-none rounded-xl xl:text-lg text-sm font-medium lg:font-semibold text-white inline-flex items-center justify-center text-center`;

  return (
    <nav className="w-full h-14 flex items-center justify-between px-6 shadow-md bg-white sticky top-0 z-50">
      <a href="#home" className="flex items-center gap-3 cursor-pointer">
        <img
          src="logo.png"
          alt="Logo IP Soluções Digitais"
          className="size-8"
        />
        <h1 className="text-xs xl:text-xl font-bold">IP Soluções Digitais</h1>
      </a>
      <div className="hidden sm:flex flex-row items-center gap-4 lg:gap-8 text-sm xl:text-lg font-bold">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:inline-flex bg-blue-700 px-10 xl:px-10 py-2 sm:py-2 border-none rounded-xl xl:text-lg text-sm font-medium lg:font-semibold text-white lg:max-w-96 items-center justify-center text-center`}
      >
        Solicitar orçamento grátis
      </a>
      <button
        onClick={toggleMenu}
        className="sm:hidden focus:outline-none"
        aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
      >
        {isMenuOpen ? (
          <X size={32} color={accentColor} weight="bold" />
        ) : (
          <List size={32} color={accentColor} weight="bold" />
        )}
      </button>
      <div
        className={`
          fixed top-14 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out sm:hidden
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
          z-40
        `}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold text-gray-800 hover:text-black border-b border-gray-100 pb-2 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href={whatsappLink}
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full ${budgetButtonClasses}`}
            >
              Solicitar orçamento grátis
            </a>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-14 bg-black/50 sm:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
