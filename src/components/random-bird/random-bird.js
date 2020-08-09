import React, { Component } from "react";

import "./random-bird.css";

import BirdImg from "./image-bird";
import PlayerBirds from "./audio-bird";

export default class RandomBird extends Component {
  render() {
    return (
      <div className="random-bird">
        <BirdImg />
        <PlayerBirds />
      </div>
    );
  }
}
