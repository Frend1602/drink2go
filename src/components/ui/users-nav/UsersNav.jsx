import React from "react";
import "./style.css";

export default function UsersNav() {
  return (
    <nav>
      <ul className="user-nav">
        <li className="user-nav__item">
          <a href="#">
            <svg
              width="16.000000"
              height="16.000000"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="user"
                d="M10.66 4C10.66 5.47 9.47 6.66 8 6.66C6.52 6.66 5.33 5.47 5.33 4C5.33 2.52 6.52 1.33 8 1.33C9.47 1.33 10.66 2.52 10.66 4ZM12 4C12 6.2 10.2 8 8 8C5.79 8 4 6.2 4 4C4 1.79 5.79 0 8 0C10.2 0 12 1.79 12 4ZM3.19 12.31C4.43 11.27 6.16 10.66 8 10.66C9.83 10.66 11.56 11.27 12.8 12.31C14.03 13.33 14.66 14.67 14.66 16L16 16C16 14.23 15.15 12.53 13.65 11.28C12.15 10.03 10.12 9.33 8 9.33C5.87 9.33 3.84 10.03 2.34 11.28C0.84 12.53 0 14.23 0 16L1.33 16C1.33 14.67 1.96 13.33 3.19 12.31Z"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
            <span>Войти</span>
          </a>
        </li>
        <li className="user-nav__item">
          <a href="#">
            <svg
              width="16.000000"
              height="16.000000"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Union"
                d="M5.66 3.87L5.89 6.66L10.1 6.66L10.33 3.87C10.45 2.5 9.37 1.33 8 1.33C6.62 1.33 5.54 2.5 5.66 3.87ZM11.44 6.66L11.66 3.98C11.84 1.84 10.15 0 8 0C5.84 0 4.15 1.84 4.33 3.98L4.55 6.66L1.34 6.66L0 6.66L0.19 8L1 13.71C1.19 15.02 2.31 16 3.64 16L12.35 16C13.68 16 14.8 15.02 14.99 13.71L15.8 8L16 6.66L14.65 6.66L11.44 6.66ZM11.33 8L11.28 8L11.05 10.66L14.08 10.66L14.46 8L11.33 8ZM9.94 8L6.05 8L6.28 10.66L9.71 10.66L9.94 8ZM4.71 8L4.66 8L1.53 8L1.91 10.66L4.94 10.66L4.71 8ZM6.61 14.66L6.39 12L9.6 12L9.38 14.66L6.61 14.66ZM10.94 12L10.72 14.66L12.35 14.66C13.01 14.66 13.58 14.17 13.67 13.52L13.89 12L10.94 12ZM5.05 12L5.27 14.66L3.64 14.66C2.98 14.66 2.41 14.17 2.32 13.52L2.1 12L5.05 12Z"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
            <span>Корзина</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
