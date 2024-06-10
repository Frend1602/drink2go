import React, { Component } from "react";
import "./style.css";

export class BasketCard extends Component {
  render() {
    return (
      <div className="basket-card">
        <img src={"./img/catalog/" + this.props.item.img} alt="банка кофе" />
        <h3>{this.props.item.title}</h3>
        <b>{this.props.item.price}₽</b>
      </div>
    );
  }
}

export default BasketCard;
