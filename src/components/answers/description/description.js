import React, { Component } from "react";

import "./description.css";

import ChangeBird from "./change-bird/change-bird";

export default class DescriptionBird extends Component {
  render() {
    const { page, id, isSelectedBird } = this.props;

    return (
      <div className="bird-content">
        {isSelectedBird ? (
          <div className="bird-content__description">
            <ChangeBird page={page} id={id} />
          </div>
        ) : (
          <div className="bird-content__instruction">
            <p>
              <span>Послушайте плеер. </span>
              <span>Выберите птицу из списка.</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}
