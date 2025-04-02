"use client";

import React, { useState, useEffect } from "react";
import AttributeInput from "./AttributeInput";
import InventoryList from "./InventoryList";
import GoblinInfo from "./GlobinInfo";
import { Item, GoblinProfession, GoblinCharat } from "@/types";

// Interface para o estado completo do goblin
interface GoblinState {
  name: string;
  profession: string;
  charat: string;
  mutilation: string;
  experience: number;
  esperto: number;
  rapido: number;
  forte: number;
  sortudo: number;
  items: Item[];
}

const CharacterSheet: React.FC = () => {
  // Inicializar estado com valores padrão
  const [goblinState, setGoblinState] = useState<GoblinState>({
    name: "",
    profession: "",
    charat: "",
    mutilation: "Nenhuma (ainda...)",
    experience: 0,
    esperto: 1,
    rapido: 1,
    forte: 1,
    sortudo: 1,
    items: [
      { id: 1, name: "Porrete", description: "Dano: 1", quantity: 1 },
      { id: 2, name: "Roupa Esfarrapada", description: "Proteção: 0", quantity: 1 },
      { id: 3, name: "Saco de Bugigangas", description: "Contém coisas inúteis e talvez 1 útil", quantity: 1 },
    ],
  });

  // Destructuring para facilitar o uso dos estados
  const { name, profession, charat, mutilation, experience, esperto, rapido, forte, sortudo, items } = goblinState;

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedGoblin = localStorage.getItem("goblinData");
    if (savedGoblin) {
      try {
        const parsedData = JSON.parse(savedGoblin);
        setGoblinState(parsedData);
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
      }
    }
  }, []);

  // Salvar no localStorage quando o estado mudar
  useEffect(() => {
    localStorage.setItem("goblinData", JSON.stringify(goblinState));
  }, [goblinState]);

  // Funções para atualizar o estado
  const updateGoblinState = (updates: Partial<GoblinState>) => {
    setGoblinState((prev) => ({ ...prev, ...updates }));
  };

  // Profissões de Malditos Goblins
  const professions: GoblinProfession[] = [
    {
      id: 1,
      name: "Guerreiro",
      description: "Bom em bater nas coisas e apanhar",
      specialAbility: "Quando o Guerreiro causar dano, pode causar +1 de dano adicional.",
    },
    {
      id: 2,
      name: "Xamã",
      description: "Capaz de invocar magias caóticas",
      specialAbility: "Uma vez por sessão, pode tentar lançar uma magia caótica (consulte o mestre).",
    },
    {
      id: 3,
      name: "Ladino",
      description: "Especialista em armadilhas e roubo",
      specialAbility: "Recebe +1 em testes para desarmar armadilhas ou abrir fechaduras.",
    },
    {
      id: 4,
      name: "Cozinheiro",
      description: "Transforma qualquer coisa em comida",
      specialAbility: "Pode criar uma refeição de emergência que cura 1 ponto de dano.",
    },
    {
      id: 5,
      name: "Engenhoqueiro",
      description: "Cria artefatos estranhos e perigosos",
      specialAbility: "Pode criar um artefato improvisado que funciona uma única vez.",
    },
  ];

  // Características de goblin
  const charats: GoblinCharat[] = [
    { id: 1, name: "Narigudo", bonus: "+1 em testes para farejar coisas" },
    { id: 2, name: "Orelhudo", bonus: "+1 em testes para ouvir sons" },
    { id: 3, name: "Dentuço", bonus: "+1 em testes para morder coisas" },
    { id: 4, name: "Pezudo", bonus: "+1 em testes para correr" },
    { id: 5, name: "Mãozudo", bonus: "+1 em testes para agarrar coisas" },
  ];

  // Mutilações disponíveis
  const mutilations = [
    "Nenhuma (ainda...)",
    "Falta um olho",
    "Falta uma orelha",
    "Falta um braço",
    "Falta uma perna",
    "Falta um nariz",
    "Cicatrizes horríveis",
    "Queimaduras terríveis",
    "Falta metade dos dentes",
  ];

  const handleNameChange = (value: string) => {
    updateGoblinState({ name: value });
  };

  const handleProfessionChange = (value: string) => {
    updateGoblinState({ profession: value });
  };

  const handleCharatChange = (value: string) => {
    updateGoblinState({ charat: value });
  };

  const handleMutilationChange = (value: string) => {
    updateGoblinState({ mutilation: value });
  };

  const handleExperienceChange = (value: number) => {
    updateGoblinState({ experience: value });
  };

  const handleUpdateItems = (updatedItems: Item[]) => {
    updateGoblinState({ items: updatedItems });
  };

  const handleRollGoblin = () => {
    // Gera um goblin aleatório
    const newName = getRandomGoblinName();
    const newProfession = professions[Math.floor(Math.random() * professions.length)].name;
    const newCharat = charats[Math.floor(Math.random() * charats.length)].name;
    const newMutilation = mutilations[Math.floor(Math.random() * 3)]; // Menor chance de começar mutilado

    // Resetar atributos para 1
    let newEsperto = 1;
    let newRapido = 1;
    let newForte = 1;
    let newSortudo = 1;

    // Distribui 3 pontos aleatoriamente (cada atributo já começa com 1)
    let remainingPoints = 3;

    while (remainingPoints > 0) {
      const rand = Math.floor(Math.random() * 4);

      if (rand === 0 && newEsperto < 3) {
        newEsperto++;
        remainingPoints--;
      } else if (rand === 1 && newRapido < 3) {
        newRapido++;
        remainingPoints--;
      } else if (rand === 2 && newForte < 3) {
        newForte++;
        remainingPoints--;
      } else if (rand === 3 && newSortudo < 3) {
        newSortudo++;
        remainingPoints--;
      }
    }

    // Atualiza o estado com todos os novos valores de uma vez
    updateGoblinState({
      name: newName,
      profession: newProfession,
      charat: newCharat,
      mutilation: newMutilation,
      experience: 0,
      esperto: newEsperto,
      rapido: newRapido,
      forte: newForte,
      sortudo: newSortudo,
    });
  };

  const handleResetGoblin = () => {
    if (window.confirm("Tem certeza que deseja reiniciar a ficha? Todos os dados serão perdidos.")) {
      localStorage.removeItem("goblinData");

      setGoblinState({
        name: "",
        profession: "",
        charat: "",
        mutilation: "Nenhuma (ainda...)",
        experience: 0,
        esperto: 1,
        rapido: 1,
        forte: 1,
        sortudo: 1,
        items: [
          { id: 1, name: "Porrete", description: "Dano: 1", quantity: 1 },
          { id: 2, name: "Roupa Esfarrapada", description: "Proteção: 0", quantity: 1 },
          { id: 3, name: "Saco de Bugigangas", description: "Contém coisas inúteis e talvez 1 útil", quantity: 1 },
        ],
      });
    }
  };

  // Função para gerar nomes aleatórios de goblin
  const getRandomGoblinName = () => {
    const prefixes = ["Grul", "Zik", "Fnik", "Rok", "Blurp", "Glup", "Skriz", "Murk"];
    const suffixes = ["naz", "tok", "plak", "zort", "grat", "blat", "gob", "rat"];
    return (
      prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)]
    );
  };

  // Calcula pontos restantes (máximo 7 em Malditos Goblins)
  const pointsUsed = esperto + rapido + forte + sortudo - 4; // subtrai 4 porque cada atributo começa com 1
  const pointsRemaining = 7 - pointsUsed;

  const selectedProfession = professions.find((p) => p.name === profession);
  const selectedCharat = charats.find((c) => c.name === charat);

  return (
    <div className="p-3 sm:p-6 bg-amber-800 rounded-lg shadow-md max-w-4xl mx-auto text-amber-100">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-amber-200 border-b-2 border-amber-600 pb-2">
        Ficha de Goblin
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4">
        <button
          onClick={handleRollGoblin}
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200"
        >
          Gerar Goblin Aleatório
        </button>
        <button
          onClick={handleResetGoblin}
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200"
        >
          Reiniciar Ficha
        </button>
      </div>

      <div className="bg-amber-900 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-3 text-amber-300">Status</h2>
        <div className="flex flex-wrap justify-between bg-amber-950 p-2 rounded">
          <div className="flex items-center mr-4 mb-2">
            <span className="font-medium text-amber-400 mr-2">Salvamento:</span>
            <span className="text-green-400">
              {localStorage.getItem("goblinData") ? "Automático ✓" : "Pendente..."}
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className="font-medium text-amber-400 mr-2">Pontos de Atributo:</span>
            <span
              className={
                pointsRemaining < 0 ? "text-red-500" : pointsRemaining === 0 ? "text-green-400" : "text-amber-200"
              }
            >
              {pointsRemaining} restantes
            </span>
          </div>
        </div>
      </div>

      <GoblinInfo
        name={name}
        profession={profession}
        charat={charat}
        mutilation={mutilation}
        professions={professions}
        charats={charats}
        mutilations={mutilations}
        onNameChange={handleNameChange}
        onProfessionChange={handleProfessionChange}
        onCharatChange={handleCharatChange}
        onMutilationChange={handleMutilationChange}
      />

      <div className="mt-4 sm:mt-6 bg-amber-900 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-amber-300">Atributos</h2>
          <div className="bg-amber-700 px-3 py-1 rounded text-sm">
            Pontos restantes:{" "}
            <span className={`font-bold ${pointsRemaining < 0 ? "text-red-500" : "text-amber-200"}`}>
              {pointsRemaining}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AttributeInput
            label="Esperto"
            value={esperto}
            onChange={(value) => updateGoblinState({ esperto: value })}
            min={1}
            max={3}
            description="Usado para resolver puzzles, entender línguas e magia"
          />
          <AttributeInput
            label="Rápido"
            value={rapido}
            onChange={(value) => updateGoblinState({ rapido: value })}
            min={1}
            max={3}
            description="Usado para se esquivar, correr e atacar à distância"
          />
          <AttributeInput
            label="Forte"
            value={forte}
            onChange={(value) => updateGoblinState({ forte: value })}
            min={1}
            max={3}
            description="Usado para lutar corpo a corpo, carregar peso e intimidar"
          />
          <AttributeInput
            label="Sortudo"
            value={sortudo}
            onChange={(value) => updateGoblinState({ sortudo: value })}
            min={1}
            max={3}
            description="Usado para testes de sorte, encontrar tesouros e sobreviver"
          />
        </div>
      </div>

      {selectedProfession && (
        <div className="mt-4 sm:mt-6 bg-amber-900 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-amber-300">Habilidade Especial</h2>
          <div className="bg-amber-950 p-3 rounded">
            <p className="font-semibold text-amber-300">{selectedProfession.name}:</p>
            <p>{selectedProfession.specialAbility}</p>
          </div>
        </div>
      )}

      {selectedCharat && (
        <div className="mt-4 sm:mt-6 bg-amber-900 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-amber-300">Característica</h2>
          <div className="bg-amber-950 p-3 rounded">
            <p className="font-semibold text-amber-300">{selectedCharat.name}:</p>
            <p>{selectedCharat.bonus}</p>
          </div>
        </div>
      )}

      <div className="mt-4 sm:mt-6 bg-amber-900 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-amber-300">Equipamento</h2>
        <InventoryList items={items} onUpdateItems={handleUpdateItems} />
      </div>

      <div className="mt-4 sm:mt-6 bg-amber-900 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-amber-300">Experiência</h2>
        <div className="flex items-center">
          <input
            type="number"
            min="0"
            value={experience}
            onChange={(e) => handleExperienceChange(parseInt(e.target.value) || 0)}
            className="w-16 px-2 py-1 text-center bg-amber-950 border border-amber-700 rounded text-amber-200"
          />
          <span className="ml-2">pontos</span>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex justify-center gap-3">
        <button
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-200"
          onClick={() => window.print()}
        >
          Imprimir Ficha
        </button>
      </div>
    </div>
  );
};

export default CharacterSheet;
