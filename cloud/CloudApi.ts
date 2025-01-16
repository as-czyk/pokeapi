import { AuthApi } from "./src/AuthApi";
import { Team } from "./src/db/Team";
import { Pokedex } from "./src/db/Pokedex";

import TeamApi = Team.API;
import PokedexApi = Pokedex.API;

export const CloudApi = {
  ...AuthApi,
  ...TeamApi,
  ...PokedexApi,
};
