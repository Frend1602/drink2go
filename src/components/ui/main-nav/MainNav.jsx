import React from "react";
import "./style.css";

export default function MainNav() {
  return (
    <nav>
      <ul className="main-nav">
        <li className="main-nav__item main-nav__item--active">
          <a href="#">Главная</a>
        </li>
        <li className="main-nav__item">
          <a href="#">Каталог</a>
        </li>
        <li className="main-nav__item">
          <a href="#">Доставка</a>
        </li>
        <li className="main-nav__item">
          <a href="#">О нас</a>
        </li>
      </ul>
    </nav>
  );
}
