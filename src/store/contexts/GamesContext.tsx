import { createContext } from "react";
import { GamesAction, GamesApiResponse } from "../types/types";

interface GamesInfoContextStructure {
  games: GamesApiResponse;
  dispatch: React.Dispatch<GamesAction>;
}

const GamesContext = createContext<GamesInfoContextStructure>(
  {} as GamesInfoContextStructure
);

export default GamesContext;
