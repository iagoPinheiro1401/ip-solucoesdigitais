import Navbar from "@/components/Navbar";
import BudgetButton from "@/components/buttons/BudgetButton";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-200 h-screen">
      <Navbar />
      <section className="flex flex-col lg:flex-row gap-2 w-full py-4 lg:py-20 lg:px-40 2xl:py-56 items-center justify-center bg-white">
        <div className="w-full lg:hidden flex justify-center">
          <img src="logo.png" className="size-32" />
        </div>
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start gap-2 lg:gap-7">
          <h1 className="text-blue-950 text-2xl lg:text-5xl 2xl:text-8xl font-extrabold text-center lg:text-start">
            Seu Negócio Online <br/>
            Pronto para vender
          </h1>
          <h2 className="text-blue-950 text-base lg:text-xl 2xl:text-3xl font-semibold">
            Sites pofissionais e gestão de tráfego
            <br />
            Que transformam cliques em clientes
          </h2>
          <BudgetButton>Fale com consultor</BudgetButton>
        </div>
        <div className="w-1/4 hidden lg:flex">
          <img src="logo.png" className="size-32 lg:size-52 2xl:size-96" />
        </div>
      </section>
    </div>
  );
}
