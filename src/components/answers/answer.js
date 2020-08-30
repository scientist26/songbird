import React, { Component } from "react";

import "./answer.css";

import BirdList from "./bird-list";
import DescriptionBird from "./description/description";

export default class AnswerBird extends Component {
  render() {
    const {
      page,
      random,
      id,
      isSelectedBird,
      isCorrectBird,
      onItemSelected,
      onNextPage,
      isNextPage,
    } = this.props;

    const nextPage = () => {
      if (isCorrectBird) {
        onNextPage();
      }
    };
    return (
      <div className="bird-answer">
        <div className="bird-option">
          <BirdList
            page={page}
            random={random}
            isSelectedBird={isSelectedBird}
            isCorrectBird={isCorrectBird}
            onItemSelected={onItemSelected}
            isNextPage={isNextPage}
          />
        </div>
        <div className="bird-description">
          <DescriptionBird
            page={page}
            // random={random}
            id={id}
            isSelectedBird={isSelectedBird}
          />
        </div>
        <button className="btn" onClick={nextPage}>
          Next level
        </button>
      </div>
    );
  }
}
