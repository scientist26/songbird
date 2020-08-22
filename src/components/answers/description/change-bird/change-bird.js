import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./change-bird.css";
import "../../../random-bird/audio-bird/audio-bird.css";

const ChangeBird = () => {
  return (
    <div className="bird-details-wrapper">
      <div className="bird-details">
        <img
          className="bird-img"
          src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
        ></img>
        <ul className="bird-details__list">
          <li className="bird-details__list-item">
            <h4>Какая-то птица</h4>
          </li>
          <li className="bird-details__list-item">
            <span>Латиница</span>
          </li>
          <li className="bird-details__list-item">
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
          </li>
        </ul>
      </div>
      <span className="bird-overview">
        Козодой – неприметная птица, известная благодаря своему голосу. Песня
        козодоя звучит как монотонная трель похожая на тарахтение мотоцикла.
        Такое дребезжание слышно от заката до рассвета, его тональность, частота
        и громкость изменяются.
      </span>
    </div>
  );
};

export default ChangeBird;
