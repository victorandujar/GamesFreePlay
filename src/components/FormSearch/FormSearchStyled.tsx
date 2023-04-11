import styled from "styled-components";

const FormSearchStyled = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  gap: 10px;
  z-index: 1;

  .form {
    &__search {
      width: 100%;
    }

    &__field-search {
      border-radius: 0.375rem;
      opacity: 95%;
      border: none;
      padding: 0 6px;
      font-size: 12px;
      width: 220px;
      height: 30px;

      :focus {
        border: 2px solid #0d6efd;
      }
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
    }
  }
`;

export default FormSearchStyled;
