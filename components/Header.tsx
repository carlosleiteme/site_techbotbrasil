'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 shadow-sm py-4 px-6 md:px-10 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo/Brand Name */}
                <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-blue-400 rounded-lg p-2 hover:text-blue-300 transition-colors">
                    <div className="relative w-16 h-16">
                        <Image src="/img/logo-green.png" alt="Logo TechBot Brasil" fill className="object-contain" />
                    </div>
                    TechBot Brasil
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/#servicos" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors">Serviços</Link>
                    <Link href="/#sobre" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors">Sobre</Link>
                    <Link href="/#noticias" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors">Notícias</Link>
                    <Link href="/resumidor" className="text-lg font-medium text-green-400 hover:text-green-300 transition-colors font-bold">WhatsApp Resumidor</Link>
                    <Link href="/#contato" className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors">Contato</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 focus:outline-none"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 md:hidden">
                    <button
                        className="absolute top-6 right-6 text-gray-300 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    <Link href="/#servicos" className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Serviços</Link>
                    <Link href="/#sobre" className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
                    <Link href="/#noticias" className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Notícias</Link>
                    <Link href="/resumidor" className="text-2xl font-medium text-green-400 hover:text-green-300 transition-colors font-bold" onClick={() => setIsMenuOpen(false)}>WhatsApp Resumidor</Link>
                    <Link href="/#contato" className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</Link>
                </div>
            )}
        </header>
    );
}
