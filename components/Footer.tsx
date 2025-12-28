import Link from 'next/link';
// Footer component

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6 md:px-10 rounded-t-xl shadow-inner mt-auto">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-4">
                    <Link href="/" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">TechBot Brasil</Link> - Sua Parceira em Automação com Inteligência Artificial.
                </p>
                <nav className="flex justify-center space-x-6 mb-4">
                    <Link href="/#servicos" className="text-gray-300 hover:text-blue-400 transition-colors">Serviços</Link>
                    <Link href="/#sobre" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre</Link>
                    <Link href="/#noticias" className="text-gray-300 hover:text-blue-400 transition-colors">Notícias</Link>
                    <Link href="/#contato" className="text-gray-300 hover:text-blue-400 transition-colors">Contato</Link>
                </nav>
                <p className="text-gray-400 text-sm">&copy; 2025 TechBot Brasil. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
