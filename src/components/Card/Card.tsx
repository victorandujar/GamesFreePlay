import { GameStructure } from "../../types/types";
import CardStyled from "./CardStyled";
import { faWindows, faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  game: GameStructure;
}

const Card = ({ game }: CardProps): JSX.Element => {
  return (
    <CardStyled className="card" style={{ width: 300, height: 267 }}>
      <img src={game.thumbnail} className="card-img-top" alt={game.title} />
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
      </div>
      <div className="card__info">
        {game.platform === "PC (Windows)" ? (
          <FontAwesomeIcon icon={faWindows} />
        ) : (
          <FontAwesomeIcon icon={faChrome} />
        )}
        <span>{game.genre}</span>
      </div>
      <a href={game.game_url} className="btn btn-primary">
        Game details
      </a>
    </CardStyled>
  );
};

export default Card;
