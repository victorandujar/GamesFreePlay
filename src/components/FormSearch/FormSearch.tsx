import ButtonForm from "../ButtonForm/ButtonForm";
import FormSearchStyled from "./FormSearchStyled";

const FormSearch = (): JSX.Element => {
  return (
    <FormSearchStyled className="form__search">
      <input
        type="text"
        className="form__field-search"
        placeholder="Find your game."
      />
      <ButtonForm className="form__button" isDisabled={false} text="Search" />
    </FormSearchStyled>
  );
};

export default FormSearch;
