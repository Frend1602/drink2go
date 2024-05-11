import React, { Component } from "react";
import "./style.css";
import Card from "../../ui/card/Card";

export class Catalog extends Component {
  render() {
    return (
      <section className="catalog">
        {this.props.items.map((element) => (
          <Card key={element.id} item={element} />
        ))}
      </section>
    );
  }
}

export default Catalog;
