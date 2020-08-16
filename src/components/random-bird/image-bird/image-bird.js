import React, { Component } from "react";

import "./image-bird.css";

export default class BirdImg extends Component {
  render() {
    return (
      <img className="bird-img" src="img/random-bird.gif" alt="bird"></img>
    );
  }
}
