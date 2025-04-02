"use client";

import React, { useState } from "react";
import { Item } from "@/types";

interface InventoryListProps {
  items: Item[];
  onUpdateItems: (items: Item[]) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ items, onUpdateItems }) => {
  const [newItem, setNewItem] = useState<{
    name: string;
    description: string;
    quantity: number;
  }>({
    name: "",
    description: "",
    quantity: 1,
  });

  const [isAdding, setIsAdding] = useState(false);
  const [nextId, setNextId] = useState(items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1);

  const handleAddItem = () => {
    if (newItem.name.trim() === "") return;

    const itemToAdd: Item = {
      id: nextId, // Usar um ID estático incremental em vez de Date.now()
      name: newItem.name,
      description: newItem.description,
      quantity: newItem.quantity > 0 ? newItem.quantity : 1,
    };

    onUpdateItems([...items, itemToAdd]);
    setNextId(nextId + 1);

    // Resetar o formulário
    setNewItem({
      name: "",
      description: "",
      quantity: 1,
    });
    setIsAdding(false);
  };

  const handleRemoveItem = (id: number) => {
    onUpdateItems(items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      // Se a quantidade chegar a zero, pergunta se quer remover o item
      if (window.confirm("Remover este item do inventário?")) {
        handleRemoveItem(id);
      }
      return;
    }

    onUpdateItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  return (
    <div className="bg-amber-950 rounded-md p-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-amber-300">Itens</h3>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-3 py-1 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-200"
        >
          {isAdding ? "Cancelar" : "Adicionar"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-amber-900 p-3 mb-4 rounded-md">
          <div className="grid grid-cols-1 gap-3 mb-3">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
                placeholder="Ex: Adaga Enferrujada"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Descrição</label>
              <input
                type="text"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
                placeholder="Ex: Dano: 1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Quantidade</label>
              <input
                type="number"
                min="1"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 1 })}
                className="w-full px-3 py-2 bg-amber-950 border border-amber-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-200"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleAddItem}
              disabled={newItem.name.trim() === ""}
              className={`px-4 py-2 rounded-md ${
                newItem.name.trim() === ""
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800 text-white"
              }`}
            >
              Adicionar
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        {/* Versão para desktop */}
        <div className="hidden sm:block">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-amber-900">
                <th className="py-2 px-4 text-left text-amber-300 border-b border-amber-800">Item</th>
                <th className="py-2 px-4 text-left text-amber-300 border-b border-amber-800">Descrição</th>
                <th className="py-2 px-4 text-center text-amber-300 border-b border-amber-800">Qtd</th>
                <th className="py-2 px-4 text-center text-amber-300 border-b border-amber-800">Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-amber-900/50">
                    <td className="py-2 px-4 border-b border-amber-900 font-medium text-amber-200">{item.name}</td>
                    <td className="py-2 px-4 border-b border-amber-900 text-amber-300">{item.description}</td>
                    <td className="py-2 px-4 border-b border-amber-900">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-amber-800 hover:bg-amber-700 rounded-l-md text-white"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 bg-amber-950 border-t border-b border-amber-700 text-amber-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-amber-800 hover:bg-amber-700 rounded-r-md text-white"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-amber-900 text-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="px-2 py-1 bg-red-900 text-amber-200 rounded hover:bg-red-800 transition duration-200"
                        title="Remover item"
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-4 px-4 text-center text-amber-400">
                    Nenhum item no inventário (isso não é bom para um goblin!)
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Versão para dispositivos móveis */}
        <div className="sm:hidden">
          {items.length > 0 ? (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="bg-amber-900/40 p-3 rounded-md">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-amber-200">{item.name}</h4>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 bg-amber-800 hover:bg-amber-700 rounded-l-md text-white text-sm"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 bg-amber-950 border-t border-b border-amber-700 text-amber-200 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 bg-amber-800 hover:bg-amber-700 rounded-r-md text-white text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-amber-300 text-sm">{item.description}</p>
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="px-2 py-1 bg-red-900 text-amber-200 rounded hover:bg-red-800 transition duration-200 text-xs"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-4 px-4 text-center text-amber-400">
              Nenhum item no inventário (isso não é bom para um goblin!)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryList;
