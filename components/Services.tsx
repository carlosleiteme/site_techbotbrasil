import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
    return (
        <section id="servicos" className="py-16 md:py-24 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-100 relative inline-block">
                    Nossos Serviços
                    <span className="absolute left-0 bottom-[-8px] w-[60px] h-[4px] bg-indigo-500 rounded-full"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Service 1: WhatsApp Resumidor (Featured) */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col justify-between items-center border border-gray-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">NOVO</div>
                        <div className="relative w-full h-48 mb-6">
                            <Image
                                src="/img/resumidor-hero.png"
                                alt="WhatsApp Resumidor"
                                fill
                                className="object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-400 mb-4">WhatsApp Resumidor</h3>
                        <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                            Nunca mais perca o que importa nos seus grupos! Nossa IA lê e resume todas as mensagens para você em segundos. Ideal para grupos de família, trabalho e condomínio.
                        </p>
                        <ul className="text-left text-gray-400 space-y-2 mb-6 w-full">
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Resumos Automáticos</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Economia de Tempo</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Fácil de Usar</li>
                        </ul>
                        <Link href="/resumidor" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-md w-full text-center">Conhecer Agora</Link>
                    </div>

                    {/* Service 2: Consultoria em IA para Negócios */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col justify-between items-center">
                        <div className="relative w-full h-48 mb-6">
                            <Image
                                src="/img/consulting.png"
                                alt="Consultoria em IA para Negócios"
                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-400 mb-4">Consultoria em IA para Negócios</h3>
                        <p className="text-gray-300 leading-relaxed mb-4 flex-grow">
                            A <strong>TechBot Brasil</strong> oferece consultoria especializada para identificar e implementar soluções de IA que aumentam a produtividade e otimizam processos em sua empresa. Do diagnóstico à implementação, estamos com você.
                        </p>
                        <ul className="text-left text-gray-400 space-y-2 mb-6 w-full">
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Diagnóstico Personalizado</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Planejamento Estratégico</li>
                            <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Otimização de Processos</li>
                        </ul>
                        <Link href="/#contato" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md">Agende uma Consultoria</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
