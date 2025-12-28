'use client';

import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = '5512936180117'; // TechBot WhatsApp
        const text = `Olá, meu nome é ${name}. ${phone ? `Meu telefone é ${phone}. ` : ''}${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contato" className="py-16 md:py-24 bg-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-100 relative inline-block">
                    Entre em Contato
                    <span className="absolute left-0 bottom-[-8px] w-[60px] h-[4px] bg-indigo-500 rounded-full"></span>
                </h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    Tem um projeto em mente ou quer saber mais sobre como a <strong>TechBot Brasil</strong> pode ajudar sua empresa? Preencha o formulário abaixo para iniciar uma conversa no WhatsApp.
                </p>
                <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="nome" className="block text-left text-gray-300 text-sm font-medium mb-2">Nome Completo</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-700 text-white"
                                placeholder="Seu nome"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="telefone" className="block text-left text-gray-300 text-sm font-medium mb-2">Telefone (Opcional)</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-700 text-white"
                                placeholder="(XX) XXXXX-XXXX"
                            />
                        </div>
                        <div>
                            <label htmlFor="mensagem" className="block text-left text-gray-300 text-sm font-medium mb-2">Mensagem</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-700 text-white"
                                placeholder="Descreva seu interesse ou projeto..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-md transform hover:scale-105 duration-300 flex items-center justify-center">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                            Enviar via WhatsApp
                        </button>
                    </form>
                    <div className="mt-8 text-center text-gray-400">
                        <p className="mt-2 text-green-400 font-semibold">
                            WhatsApp: <a href="https://wa.me/5512936180117" target="_blank" className="hover:underline">(12) 93618-0117</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
