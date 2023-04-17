import styled from "styled-components";

const CardListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  padding: 30px 0;

  @media (max-width: 500px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;

export default CardListStyled;
