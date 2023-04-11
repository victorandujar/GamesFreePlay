import { useContext, useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useApi from "../../hooks/useApi";
import GamesContext from "../../store/contexts/GamesContext";
import HomePageStyled from "./HomePageStyled";
import FormSearch from "../../components/FormSearch/FormSearch";

const HomePage = (): JSX.Element => {
  const { getGames } = useApi();

  useEffect(() => {
    getGames();
  }, [getGames]);

  const { games } = useContext(GamesContext);

  return (
    <HomePageStyled className="home-page">
      <div className="home-page__hero-section hero-section">
        <FormSearch />
        <img
          src="https://images.pexels.com/photos/7862657/pexels-photo-7862657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="gaming"
          className="hero-section__image"
        />
        <h2 className="hero-section__title">
          Find your game and start playing.
        </h2>
      </div>
      <div className="home-page__content">
        <h3 className="home-page__title" aria-label="All games">
          All games
        </h3>
        <CardList games={games} />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
