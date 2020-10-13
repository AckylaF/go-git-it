import styled from "styled-components";

const breakMedium = "min-width: 760px";

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;

  input {
    padding: 0.5rem;
    font-size: 1.2rem;
    border: 1px solid #212529;
    border-radius: 4px;
    width: 70%;
  }
  button {
    background-color: #104c82;
    color: #fff;
    width: 30%;
    margin-left: 0.5rem;
    border-radius: 4px;
    border: 1px solid;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;

    transition: 0.3s;

    @media screen and (${breakMedium}) {
      &:hover {
        background-color: #fff;
        color: #104c82;
        border: 1px solid;
      }
    }
  }
`;
