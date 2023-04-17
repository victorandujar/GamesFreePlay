import {
  GamesAction,
  GamesActionType,
  GamesApiResponse,
  LoadGameAction,
  LoadGamesAction,
} from "../types/types";

const gamesReducer = (
  currentGames: GamesApiResponse,
  action: GamesAction
): GamesApiResponse => {
  let newGames: GamesApiResponse = {
    games: [],
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
  };

  switch (action?.type) {
    case GamesActionType.loadGames:
      newGames = {
        games: [...(action as LoadGamesAction).payload],
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
      };
      break;
    case GamesActionType.loadGame:
      newGames = {
        games: [],
        game: (action as LoadGameAction).payload,
      };
      break;

    default:
      newGames = currentGames;
  }

  return newGames;
};

export default gamesReducer;
