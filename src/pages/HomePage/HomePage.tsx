import { useContext, useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useApi from "../../hooks/useApi";
import GamesContext from "../../store/contexts/GamesContext";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getGames } = useApi();

  useEffect(() => {
    getGames();
  }, [getGames]);

  const { games } = useContext(GamesContext);

  return (
    <HomePageStyled className="home-page">
      <h2 className="home-page__title" aria-label="All games">
        All games
      </h2>
      <CardList games={games} />
    </HomePageStyled>
  );
};

export default HomePage;
