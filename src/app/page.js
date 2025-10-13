import Navbar from "@/components/Navbar";
import BudgetButton from "@/components/buttons/BudgetButton";
import SitesCard from "@/components/servicesCards/SitesCard";
import TrafficCards from "@/components/servicesCards/TrafficCards";
import ConsultancyCard from "@/components/servicesCards/ConsultancyCard";

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
            Seu Negócio Online <br />
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
          <SitesCard />
          <TrafficCards />
          <ConsultancyCard />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full gap-2 px-4 my-5">
        <h1 className="text-blue-950 text-xl lg:text-3xl 2xl:text-5xl font-bold text-center mb-6 w-full lg:flex lg:items start lg:pl-30">
          Sobre a IP Soluções Digitais
        </h1>
        <div className="bg-white border-3 border-blue-400 rounded-lg flex flex-col lg:flex-row lg:gap-10 items-center justify-center py-10 px-6 w-11/12 md:w-3/4 xl:w-2/3 2xl:w-1/2 text-base md:text-lg xl:text-xl shadow-lg">
          <div className="w-full flex items-center justify-center mb-8">
            <img src="logo.png" className="size-50" />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-700 mb-4">
              Na <strong>IP Soluções Digitais</strong>
              , acreditamos que toda empresa deve ter uma presença online que
              <strong className="text-gray-900"> gere resultados reais</strong>,
              e não apenas custos.
            </p>

            <p className="text-gray-700 mb-4">
              Entendemos sua frustração com o investimento digital sem retorno.
              Nossa missão é ser o seu
              <strong className="text-gray-900"> parceiro estratégico</strong> de
              longo prazo. Nós traduzimos o complexo mundo digital em um
              <strong className="text-gray-900"> plano de ação claro, objetivo e lucrativo</strong>
              .
            </p>

            <p className="text-gray-700 mb-6">
              Não entregamos apenas serviços, entregamos a <strong className="text-gray-900">visibilidade estratégica </strong>
              necessária para que o seu negócio atraia clientes qualificados e
              <strong className="text-gray-900"> escale o seu faturamento </strong>
              de forma sustentável. Seu sucesso é nosso
              <strong> único foco</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
