export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonType {
  name: string;
  imageUrl: string;
  weight: number;
  height: number;
}
