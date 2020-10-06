import React from "react";
import CheckoutItem from "./CheckoutItem";
import { basketSomme } from "./reducer";
import { useStateValue } from "./StateProvider";

function Checkout(prop) {
  const [{ basket }] = useStateValue();
  return (
    <>
      <div className="checkout">
        {basket?.length === 0 ? (
          <div>
            <h2>Shopping cart empty</h2>
          </div>
        ) : (
          <div>
            <h2>Total {basketSomme(basket)}</h2>
            {basket?.map((item, key) => {
              return (
                <CheckoutItem
                  key={key}
                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
