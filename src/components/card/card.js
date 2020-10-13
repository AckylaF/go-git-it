import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Gif } from "./styles";

import notFound from "../../assets/notFound.webp";

export default function Card() {
  const user = useSelector((state) => state.user.profile);
  const error = useSelector((state) => state.error.notFound);
  const dispatch = useDispatch();

  // GETS SEARCHED USER REPOS. DISPATCHES TO STATE.REPOS.PROJECTS
  const getRepos = () => {
    fetch(`https://api.github.com/users/${user.login}/repos`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_REPOS", repos: data });
      });
  };

  return (
    <>
      {error === true ? (
        <Gif src={notFound} alt="User not found" />
      ) : (
        <Container>
          <img src={user.avatar_url} alt={user.name} />

          <section>
            <h3> {user.name} </h3>
            <span> {user.login} </span>
            <span>{user.public_repos} public repo(s)</span>
            <p> {user.bio} </p>

            <div>
              <span> {user.followers} Followers</span>
              <span> {user.following} Following</span>
            </div>
            <button type="button" onClick={getRepos}>
              View Projects
            </button>
          </section>
        </Container>
      )}
    </>
  );
}
