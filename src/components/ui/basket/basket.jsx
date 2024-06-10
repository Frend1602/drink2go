import BasketCard from "../basket-card/BasketCard";
import "./style.css";

export default function Basket(props) {
  return (
    <div className="basket">
      {props.orders.length > 0 ? (
        props.orders.map((el) => <BasketCard key={el.id} item={el} />)
      ) : (
        <h3> Корзина пуста</h3>
      )}
    </div>
  );
}
