import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IP Soluções Digitais | Seu Negócio Online Pronto para Vender",
  description: "Sites profissionais e gestão de tráfego que transformam cliques em clientes. Especialistas em acelerar resultados e faturamento no digital.",
  icons: {
    icon: '/logo-sem-fundo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}