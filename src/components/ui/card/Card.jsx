import React, { Component } from "react";
import "./style.css";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card__img"
          src={"./img/catalog/" + this.props.item.img}
          alt="банка кофе"
        />
        <h3 className="card__title">{this.props.item.title}</h3>
        <p className="card__desc">{this.props.item.description}</p>
        <b className="card__price">{this.props.item.price}₽</b>
        <button className="card__btn">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6738 13.5219L13.6769 13.5H15.0238L14.9937 13.7105C14.8061 15.0242 13.6809 16 12.3539 16H3.64612C2.31905 16 1.19393 15.0242 1.00626 13.7105L0.190476 8L0 6.66667H1.34687H4.55556L4.33218 3.98618C4.15336 1.84036 5.84674 0 8 0C9.81376 0 11.3012 1.30578 11.6183 3H10.2473C9.95698 2.04197 9.06703 1.33333 8 1.33333C6.62679 1.33333 5.54687 2.50699 5.66091 3.87546L5.89351 6.66667H9.5V8H6.05787L6.28009 10.6667H9.71991L9.7338 10.5H11.0718L11.0579 10.6667H12.5V12H10.9468L10.7245 14.6667H12.3539C13.0174 14.6667 13.58 14.1788 13.6738 13.5219ZM4.71991 8H4.66667H1.53735L1.9183 10.6667H4.94213L4.71991 8ZM6.61342 14.6667L6.3912 12H9.6088L9.38658 14.6667H6.61342ZM5.05324 12L5.27547 14.6667H3.64612C2.98259 14.6667 2.42003 14.1788 2.32619 13.5219L2.10877 12H5.05324ZM15.8 10V7.2H13V5.8H15.8V3H17.2V5.8H20V7.2H17.2V10H15.8Z"
              fill="white"
            />
          </svg>
          В корзину
        </button>
      </div>
    );
  }
}

export default Card;
