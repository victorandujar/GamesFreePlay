import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="main-header">
      <img src="images/logo.png" alt="FreeGames logo" height={40} width={40} />
      <h1 className="main-header__title">FreeGames Collection</h1>
    </HeaderStyled>
  );
};

export default Header;
