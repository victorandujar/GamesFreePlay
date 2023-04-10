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
    position: relative;

    &__image {
      position: absolute;
      width: 100%;
      height: 400px;
      object-fit: cover;
      opacity: 30%;
      border-bottom: 1px solid black;
      z-index: -1;
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

    &__search {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      height: 470px;
      top: 20px;
    }

    &__field-search {
      border-radius: 0.375rem;
      opacity: 95%;
      border: none;
      padding: 0 6px;
      font-size: 12px;
      width: 220px;
      height: 30px;
    }

    &__button {
      color: #fff;
      font-weight: 800;
      background-color: #0d6efd;
      border-radius: 0.375rem;
      width: 65px;
      height: 30px;
      font-size: 14px;
      opacity: 100%;
      cursor: pointer;
      z-index: 1;
    }
  }
`;

export default HomePageStyled;
