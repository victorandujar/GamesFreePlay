import { GamesActionType } from "../store/types/types";
import { GamesAction, LoadGamesAction } from "../store/types/types";
import { GamesStructure } from "../types/types";

export const dispatch: React.Dispatch<GamesAction> = jest.fn();
export const games: GamesStructure = [];
export const mockStore = { dispatch, games: [] as GamesStructure };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games,
};
