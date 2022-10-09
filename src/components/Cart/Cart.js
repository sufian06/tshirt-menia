import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Orders Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)} className='remove-btn'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;