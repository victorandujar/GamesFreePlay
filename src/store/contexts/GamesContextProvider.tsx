import { useMemo, useReducer } from "react";
import gamesReducer from "../reducers/gamesReducer";
import GamesContext from "./GamesContext";

interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const GamesContextProvider = ({
  children,
}: GamesContextProviderProps): JSX.Element => {
  const [games, dispatch] = useReducer(gamesReducer, {
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
  });
  const gamesProps = useMemo(() => ({ games, dispatch }), [games]);

  return (
    <GamesContext.Provider value={gamesProps}>{children}</GamesContext.Provider>
  );
};

export default GamesContextProvider;
