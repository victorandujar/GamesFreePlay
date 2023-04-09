import axios from "axios";
import { GamesStructure } from "../types/types";
import { useCallback, useContext } from "react";
import GamesContext from "../store/contexts/GamesContext";
import { loadGamesActionCreator } from "../store/actions/gamesActionsCreator";

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

  return { getGames };
};

export default useApi;
