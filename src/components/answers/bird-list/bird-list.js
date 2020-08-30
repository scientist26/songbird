import React, { Component } from "react";

import "./bird-list.css";

import birdsData from "../../../data/birdsdata";
import BirdItem from "../bird-item";

const renderItems = ({
  random,
  isCorrectBird,
  onItemSelected,
  page,
  isNextPage,
}) => {
  return birdsData[page].map((item) => {
    const { id, name } = item;

    return (
      <BirdItem
        key={id}
        random={random}
        id={id}
        name={name}
        isCorrectBird={isCorrectBird}
        onItemSelected={onItemSelected}
        isNextPage={isNextPage}
      />
    );
  });
};

export default class BirdList extends Component {
  state = {
    stop: false,
  };
  render() {
    const {
      page,
      random,
      isCorrectBird,
      onItemSelected,
      isNextPage,
    } = this.props;
    const items = renderItems({
      random,
      isCorrectBird,
      onItemSelected,
      page,
      isNextPage,
    });
    return <ul className="bird-list">{items}</ul>;
  }
}
