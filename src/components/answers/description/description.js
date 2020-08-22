import React, { Component } from "react";

import "./description.css";

import ChangeBird from "./change-bird/change-bird";

const DescriptionBird = () => {
  return (
    <div className="bird-content">
      <div className="bird-content__instruction">
        <p>
          <span>Послушайте плеер. </span>
          <span>Выберите птицу из списка.</span>
        </p>
      </div>
      <div className="bird-content__description">
        <ChangeBird />
      </div>
    </div>
  );
};

export default DescriptionBird;
