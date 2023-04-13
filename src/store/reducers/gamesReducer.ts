import { GamesStructure } from "../../types/types";
import { GamesAction, GamesActionType, LoadGamesAction } from "../types/types";

const gamesReducer = (
  currentGames: GamesStructure,
  action: GamesAction
): GamesStructure => {
  let newGames: GamesStructure;

  switch (action.type) {
    case GamesActionType.loadGames:
      newGames = [...(action as LoadGamesAction).payload];
      break;

    default:
      newGames = currentGames;
  }

  return newGames;
};

export default gamesReducer;
