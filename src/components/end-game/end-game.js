import React from "react";

import "./end-game.css";

const EndGame = ({ isEndGame, restartGame }) => {
  const hiddenBlock = isEndGame ? "end-game" : "end-game hidden";

  return (
    <div className={hiddenBlock}>
      <h1>Поздравляем!!</h1>
      <p>
        Вы победили, но сколько баллов набрали я Вам не скажу
        <span role="img" aria-label="smile">
          &#128516;
        </span>
      </p>
      <button className="btn-end-game" onClick={restartGame}>
        Попробовать еще раз?
      </button>
    </div>
  );
};

export default EndGame;
