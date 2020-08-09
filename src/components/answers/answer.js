import React, { Component } from "react";

import "./answer.css";

import BirdList from "./bird-list";

export default class AnswerBird extends Component {
  render() {
    return (
      <div>
        <div>
          <BirdList />
        </div>
        <div></div>
      </div>
    );
  }
}
