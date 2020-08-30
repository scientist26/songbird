import React, { Component } from "react";

import "./header-navigation.css";

export default class Navigation extends Component {
  componentDidUpdate() {
    const li = document.querySelectorAll("li.page-item");
    li.forEach((el, index) => {
      el.classList.remove("active-nav");
      if (index === this.props.page) {
        el.classList.add("active-nav");
      }
    });
  }

  render() {
    return (
      <ul className="navigation">
        <li className="page-item active-nav">Разминка</li>
        <li className="page-item">Воробьиные</li>
        <li className="page-item">Лесные птицы</li>
        <li className="page-item">Певчие птицы</li>
        <li className="page-item">Хищные птицы</li>
        <li className="page-item">Морские птицы</li>
      </ul>
    );
  }
}
