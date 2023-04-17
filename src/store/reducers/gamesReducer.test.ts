import { mockGamesReducer } from "../../mocks/gameMocks/gameMocks";
import { GameDetailStructure, GamesStructure } from "../../types/types";
import {
  GamesActionType,
  LoadGameAction,
  LoadGamesAction,
} from "../types/types";
import gamesReducer from "./gamesReducer";

describe("Given a gamesReducer", () => {
  describe("Whenn it receives the action to loadGames and a new state of games", () => {
    test("Then it should return the new state", () => {
      const currentGamesState: GamesStructure = [];

      const action: LoadGamesAction = {
        type: GamesActionType.loadGames,
        payload: mockGamesReducer.games,
      };

      const expectedNewGamesState = gamesReducer(
        {
          game: {
            description: "",
            developer: "",
            game_url: "",
            genre: "",
            id: 0,
            minimum_system_requirements: {
              graphics: "",
              memory: "",
              os: "",
              processor: "",
              storage: "",
            },
            platform: "",
            publisher: "",
            release_date: "",
            screenshots: [{ image: "" }, { image: "" }, { image: "" }],
            short_description: "",
            thumbnail: "",
            title: "",
          },
          games: currentGamesState,
        },
        action
      );

      expect(expectedNewGamesState.games).toStrictEqual(mockGamesReducer.games);
    });
  });

  describe("Whenn it receives the action to loadGame and a new state of games", () => {
    test("Then it should return the new state", () => {
      const currentGameState: GameDetailStructure = {
        description: "",
        developer: "",
        game_url: "",
        genre: "",
        id: 0,
        minimum_system_requirements: {
          graphics: "",
          memory: "",
          os: "",
          processor: "",
          storage: "",
        },
        platform: "",
        publisher: "",
        release_date: "",
        screenshots: [{ image: "" }, { image: "" }, { image: "" }],
        short_description: "",
        thumbnail: "",
        title: "",
      };

      const action: LoadGameAction = {
        type: GamesActionType.loadGame,
        payload: mockGamesReducer.game,
      };

      const expectedNewGamesState = gamesReducer(
        {
          games: [],
          game: currentGameState,
        },
        action
      );

      expect(expectedNewGamesState.game).toStrictEqual(mockGamesReducer.game);
    });
  });

  describe("When it receives the same state that already exists", () => {
    test("Then it should return the currentState", () => {
      const currentGameState: GameDetailStructure = {
        description: "",
        developer: "",
        game_url: "",
        genre: "",
        id: 0,
        minimum_system_requirements: {
          graphics: "",
          memory: "",
          os: "",
          processor: "",
          storage: "",
        },
        platform: "",
        publisher: "",
        release_date: "",
        screenshots: [{ image: "" }, { image: "" }, { image: "" }],
        short_description: "",
        thumbnail: "",
        title: "",
      };

      const action = {} as LoadGameAction;

      const expectedNewGamesState = gamesReducer(
        {
          games: [],
          game: currentGameState,
        },
        action
      );

      expect(expectedNewGamesState.game).toStrictEqual(currentGameState);
    });
  });
});
