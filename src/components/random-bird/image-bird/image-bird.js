import React, { Component } from "react";

import "./image-bird.css";

export default class BirdImg extends Component {
  render() {
    return (
      // <img className="bird-img" src="img/random-bird.gif" alt="bird"></img>
      <img
        className="bird-img"
        // src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
        src="img/random-bird.gif"
        alt="bird"
      ></img>
    );
  }
}
