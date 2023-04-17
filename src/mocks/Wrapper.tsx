import GamesContext from "../store/contexts/GamesContext";
import { GamesApiResponse } from "../store/types/types";
import GlobalStyles from "../styles/GlobalStyles";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  mockStore: GameStoreStructure;
}

interface GameStoreStructure {
  dispatch: React.Dispatch<any>;
  games: GamesApiResponse;
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
