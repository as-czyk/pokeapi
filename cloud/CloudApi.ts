import { AuthApi } from "./src/AuthApi";
import { Team } from "./src/db/Team";

import TeamApi = Team.API;

export const CloudApi = {
  ...AuthApi,
  ...TeamApi,
};
