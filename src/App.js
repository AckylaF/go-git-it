import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/header";
import Search from "./components/search/search";
import Card from "./components/card/card";
import Repos from "./components/repos/repos";

import { GlobalStyle, Container } from "./globalStyles";

export default function App() {
  const userInput = useSelector((state) => state.userInput.username);
  const dispatch = useDispatch();

  // RECEIVES DATA FROM API AND RETURNS OBJECT WITH USER INFO
  const userAction = ({
    name,
    login,
    bio,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => ({
    type: "GET_USER",
    name,
    login,
    bio,
    followers,
    following,
    public_repos,
    avatar_url,
  });

  //GETS EXAMPLE USER
  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        dispatch(userAction(data));
      });
  }, [dispatch]);

  // CHECKS FOR USER INPUT AND FETCHES DATA FROM SEARCHED USER
  if (userInput) {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          // MEANS THE USER DOESN'T EXIST
          dispatch({ type: "GET_ERROR", notFound: true });
        } else {
          dispatch(userAction(data));
          dispatch({ type: "GET_ERROR", notFound: false });
        }
      });
  }

  return (
    <Container>
      <GlobalStyle /> {/* GLOBAL STYLED COMPONENT */}
      <Header />
      <Search />
      <Card />
      <Repos />
    </Container>
  );
}
