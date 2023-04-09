import { useMemo, useReducer } from "react";
import gamesReducer from "../reducers/gamesReducer";
import GamesContext from "./GamesContext";

interface GamesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const GamesContextProvider = ({
  children,
}: GamesContextProviderProps): JSX.Element => {
  const [games, dispatch] = useReducer(gamesReducer, []);
  const gamesProps = useMemo(() => ({ games, dispatch }), [games]);

  return (
    <GamesContext.Provider value={gamesProps}>{children}</GamesContext.Provider>
  );
};

export default GamesContextProvider;
