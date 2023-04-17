import styled from "styled-components";

const DetailPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 30px 0;

  .detail-page {
    &__title {
      font-weight: 800;
      font-family: Play;

      @media (max-width: 350px) {
        font-size: 20px;
      }
    }
  }
`;

export default DetailPageStyled;
