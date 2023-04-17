import useApi from "../../hooks/useApi";
import { useContext, useEffect } from "react";
import GamesContext from "../../store/contexts/GamesContext";
import { useParams } from "react-router-dom";
import DetailPageStyled from "./DetailPageStyled";
import DetailGame from "../../components/DetailGame/DetailGame";

const DetailPage = (): JSX.Element => {
  const { getGame } = useApi();
  const { id } = useParams();

  const {
    games: { game },
  } = useContext(GamesContext);

  useEffect(() => {
    getGame(+id!);
  }, [id, getGame]);

  return (
    <DetailPageStyled className="detail-page">
      <h2 className="detail-page__title">See {game.title} details</h2>
      <DetailGame game={game} />
    </DetailPageStyled>
  );
};

export default DetailPage;
