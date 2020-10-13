import styled from "styled-components";

const breakMedium = "min-width: 760px";
const breakLarge = "min-width: 1200px";

export const Gif = styled.img`
  width: 90vw;
  margin-top: 2rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px -4px;

  @media screen and (${breakMedium}) {
    width: 50vw;
  }
`;

export const Container = styled.article`
  width: 90vw;
  margin: 2rem 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 20px -4px;
  position: relative;

  @media screen and (${breakMedium}) {
    width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (${breakLarge}) {
    width: 50vw;
  }

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;

    @media screen and (${breakMedium}) {
      border-radius: 8px 0 0 8px;
      min-height: 100%;
    }
  }
  section {
    min-height: 30vh;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  h3 {
    font-size: 1.5rem;
  }
  span {
    color: #b5b5b5;
  }
  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-top: auto;
  }
  button {
    position: absolute;
    bottom: 2%;
    right: 2%;
    background-color: #104c82;
    color: #fff;
    padding: 0.5rem;
    border-radius: 12px;
    border: 1px solid;
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
