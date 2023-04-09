import GamesContext from "../store/contexts/GamesContext";
import GlobalStyles from "../styles/GlobalStyles";
import { GamesStructure } from "../types/types";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  mockStore: GameStoreStructure;
}

interface GameStoreStructure {
  dispatch: React.Dispatch<any>;
  games: GamesStructure;
}

const MockContextProvider = ({ children, mockStore }: WrapperProps) => {
  return (
    <GamesContext.Provider value={mockStore}>
      <GlobalStyles />
      {children}
    </GamesContext.Provider>
  );
};

export default MockContextProvider;
