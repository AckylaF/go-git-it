import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Noto Sans', sans-serif;
    background-color: #f7f7f7
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style-type: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

