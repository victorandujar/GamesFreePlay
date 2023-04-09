import { GamesStructure } from "../../types/types";
import Card from "../Card/Card";
import CardListStyled from "./CardLIstStyled";

interface CardListProps {
  games: GamesStructure;
}

const CardList = ({ games }: CardListProps): JSX.Element => {
  return (
    <CardListStyled>
      {games.map((game) => (
        <li key={game.id}>
          <Card game={game} />
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
