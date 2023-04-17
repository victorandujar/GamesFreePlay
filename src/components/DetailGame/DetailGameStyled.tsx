import styled from "styled-components";

const DetailGameStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: justify;
  width: 100%;

  .primary-info {
    display: flex;
    gap: 30px;

    &__image {
      border-radius: 5px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }

    @media (max-width: 400px) {
      &__image {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 7px;

    &__title {
      font-weight: 800;
    }

    &__info {
      font-size: 15px;
    }
  }

  .about {
    width: 65%;

    @media (max-width: 1400px) {
      width: 80%;
    }

    @media (max-width: 1100px) {
      width: 100%;
    }

    &__title {
      font-size: 22px;
      font-weight: 800;
    }

    &__description {
      font-size: 15px;
    }
  }

  .screenshots {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &__title {
      font-size: 22px;
      font-weight: 800;
    }

    &__images {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    &__image {
      border-radius: 5px;
    }

    @media (max-width: 400px) {
      &__image {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .system-requirements {
    display: flex;
    flex-direction: column;

    &__title {
      font-size: 22px;
      font-weight: 800;
    }

    &__data {
      font-size: 15px;
    }
  }
`;

export default DetailGameStyled;
