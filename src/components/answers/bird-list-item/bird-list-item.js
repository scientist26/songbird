import React from "react";

import "./bird-list-item.css";

const BirdListItem = ({ name }) => {
  return <span className="bird-list-item-btn">{name}</span>;
};

export default BirdListItem;
