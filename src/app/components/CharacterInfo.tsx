import React from "react";

interface CharacterInfoProps {
  name: string;
  characterClass: string;
  onNameChange: (value: string) => void;
  onClassChange: (value: string) => void;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ name, characterClass, onNameChange, onClassChange }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-3 text-gray-700">Informações Básicas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nome do personagem"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Classe</label>
          <select
            value={characterClass}
            onChange={(e) => onClassChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecione uma classe</option>
            <option value="Guerreiro">Guerreiro</option>
            <option value="Mago">Mago</option>
            <option value="Clérigo">Clérigo</option>
            <option value="Ladino">Ladino</option>
            <option value="Ranger">Ranger</option>
            <option value="Druida">Druida</option>
            <option value="Paladino">Paladino</option>
            <option value="Bardo">Bardo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
