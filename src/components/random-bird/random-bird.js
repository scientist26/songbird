import React, { Component } from "react";

import "./random-bird.css";
// import birdsData from '../../data/birdsdata'

import BirdImg from "./image-bird";
import PlayerBirds from "./audio-bird";

export default class RandomBird extends Component {
  render() {
    const { page, random, isCorrectBird } = this.props;
    return (
      <div className="random-bird">
        {/* <BirdImg page={page} random={random} right={right} /> */}
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
