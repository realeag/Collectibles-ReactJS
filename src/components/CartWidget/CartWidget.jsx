import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return(
        <div>
        <Link to='/cart' className="fa-solid fa-cart-shopping"></Link>
        <span> 0</span>
        </div>
    )
}

export default CartWidget;