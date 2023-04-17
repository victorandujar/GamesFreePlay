import { GameDetailStructure, GamesStructure } from "../../types/types";
import {
  GamesActionType,
  LoadGameAction,
  LoadGamesAction,
} from "../types/types";

export const loadGamesActionCreator = (
  games: GamesStructure
): LoadGamesAction => ({
  type: GamesActionType.loadGames,
  payload: games,
});

export const loadGameActionCreator = (
  game: GameDetailStructure
): LoadGameAction => ({
  type: GamesActionType.loadGame,
  payload: game,
});
