import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToCart = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        //raha mtovy ny key sy ny value am es6
        //de afaka tode ray ihany no soratana eo
        //ohatra hoe id ftsn fa tsy hatao id:id
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <span>{price}</span>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, key) => {
              return <p key={key}>*</p>;
            })}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
