import { PokeApiEndpoint } from "@/constants/PokeApiEndpoint";
import { ErrorType, PokemonListResponse, PokemonType } from "@/types";

export const PokeApi = {
  getPokemonList: async (): Promise<PokemonListResponse | ErrorType> => {
    try {
      const response = await fetch(PokeApiEndpoint.GET_ALL_POKEMONS);
      if (response.ok) {
        return await response.json();
      } else throw new Error("Failed to fetch pokemon list");
    } catch (e) {
      console.error(e);
      return { "An error occured": e };
    }
  },
  getSinglePokemon: async (
    identifier: string
  ): Promise<PokemonType | ErrorType> => {
    try {
      const response = await fetch(
        PokeApiEndpoint.GET_ALL_POKEMONS + `/${identifier}`
      );
      if (response.ok) {
        const pokemonJson = await response.json();
        const pokemon = {
          name: pokemonJson.name,
          height: pokemonJson.height,
          weight: pokemonJson.weight,
          imageUrl:
            pokemonJson.sprites?.other["official-artwork"].front_default,
          types: pokemonJson?.types,
          cries: pokemonJson?.cries?.legacy,
        };

        return pokemon;
      } else throw new Error("Failed to fetch pokemon list");
    } catch (e) {
      console.error(e);
      return { "An error occured": e };
    }
  },
};
