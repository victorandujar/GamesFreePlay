import { GamesApiResponse } from "../../store/types/types";
import Card from "../Card/Card";
import CardListStyled from "./CardLIstStyled";

interface CardListProps {
  games: GamesApiResponse;
}

const CardList = ({ games }: CardListProps): JSX.Element => {
  return (
    <CardListStyled>
      {games.games?.length > 0 ? (
        games.games?.map((game) => (
          <li key={game.id}>
            <Card game={game} />
          </li>
        ))
      ) : (
        <Card game={games.game} />
      )}
    </CardListStyled>
  );
};

export default CardList;
