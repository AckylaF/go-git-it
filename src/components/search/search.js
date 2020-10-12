import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form } from "./styles";

export default function Search() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const getValue = (event) => {
    setUsername(event.target.value);
  };
  const searchUser = () => {
    dispatch({ type: "FIND_USER", value: username });
    dispatch({ type: "GET_REPOS", repos: [] }); //RESETS REPOS FOR NEXT SEARCH
  };

  return (
    <Form>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={getValue}
      />
      <button type="button" onClick={searchUser}>
        Search
      </button>
    </Form>
  );
}
