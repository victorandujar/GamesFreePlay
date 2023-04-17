import axios from "axios";
import { GameDetailStructure, GamesStructure } from "../types/types";
import { useCallback, useContext } from "react";
import GamesContext from "../store/contexts/GamesContext";
import {
  loadGameActionCreator,
  loadGamesActionCreator,
} from "../store/actions/gamesActionsCreator";

const urlApiSingleGame =
  "https://free-to-play-games-database.p.rapidapi.com/api/game";

const useApi = () => {
  const { dispatch } = useContext(GamesContext);

  const getGames = useCallback(async () => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "e13f113c85mshc4f7847a00d282ep13b377jsn09156613e306",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const games = (await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return (error as Error).message;
      })) as unknown as GamesStructure;

    dispatch(loadGamesActionCreator(games));
  }, [dispatch]);

  const getGame = useCallback(
    async (idGame: number) => {
      const options = {
        method: "GET",
        url: `${urlApiSingleGame}?id=${idGame}`,
        headers: {
          "X-RapidAPI-Key":
            "e13f113c85mshc4f7847a00d282ep13b377jsn09156613e306",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const game = (await axios
        .request(options)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return (error as Error).message;
        })) as GameDetailStructure;

      dispatch(loadGameActionCreator(game));
    },
    [dispatch]
  );
  return { getGames, getGame };
};

export default useApi;
