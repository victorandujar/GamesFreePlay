import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 0;
  font-family: "Play";

  .home-page {
    &__title {
      font-size: 25px;
    }

    &__content {
      position: relative;
    }
  }

  .hero-section {
    width: 100%;
    height: 470px;
    position: relative;

    &__image {
      position: absolute;
      width: 100%;
      height: 400px;
      object-fit: cover;
      opacity: 30%;
      border-bottom: 1px solid black;
    }

    &__title {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 400px;
      font-weight: 900;
      font-size: 20px;
    }
  }
`;

export default HomePageStyled;
