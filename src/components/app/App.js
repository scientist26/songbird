import React, { Component } from "react";

import "./App.css";

import Header from "../header";
import RandomBird from "../random-bird";
import AnswerBird from "../answers";
import EndGame from "../end-game";

const randomBird = () => {
  return Math.floor(Math.random() * 6);
};

export default class App extends Component {
  state = {
    page: 0,
    random: randomBird(),
    id: 0,
    isSelectedBird: false,
    isCorrectBird: false,
    isNextPage: false,
    isEndGame: false,
  };

  componentDidUpdate() {
    if (this.state.isNextPage === true) {
      this.setState({
        isNextPage: false,
      });
    }
  }

  onBirdSelected = (id) => {
    this.setState((state) => ({
      id: id - 1,
      isSelectedBird: true,
      isCorrectBird: id - 1 === state.random,
    }));
  };

  getNextpage = () => {
    if (this.state.page === 5) {
      this.setState((state) => ({
        page: state.page - 1,
        isEndGame: true,
      }));
    }
    this.setState((state) => ({
      page: state.page + 1,
      random: randomBird(),
      isSelectedBird: false,
      isCorrectBird: false,
      isNextPage: true,
    }));
  };

  restartGame = () => {
    this.setState((state) => ({
      page: (state.page = 0),
      random: randomBird(),
      id: (state.id = 0),
      isSelectedBird: false,
      isCorrectBird: false,
      isNextPage: false,
      isEndGame: false,
    }));
  };

  render() {
    const {
      page,
      random,
      id,
      isSelectedBird,
      isCorrectBird,
      isNextPage,
      isEndGame,
    } = this.state;

    return (
      <div className="App">
        <Header page={page} isEndGame={isEndGame} />
        <EndGame isEndGame={isEndGame} restartGame={this.restartGame} />
        <RandomBird
          page={page}
          random={random}
          isCorrectBird={isCorrectBird}
          isEndGame={isEndGame}
        />
        <AnswerBird
          page={page}
          random={random}
          id={id}
          isSelectedBird={isSelectedBird}
          isCorrectBird={isCorrectBird}
          onItemSelected={this.onBirdSelected}
          getNextpage={this.getNextpage}
          isNextPage={isNextPage}
          isEndGame={isEndGame}
        />
      </div>
    );
  }
}
