import { useContext, useState } from "react";
import ButtonForm from "../ButtonForm/ButtonForm";
import FormSearchStyled from "./FormSearchStyled";
import GamesContext from "../../store/contexts/GamesContext";
import useApi from "../../hooks/useApi";

const FormSearch = (): JSX.Element => {
  const [gamesSearched, setGames] = useState("");
  const { getGame } = useApi();

  let gameId: number;

  const { games } = useContext(GamesContext);

  const handleGame = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setGames(value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const game = games.games.find((game) => game.title === gamesSearched);
    gameId = game ? game.id : 0;

    getGame(gameId);
  };

  const emptyInput = gamesSearched === "";

  return (
    <FormSearchStyled className="form__search" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="form__field-search"
        placeholder="Find your game"
        onChange={handleGame}
      />
      <ButtonForm
        className="form__button"
        isDisabled={emptyInput}
        text="Search"
      />
    </FormSearchStyled>
  );
};

export default FormSearch;
