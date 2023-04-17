import { GameDetailStructure, GamesStructure } from "../../types/types";

export enum GamesActionType {
  loadGames,
  loadGame,
}

export interface GamesAction {
  type: GamesActionType;
  payload?: unknown;
}

export interface LoadGamesAction extends GamesAction {
  payload: GamesStructure;
}

export interface LoadGameAction extends GamesAction {
  payload: GameDetailStructure;
}

export interface GamesApiResponse {
  games: GamesStructure;
  game: GameDetailStructure;
}
