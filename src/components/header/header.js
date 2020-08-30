import React from "react";

import "./header.css";

import TitleApp from "../header/header-title";
import ScoreApp from "../header/header-score";
import Navigation from "../header/header-navigation";

const Header = ({ page }) => {
  return (
    <header className="header">
      <div className="top-panel">
        <TitleApp />
        <ScoreApp />
      </div>
      <Navigation page={page} />
    </header>
  );
};

export default Header;
