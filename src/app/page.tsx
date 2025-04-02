"use client";

import dynamic from "next/dynamic";

const CharacterSheet = dynamic(() => import("./components/CharacterSheet"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6 text-amber-400">Gerador de Goblin</h1>
      <p className="text-amber-200 mb-8 text-center max-w-2xl">
        Crie seu goblin para o RPG "Malditos Goblins"! Ajuste as características, selecione uma profissão, escolha seus
        itens e prepare-se para uma aventura provavelmente curta e definitivamente caótica!
      </p>
      <CharacterSheet key="goblin-sheet-1" />
    </div>
  );
};

export default HomePage;
