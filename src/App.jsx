import React from "react";
import Header from "./components/blocks/header/Header";
import Footer from "./components/blocks/footer/Footer";
import Catalog from "./components/blocks/catalog/Catalog";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Декаф Флэт Уайт",
          description:
            "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
          country: "Бразилия",
          price: "225",
          img: "coffee-can-1.png",
        },
        {
          id: 2,
          title: "Декаф Флэт Уайт",
          description:
            "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
          country: "Бразилия",
          price: "225",
          img: "coffee-can-2.png",
        },
        {
          id: 3,
          title: "Декаф Флэт Уайт",
          description:
            "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
          country: "Бразилия",
          price: "225",
          img: "coffee-can-3.png",
        },
        {
          id: 4,
          title: "Декаф Флэт Уайт",
          description:
            "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
          country: "Бразилия",
          price: "225",
          img: "coffee-can-4.png",
        },
        {
          id: 5,
          title: "Декаф Флэт Уайт",
          description:
            "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
          country: "Бразилия",
          price: "225",
          img: "coffee-can-5.png",
        },
        {
          id: 6,
          title: "Декаф Флэт Уайт",
          description:
            "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
          country: "Бразилия",
          price: "225",
          img: "coffee-can-6.png",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Catalog items={this.state.items} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
