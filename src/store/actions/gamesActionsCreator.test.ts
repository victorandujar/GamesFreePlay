import { mockListOfGames } from "../../mocks/gameMocks/gameMocks";
import { GamesActionType, LoadGamesAction } from "../types/types";
import { loadGamesActionCreator } from "./gamesActionsCreator";

describe("Given a gamesActionsCreator function", () => {
  describe("When it receives a list of 2 games", () => {
    test("Then it should call the action 'loadGames' and the list of 2 games as payload", () => {
      const expectedGamesList: LoadGamesAction = {
        type: GamesActionType.loadGames,
        payload: mockListOfGames,
      };

      const loadGamesAction = loadGamesActionCreator(mockListOfGames);

      expect(loadGamesAction).toStrictEqual(expectedGamesList);
    });
  });
});
