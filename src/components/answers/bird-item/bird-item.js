import React, { useState, useEffect } from "react";

const BirdItem = ({
  random,
  id,
  name,
  isCorrectBird,
  onItemSelected,
  isNextPage,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    return setSelected(false);
  }, [isNextPage]);

  const className = !selected
    ? "li-btn"
    : random === id - 1
    ? "li-btn win"
    : "li-btn error";

  const onHandleClick = () => {
    if (!isCorrectBird) {
      setSelected(true);
      onItemSelected(id);
    }
  };

  return (
    <li className="bird-list-item" onClick={onHandleClick}>
      <span className={className}></span>
      <span className="bird-list-item-btn">{name}</span>
    </li>
  );
};

export default BirdItem;
