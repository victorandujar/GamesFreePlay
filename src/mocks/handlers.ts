import { rest } from "msw";
import { mockListOfGames } from "./gameMocks/CardMocks";

const apiUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games";

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockListOfGames));
  }),
];
