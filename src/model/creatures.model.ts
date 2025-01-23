export interface Creature {
    id: number;
    name: string;
    type: string;
    price: number;
}

// Mock data
export const creatures: Creature[] = [
    { id: 1, name: "Dragon", type: "Fire", price: 100 },
    { id: 2, name: "Unicorn", type: "Mystic", price: 0 },
];
