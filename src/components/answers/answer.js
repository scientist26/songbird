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
      getNextpage,
      isNextPage,
      isEndGame,
    } = this.props;

    const onNextPage = () => {
      if (isCorrectBird) {
        getNextpage();
      }
    };
    const hiddenBlock = isEndGame ? "bird-answer hidden" : "bird-answer";
    const activeButton = isCorrectBird ? "btn active" : "btn";
    return (
      <div className={hiddenBlock}>
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
            id={id}
            isSelectedBird={isSelectedBird}
          />
        </div>
        <button className={activeButton} onClick={onNextPage}>
          Next level
        </button>
      </div>
    );
  }
}
