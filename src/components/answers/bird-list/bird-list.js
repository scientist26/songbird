import React, { Component } from "react";

import "./bird-list.css";

import BirdListItem from "../bird-list-item";

export default class BirdList extends Component {
  render() {
    return (
      <ul className="bird-list">
        <BirdListItem />
      </ul>
    );
  }
}
