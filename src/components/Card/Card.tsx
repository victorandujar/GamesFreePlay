import { GameStrucutre } from "../../types/types";
import CardStyled from "./CardStyled";

interface CardProps {
  game: GameStrucutre;
}

const Card = ({ game }: CardProps): JSX.Element => {
  return (
    <CardStyled className="card" style={{ width: 288 }}>
      <img src={game.thumbnail} className="card-img-top" alt={game.title} />
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">{game.short_description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Developer: {game.developer}</li>
        <li className="list-group-item">Publisher: {game.publisher}</li>
        <li className="list-group-item">Platform: {game.platform}</li>
        <li className="list-group-item">Release: {game.release_date}</li>
      </ul>
      <a href={game.game_url} className="btn btn-primary">
        Game details
      </a>
    </CardStyled>
  );
};

export default Card;