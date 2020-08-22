import React, { Component } from "react";

import "./bird-list-item.css";
// import birdsData from "../../../data/birdsdata";

// export default class BirdListItem extends Component {
//   render() {
//     const { birdsData } = this.props;
//     return <span className="bird-list-item-btn">Sparrow</span>;
//   }
// }

const BirdListItem = ({ name }) => {
  return <span className="bird-list-item-btn">{name}</span>;
};

export default BirdListItem;
