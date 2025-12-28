'use client';

import Image from 'next/image';

interface Article {
    id: number;
    title: string;
    image: string;
    content: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Como a IA está Revolucionando o Atendimento ao Cliente",
        image: "/img/news-customer.png",
        content: "A inteligência artificial está mudando a forma como as empresas se relacionam com seus clientes. Chatbots avançados e sistemas de IA podem personalizar o atendimento, responder a dúvidas complexas e até mesmo antecipar necessidades, resultando em maior satisfação e eficiência operacional."
    },
    {
        id: 2,
        title: "Aumento da Produtividade: O Papel da IA nas Empresas",
        image: "/img/dashboard-demo.png",
        content: "A inteligência artificial é uma ferramenta poderosa para impulsionar a produtividade empresarial. Desde a automação de tarefas repetitivas até a análise de grandes volumes de dados. Além disso, oferecemos funcionalidade completa de geração de dashboards e gráficos para acompanhamento em tempo real dos resultados e tomada de decisões estratégicas."
    },
    {
        id: 3,
        title: "O Poder dos Bots de WhatsApp para o Seu Negócio",
        image: "/img/news-bots.png",
        content: "Os bots de WhatsApp representam uma revolução no atendimento ao cliente e nas vendas. Eles permitem que empresas respondam instantaneamente a consultas, enviem notificações personalizadas e até mesmo processem pedidos, tudo dentro da plataforma de mensagens mais popular do mundo, garantindo uma experiência fluida e eficiente."
    }
];

export default function News() {
    return (
        <section id="noticias" className="py-16 md:py-24 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-100 relative inline-block">
                    Notícias e Insights
                    <span className="absolute left-0 bottom-[-8px] w-[60px] h-[4px] bg-indigo-500 rounded-full"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article key={article.id} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col justify-between items-start">
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-blue-400 mb-3 text-left w-full">{article.title}</h3>
                            <p className="text-gray-300 text-sm mb-4 text-left flex-grow">
                                {article.content}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
