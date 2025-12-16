import { WhatsappLogo, InstagramLogo } from "@phosphor-icons/react";

export default function Footer() {
    const whatsappLink = "https://wa.me/88981745976?text=Olá,%20gostaria%20de%20ter%20uma%20consultoria%20grátis"; 
    const instagramLink = "https://instagram.com/ipsolucoesdigitais"; 

    return (
        <footer className="bg-[#213360] text-white py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        
                        {/* Bloco da Logo com Fundo Branco para Contraste */}
                        <div className="flex items-center mb-3">
                            <div className="bg-white p-1 rounded-md flex items-center justify-center mr-2 shadow-md">
                                <img 
                                    src="/logo.png" 
                                    alt="IP Soluções Digitais Logo" 
                                    className="h-6" 
                                /> 
                            </div>
                            <span className="text-xl font-bold text-white">Soluções Digitais</span>
                        </div>
                        
                        <p className="text-gray-300 text-sm max-w-sm">
                            Sua parceira especializada na criação de Landing Pages de Alta Conversão e gestão estratégica de Tráfego Pago.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-lg font-bold text-[#EE6C20] mb-4">Acesse Nossas Redes</h4>
                        <div className="flex space-x-4">
                            <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="text-white hover:text-[#EE6C20] transition-colors duration-300"
                            >
                                <WhatsappLogo size={28} weight="fill" />
                            </a>
                            
                            <a 
                                href={instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-white hover:text-[#EE6C20] transition-colors duration-300"
                            >
                                <InstagramLogo size={28} weight="fill" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} IP Soluções Digitais. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}