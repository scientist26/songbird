import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import birdsData from "../../../../data/birdsdata";

import "./change-bird.css";
import "../../../random-bird/audio-bird/audio-bird.css";

export default class ChangeBird extends Component {
  render() {
    const { page, id } = this.props;

    return (
      <div className="bird-details-wrapper">
        <div className="bird-details">
          <img
            className="bird-img"
            src={birdsData[page][id].image}
            alt={birdsData[page][id].name}
          ></img>
          <ul className="bird-details__list">
            <li className="bird-details__list-item">
              <h4>{birdsData[page][id].name}</h4>
            </li>
            <li className="bird-details__list-item">
              <span>{birdsData[page][id].species}</span>
            </li>
            <li className="bird-details__list-item">
              <div className="audio-player">
                <AudioPlayer
                  src={birdsData[page][id].audio}
                  onPlay={(e) => console.log("onPlay")}
                  showSkipControls={false}
                  showJumpControls={false}
                  customAdditionalControls={[]}
                  customVolumeControls={[]}
                  autoPlayAfterSrcChange={false}
                  layout="horizontal-reverse"
                />
              </div>
            </li>
          </ul>
        </div>
        <span className="bird-overview">{birdsData[page][id].description}</span>
      </div>
    );
  }
}
