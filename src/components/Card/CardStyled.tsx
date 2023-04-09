import styled from "styled-components";

const CardStyled = styled.article`
  color: black;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .card {
    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      font-weight: 600;
      font-size: 15px;
    }
  }

  .card-body {
    flex: 0;
    padding: 0;
  }

  .card-title {
    font-size: 14px;
    font-weight: 800;
    padding: 0 20px;
  }

  .btn {
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    width: 120px;
  }
`;

export default CardStyled;
