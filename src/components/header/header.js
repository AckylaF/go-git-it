import React from "react";

import { Topbar } from "./styles";
import Logo from "../../assets/git-square.svg";

export default function Header() {
  return (
    <Topbar>
      <h1>
        <a href="/">
          go
          <img src={Logo} alt="Git" />
          It
        </a>
      </h1>
    </Topbar>
  );
}
