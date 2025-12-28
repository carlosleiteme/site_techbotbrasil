import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBot Brasil - Automação Inteligente",
  description: "Automatize seu Atendimento e Impulsione seus Resultados com IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
