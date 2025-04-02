import React from "react";
import { GoblinProfession, GoblinCharat } from "@/types";

interface GoblinInfoProps {
  name: string;
  profession: string;
  charat: string;
  mutilation: string;
  professions: GoblinProfession[];
  charats: GoblinCharat[];
  mutilations: string[];
  onNameChange: (value: string) => void;
  onProfessionChange: (value: string) => void;
  onCharatChange: (value: string) => void;
  onMutilationChange: (value: string) => void;
}

const GoblinInfo: React.FC<GoblinInfoProps> = ({
  name,
  profession,
  charat,
  mutilation,
  professions,
  charats,
  mutilations,
  onNameChange,
  onProfessionChange,
  onCharatChange,
  onMutilationChange,
}) => {
  return (
    <div className="bg-amber-900 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-3 text-amber-300">Informações do Goblin</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
            placeholder="Nome do seu goblin"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Profissão</label>
          <select
            value={profession}
            onChange={(e) => onProfessionChange(e.target.value)}
            className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
          >
            <option value="">Selecione uma profissão</option>
            {professions.map((prof) => (
              <option key={prof.id} value={prof.name}>
                {prof.name}
              </option>
            ))}
          </select>
          {profession && (
            <p className="mt-1 text-xs text-amber-400">{professions.find((p) => p.name === profession)?.description}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Característica</label>
          <select
            value={charat}
            onChange={(e) => onCharatChange(e.target.value)}
            className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
          >
            <option value="">Selecione uma característica</option>
            {charats.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mutilação</label>
          <select
            value={mutilation}
            onChange={(e) => onMutilationChange(e.target.value)}
            className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
          >
            <option value="">Selecione uma mutilação</option>
            {mutilations.map((mut, index) => (
              <option key={index} value={mut}>
                {mut}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GoblinInfo;
