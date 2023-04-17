import { rest } from "msw";

const apiUrlGames =
  "https://free-to-play-games-database.p.rapidapi.com/api/games";

export const handlers = [
  rest.get(`${apiUrlGames}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
