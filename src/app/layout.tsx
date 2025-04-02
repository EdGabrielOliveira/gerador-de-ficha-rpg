import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gerador de Ficha - Malditos Goblins",
  description: "Aplicação para criar fichas de personagens para o RPG Malditos Goblins",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen bg-green-900">
          <header className="bg-amber-700 text-white p-4 shadow-lg">
            <h1 className="text-2xl font-bold">Malditos Goblins - Gerador de Ficha</h1>
          </header>
          <main className="p-4">{children}</main>
          <footer className="bg-amber-700 text-white p-4 text-center">
            <p>&copy; 2025 Malditos Goblins - Gerador de Ficha</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
