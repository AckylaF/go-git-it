import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/header';
import Search from './components/search/search';
import Card from './components/card/card';


export default function App() {
  const userInput = useSelector(state => state.userInput.username)
  const dispatch = useDispatch();
  const userAction = ({ name, login, bio, followers, following, public_repos, avatar_url}) => ({
    type: 'GET_USER',
    name,
    login,
    bio,
    followers,
    following,
    public_repos,
    avatar_url
  });


  if(userInput) {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        dispatch({ type: 'GET_ERROR', notFound: true})
      } else {
        dispatch(userAction(data))
        dispatch({ type: 'GET_ERROR', notFound: false})
      }
    })
  }

  return (
    <>
      <Header />
      <Search />
      <Card />
    </>
  );
}
