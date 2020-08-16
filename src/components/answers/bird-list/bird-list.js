import React, { Component } from "react";

import "./bird-list.css";

import BirdListItem from "../bird-list-item";

export default class BirdList extends Component {
  render() {
    return (
      <ul className="bird-list">
        <BirdListItem />
      </ul>
    );
  }
}

// const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
//   const elements = todos.map((item) => {
//     const { id, ...itemProps } = item;
//     return (
//       <li key={id} className="list-group-item">
//         <TodoListItem
//           {...itemProps}
//           onDeleted={() => onDeleted(id)}
//           onToggleImportant={() => onToggleImportant(id)}
//           onToggleDone={() => onToggleDone(id)}
//         />
//       </li>
//     );
//   });

//   return <ul className="list-group todo-list">{elements}</ul>;
// };
