import { PokeApiEndpoint } from "@/constants/PokeApiEndpoint";
import { ErrorType, Location, PokemonListResponse, PokemonType } from "@/types";

export const PokeApi = {
  getPokemonList: async (
    offset: number = 0,
    limit: number = 20
  ): Promise<PokemonListResponse | ErrorType> => {
    try {
      const response = await fetch(
        `${PokeApiEndpoint.BASE_URL}?limit=${limit}&offset=${offset}`
      );
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
      const response = await fetch(PokeApiEndpoint.BASE_URL + `/${identifier}`);
      if (response.ok) {
        const pokemonJson = await response.json();
        const location = await PokeApi.getLocationById(identifier);
        const pokemon = {
          name: pokemonJson.name,
          height: pokemonJson.height,
          weight: pokemonJson.weight,
          imageUrl:
            pokemonJson.sprites?.other["official-artwork"].front_default,
          types: pokemonJson?.types,
          cries: pokemonJson?.cries?.legacy,
          locations: location,
        };

        return pokemon;
      } else throw new Error("Failed to fetch pokemon list");
    } catch (e) {
      console.error(e);
      return { "An error occured": e };
    }
  },
  getLocationById: async (
    identifier: string
  ): Promise<Location | ErrorType> => {
    try {
      const res = await fetch(
        PokeApiEndpoint.BASE_URL + `/${identifier}/encounters`
      );
      if (res.ok) {
        const respone = await res.json();
        return respone.map((item: any) => {
          return {
            name: item.location_area.name,
            url: item.location_area.url,
          };
        });
      }

      throw new Error("Failed to fetch");
    } catch (e) {
      return { "An error occured": e };
    }
  },
};
