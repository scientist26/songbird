import React, { Component } from "react";

import "./bird-list-item.css";

export default class BirdListItem extends Component {
  render() {
    return (
      <li className="bird-list-item">
        <span className="bird-list-item-btn">Воробей</span>
      </li>
    );
  }
}
