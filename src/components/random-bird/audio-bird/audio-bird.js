import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import birdsData from "../../../data/birdsdata";

import "./audio-bird.css";

export default class PlayerBirds extends Component {
  render() {
    return (
      <div className="audio-container">
        <div className="bird-name">
          <h3>Какая-то птица</h3>
        </div>
        <div>
          <div className="audio-player">
            <AudioPlayer
              src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
              onPlay={(e) => console.log("onPlay")}
              showSkipControls={false}
              showJumpControls={false}
              customAdditionalControls={[]}
              customVolumeControls={[]}
              layout="horizontal-reverse"
            />
          </div>
        </div>
      </div>
    );
  }
}
