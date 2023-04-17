import { GameDetailStructure } from "../../types/types";
import DetailGameStyled from "./DetailGameStyled";

interface GameDetailProps {
  game: GameDetailStructure;
}

const DetailGame = ({ game }: GameDetailProps): JSX.Element => {
  return (
    <DetailGameStyled className="detail-page">
      <div className="detail-page__primary-info primary-info">
        <img
          src={game.thumbnail}
          alt={game.title}
          height={200}
          width={350}
          className="primary-info__image"
        />
        <div className="primary-info__data data">
          <h2 className="data__title">{game.title}</h2>
          <span className="data__info">Developer: {game.developer}</span>
          <span className="data__info">Publisher: {game.publisher}</span>
          <span className="data__info">Platform: {game.platform}</span>
          <span className="data__info">Releade date: {game.release_date}</span>
          <a href={game.game_url} className="btn btn-primary">
            Download game
          </a>
        </div>
      </div>
      <div className="detail-page__about about">
        <h3 className="about__title">About {game.title}</h3>
        <p className="about__description">{game.description}</p>
      </div>
      <div className="detail-page__screenshots screenshots">
        <h3 className="screenshots__title">Game screenshots</h3>
        <div className="screenshots__images">
          <img
            src={game.screenshots[0].image}
            alt={`Screenshot from ${game.title} game`}
            height={200}
            width={350}
            className="screenshots__image"
          />
          <img
            src={game.screenshots[1].image}
            alt={`Screenshot from ${game.title} game`}
            height={200}
            width={350}
            className="screenshots__image"
          />
          <img
            src={game.screenshots[2].image}
            alt={`Screenshot from ${game.title} game`}
            height={200}
            width={350}
            className="screenshots__image"
          />
        </div>
      </div>
      <div className="detail-page__system-requirements system-requirements">
        {!game.minimum_system_requirements ? (
          ""
        ) : (
          <>
            <h3 className="system-requirements__title">System requirements</h3>
            <span className="system-requirements__data">
              {game.minimum_system_requirements.graphics}
            </span>
            <span className="system-requirements__data">
              {game.minimum_system_requirements.os}
            </span>
            <span className="system-requirements__data">
              {game.minimum_system_requirements.memory}
            </span>
            <span className="system-requirements__data">
              {game.minimum_system_requirements.processor}
            </span>
            {!game.minimum_system_requirements.storage ? (
              ""
            ) : (
              <span className="system-requirements__data">
                {game.minimum_system_requirements.storage}
              </span>
            )}
          </>
        )}
      </div>
    </DetailGameStyled>
  );
};

export default DetailGame;
