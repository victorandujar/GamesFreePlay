import {
  GamesActionType,
  GamesApiResponse,
  LoadGameAction,
} from "../store/types/types";
import { GamesAction, LoadGamesAction } from "../store/types/types";
import { mockListOfGames } from "./gameMocks/gameMocks";

export const dispatch: React.Dispatch<GamesAction> = jest.fn();
export const games: GamesApiResponse = {
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
  games: mockListOfGames,
};
export const mockStore = { dispatch, games: {} as GamesApiResponse };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadGamesAction: LoadGamesAction = {
  type: GamesActionType.loadGames,
  payload: games.games,
};

export const GameDispatch: React.Dispatch<GamesAction> = jest.fn();
export const mockGames: GamesApiResponse = {
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
  games: [],
};
export const mockGameStore = { dispatch, mockGames: {} as GamesApiResponse };
export const mockGameDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadGameAction: LoadGameAction = {
  type: GamesActionType.loadGames,
  payload: games.game,
};
