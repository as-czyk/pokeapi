import { create } from "zustand";

type PokedexStoreState = {
  pokedexEntries: string[];
};

type PokedexStoreActions = {
  setPokedexEntries: (arg: string[]) => void;
};

type PokedexStore = PokedexStoreState & PokedexStoreActions;

export const usePokedexStore = create<PokedexStore>((set) => ({
  pokedexEntries: [],
  setPokedexEntries: (entries: string[]) =>
    set((state) => ({
      ...state,
      pokedexEntries: entries,
    })),
}));
