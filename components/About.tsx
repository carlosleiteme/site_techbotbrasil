import Image from 'next/image';

export default function About() {
    return (
        <section id="sobre" className="py-16 md:py-24 bg-gray-800">
            <div className="container mx-auto px-6 text-center md:flex md:items-center md:space-x-12">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="relative w-full h-64 md:h-96 bg-gray-900 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                        <div className="relative w-3/4 h-3/4">
                            <Image
                                src="/img/logo-original.png"
                                alt="Sobre TechBot Brasil"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 text-left">
                    <h2 className="text-4xl font-bold mb-8 text-gray-100 relative inline-block">
                        Sobre a TechBot Brasil
                        <span className="absolute left-0 bottom-[-8px] w-[60px] h-[4px] bg-indigo-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Na <strong>TechBot Brasil</strong>, acreditamos que a inteligência artificial é a chave para o futuro dos negócios. Nossa missão é capacitar empresas de todos os portes a inovar e otimizar suas operações através de soluções de IA personalizadas e eficazes.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Com um profundo conhecimento em automação de atendimento e consultoria estratégica, a <strong>TechBot Brasil</strong> se dedica a transformar desafios em oportunidades, impulsionando a produtividade e a satisfação do cliente.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Somos apaixonados por tecnologia e comprometidos em entregar resultados tangíveis para o seu negócio.
                    </p>
                </div>
            </div>
        </section>
    );
}
