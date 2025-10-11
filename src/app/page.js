import Navbar from "@/components/Navbar";
import BudgetButton from "@/components/buttons/BudgetButton";
import SitesCard from "@/components/servicesCards/SitesCard";
import TrafficCards from "@/components/servicesCards/TrafficCards";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-200 h-full">
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
      <section className="py-11 xl:p-22 w-full flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-9">
          <h1 className="text-blue-950 text-xl lg:text-3xl 2xl:text-5xl font-bold text-center lg:pl-12">
            Nossos serviços
          </h1>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-12">
            <SitesCard/>
            <TrafficCards/>
          </div>
      </section>
    </div>
  );
}
