import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function Repos() {
  const repos = useSelector((state) => state.repos.projects);

  return (
    <Container>
      <ul>
        {/* MAPS REPO STATE AND RENDERS A LIST WITH EVERY REPO FROM THE SEARCHED USER */}
        {repos.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p> {repo.description} </p>
            <span> {repo.created_at} </span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
