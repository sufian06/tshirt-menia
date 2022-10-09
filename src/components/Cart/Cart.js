import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Buy at least one item!!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Amar jonno ekata nao</h3>
        <p>Tomar nijer jonne ekta</p>
        <p>
          <small>Amar jonno arekta</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thanks for buying.</p>;
  }

  return (
    <div>
      <h2 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h2>
      <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Orders Quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button
            onClick={() => handleRemoveItem(tshirt)}
            className="remove-btn"
          >
            X
          </button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino kino</p>}
      <p>and operator</p>
      {cart.length === 2 && <h2>Double Items</h2>}
      <p>OR Operator</p>
      {cart.length === 4 || <h4>Charta Item na</h4>}
    </div>
  );
};

export default Cart;

/* 
    Conditional Rendering
    1. use element in a  variable and then use if-else to set value.
    2. ternary operator - condition ? true : false
    3. && operator (if condition is true, I want to display something)
    4. || operator (if condition is false, I want to display something)
*/
