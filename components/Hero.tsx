import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden rounded-b-xl shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>
            </div>

            <div className="container mx-auto text-center px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                    Automatize seu Atendimento e Impulsione seus Resultados com IA.
                </h1>
                <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
                    TechBot Brasil transforma a comunicação da sua empresa, com foco em atendimento via WhatsApp impulsionado por inteligência artificial.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
                    <Link href="/resumidor" className="bg-green-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 duration-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                        Conheça o Resumidor
                    </Link>
                    <Link href="/#contato" className="border-2 border-white text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-white hover:text-indigo-700 transition-all transform hover:scale-105 duration-300">
                        Agende uma Consultoria
                    </Link>
                </div>
            </div>
        </section>
    );
}
