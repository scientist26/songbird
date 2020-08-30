import React, { Component } from "react";

import "./App.css";

import Header from "../header";
import RandomBird from "../random-bird";
import AnswerBird from "../answers";

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
  };

  componentDidUpdate() {
    if (this.state.isNextPage === true) {
      this.setState({
        isNextPage: false,
      });
    }
  }

  onBirdSelected = (id) => {
    console.log(this.state);

    this.setState((state) => ({
      id: id - 1,
      isSelectedBird: true,
      isCorrectBird: id - 1 === state.random,
    }));
  };

  getNextpage = () => {
    if (this.state.page > 5) {
      return;
    }
    this.setState((state) => ({
      page: state.page + 1,
      random: randomBird(),
      isSelectedBird: false,
      isCorrectBird: false,
      isNextPage: true,
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
    } = this.state;

    return (
      <div className="App">
        <Header />
        <RandomBird page={page} random={random} isCorrectBird={isCorrectBird} />
        <AnswerBird
          page={page}
          random={random}
          id={id}
          isSelectedBird={isSelectedBird}
          isCorrectBird={isCorrectBird}
          onItemSelected={this.onBirdSelected}
          onNextPage={this.getNextpage}
          isNextPage={isNextPage}
        />
      </div>
    );
  }
}
