import { GamesStructure } from "../../types/types";

export enum GamesActionType {
  loadGames,
}

export interface GamesAction {
  type: GamesActionType;
  payload: unknown;
}

export interface LoadGamesAction extends GamesAction {
  payload: GamesStructure;
}
