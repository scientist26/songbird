import React, { Component } from "react";

import "./header-navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <ul className="navigation">
        <li className="page-item">Разминка</li>
        <li className="page-item">Воробьиные</li>
        <li className="page-item">Лесные птицы</li>
        <li className="page-item">Певчие птицы</li>
        <li className="page-item">Хищные птицы</li>
        <li className="page-item">Морские птицы</li>
      </ul>
    );
  }
}
