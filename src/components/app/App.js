import React, { Component } from "react";

import "./App.css";

import Header from "../header";
import RandomBird from "../random-bird";
import AnswerBird from "../answers";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomBird />
        <AnswerBird />
      </div>
    );
  }
}
