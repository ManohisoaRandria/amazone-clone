import React from "react";
import "./CheckoutItem.css";
import { useStateValue } from "./StateProvider";

function CheckoutItem({ item, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item,
    });
  };
  return (
    <div className="checkoutItem">
      <img src={image} alt="" />
      <div className="checkoutItem__info">
        <p className="checkoutItem__title">{title}</p>
        <p className="checkoutItem__price">
          <small>$</small>
          <span>{price}</span>
        </p>
        <div className="checkoutItem__rating">
          {Array(rating)
            .fill()
            .map((_, key) => {
              return <p key={key}>*</p>;
            })}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
