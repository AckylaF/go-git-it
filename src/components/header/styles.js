import styled from "styled-components";

const breakMedium = "min-width: 760px";

export const Topbar = styled.header`
  background-color: #fff;
  color: #212529;
  padding: 0.5rem 1rem;
  width: 100%;
  box-shadow: 0px 0px 10px -4px #212529;

  @media screen and (${breakMedium}) {
    padding: 0.5rem 10rem;
  }

  h1 {
    a{
      display: flex;
      align-items: center;
    }

    img {
      width: 2.5rem;
      margin: 0 0.3rem;
    }
  }
`;
