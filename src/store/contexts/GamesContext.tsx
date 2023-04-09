import { createContext } from "react";
import { GamesStructure } from "../../types/types";
import { GamesAction } from "../types/types";

interface GamesInfoContextStructure {
  games: GamesStructure;
  dispatch: React.Dispatch<GamesAction>;
}

const GamesContext = createContext<GamesInfoContextStructure>(
  {} as GamesInfoContextStructure
);

export default GamesContext;
