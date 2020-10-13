import styled from "styled-components";

const breakMedium = "min-width: 760px";

export const Container = styled.article`
  width: 90vw;

  @media screen and (${breakMedium}) {
    width: 80vw;
  }

  ul {
    @media screen and (${breakMedium}) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
      grid-gap: 1rem;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 10px -4px;
      padding: 0.5rem;
      margin-bottom: 1.5rem;

      a {
        font-weight: 700;
      }
      p {
        font-size: 0.9rem;
        color: #212529;
        margin: 0.5rem 0;
      }
      span {
        margin-top: auto;
      }
    }
  }
`;
