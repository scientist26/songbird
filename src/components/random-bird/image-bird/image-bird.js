import React, { Component } from "react";

import "./image-bird.css";
import birdsData from "../../../data/birdsdata";

export default class BirdImg extends Component {
  render() {
    const { page, random, isCorrectBird } = this.props;
    const defaultBird = "img/random-bird.gif";
    return (
      <img
        className="bird-img"
        src={isCorrectBird ? birdsData[page][random].image : defaultBird}
        alt={isCorrectBird ? birdsData[page][random].name : "bird"}
      ></img>
    );
  }
}
