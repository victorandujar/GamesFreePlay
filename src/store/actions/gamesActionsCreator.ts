import { GamesStructure } from "../../types/types";
import { GamesActionType, LoadGamesAction } from "../types/types";

export const loadGamesActionCreator = (
  games: GamesStructure
): LoadGamesAction => ({
  type: GamesActionType.loadGames,
  payload: games,
});
