import React, { Component } from "react";

import "./bird-list.css";

import BirdListItem from "../bird-list-item";
import birdsData from "../../../data/birdsdata";

const renderItems = (arr) => {
  // const className = props.page % 2 === 1 ? 'list-group-item default' : 'list-group-item'
  console.log(arr);
  return arr.map((item) => {
    const { id, name } = item;
    return (
      <li
        className="bird-list-item"
        key={id}
        // onClick={(event) => props.onItemSelected(id, event)}
      >
        <span className="li-btn"></span>
        <BirdListItem name={name} />
      </li>
    );
  });
};

const BirdList = ({ array }) => {
  const items = renderItems(array);

  return <ul className="bird-list">{items}</ul>;
};

export default BirdList;
