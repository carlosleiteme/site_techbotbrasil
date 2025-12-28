import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function ResumidorPage() {
    return (
        <div className="bg-[#111827] text-[#f3f4f6] font-sans min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-400 transition">
                        <div className="relative w-14 h-14">
                            <Image src="/img/logo-green.png" alt="Logo TechBot Brasil" fill className="object-contain" />
                        </div>
                        TechBot Brasil
                    </Link>
                    {/* Botão de download removido conforme solicitado */}
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-left z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                            Nunca Mais Perca o Que <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Importa!</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Você já se sentiu perdido em grupos de WhatsApp? O <strong>WhatsApp Resumidor</strong> lê todas as mensagens e cria um resumo rápido e fácil. É como ter um assistente pessoal 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#como-funciona" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition transform hover:scale-105 text-center">
                                Como Funciona?
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0 relative z-10 flex justify-center">
                        <div className="relative w-full max-w-md h-[500px]">
                            <Image
                                src="/img/resumidor-hero.png"
                                alt="WhatsApp Resumidor App"
                                fill
                                className="object-contain rounded-2xl drop-shadow-2xl transform hover:rotate-1 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl -z-10"></div>
            </section>

            {/* Features Section */}
            <section id="como-funciona" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que usar o Resumidor?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Economize tempo e reduza o estresse de acompanhar centenas de mensagens.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300">
                            <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 text-2xl">⏱️</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Economia de Tempo</h3>
                            <p className="text-gray-400">Em segundos, você fica por dentro de tudo que rolou no dia, sem precisar ler centenas de mensagens.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition duration-300">
                            <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mb-6 text-2xl">🧠</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Inteligência Artificial</h3>
                            <p className="text-gray-400">Nossa IA entende gírias, memes e contextos, destacando apenas o que é realmente importante.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 text-2xl">👥</div>
                            <h3 className="text-xl font-bold mb-3 text-white">Gestão de Grupos</h3>
                            <p className="text-gray-400">Perfeito para quem administra grupos de família, trabalho ou condomínio. Acompanhe tudo facilmente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Exemplos Reais</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-lg text-green-400 mb-2">Grupo da Família</h4>
                                <p className="text-gray-300 italic">&quot;O aniversário da vovó será no sábado às 15h. Todos combinaram de levar um prato de comida.&quot;</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-lg text-blue-400 mb-2">Grupo do Trabalho</h4>
                                <p className="text-gray-300 italic">&quot;A reunião de amanhã foi adiada para sexta-feira. O relatório mensal precisa ser entregue até quinta.&quot;</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                                <h4 className="font-bold text-lg text-purple-400 mb-2">Grupo do Condomínio</h4>
                                <p className="text-gray-300 italic">&quot;Haverá manutenção na piscina na próxima semana. A assembleia será no dia 20.&quot;</p>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                            <h3 className="text-2xl font-bold mb-6">Como Usar?</h3>
                            <ol className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">1</span>
                                    Escolha o grupo que quer resumir.
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">2</span>
                                    Diga de quando até quando quer o resumo.
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-sm">3</span>
                                    Pronto! Receba o texto curto com tudo o que importa.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section Removed/Simplified */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Interessado?</h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Entre em contato conosco para saber como implementar o WhatsApp Resumidor na sua rotina ou empresa.
                    </p>
                    <Link href="/#contato" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition transform hover:scale-105 inline-flex items-center">
                        Fale Conosco
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
