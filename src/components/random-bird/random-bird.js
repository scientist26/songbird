import React, { Component } from "react";

import "./random-bird.css";

import BirdImg from "./image-bird";
import PlayerBirds from "./audio-bird";

export default class RandomBird extends Component {
  render() {
    const { page, random, isCorrectBird, isEndGame } = this.props;
    const hiddenBlock = isEndGame ? "random-bird hidden" : "random-bird";
    return (
      <div className={hiddenBlock}>
        <BirdImg {...this.props} />
        <PlayerBirds
          page={page}
          random={random}
          isCorrectBird={isCorrectBird}
        />
      </div>
    );
  }
}
