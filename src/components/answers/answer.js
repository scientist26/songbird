import React, { Component } from "react";

import "./answer.css";

import BirdList from "./bird-list";
import DescriptionBird from "./description/description";
import birdsData from "../../data/birdsdata";

export default class AnswerBird extends Component {
  render() {
    return (
      <div className="bird-answer">
        <div className="bird-option">
          <BirdList array={birdsData[2]} />
        </div>
        <div className="bird-description">
          <DescriptionBird />
        </div>
        <button className="btn">Next level</button>
      </div>
    );
  }
}
