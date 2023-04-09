import { mockListOfGames } from "../../mocks/gameMocks/CardMocks";
import { GamesStructure } from "../../types/types";
import { GamesActionType, LoadGamesAction } from "../types/types";
import gamesReducer from "./gamesReducer";

describe("Given a gamesReducer", () => {
  describe("Whenn it receives the action to loadGames and a new state of games", () => {
    test("Then it should return the new state", () => {
      const currentGamesState: GamesStructure = [];

      const action: LoadGamesAction = {
        type: GamesActionType.loadGames,
        payload: mockListOfGames,
      };

      const expectedNewGamesState = gamesReducer(currentGamesState, action);

      expect(expectedNewGamesState).toStrictEqual(mockListOfGames);
    });
  });
});
