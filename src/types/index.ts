export interface Skill {
  id: number;
  name: string;
  description: string;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
}

export interface GoblinProfession {
  id: number;
  name: string;
  description: string;
  specialAbility: string;
}

export interface GoblinCharat {
  id: number;
  name: string;
  bonus: string;
}

export interface Character {
  name: string;
  profession: string;
  charat: string;
  attributes: {
    esperto: number;
    rapido: number;
    forte: number;
    sortudo: number;
  };
  skills: Skill[];
  inventory: Item[];
  mutilation: string;
  experience: number;
}
