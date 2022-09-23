import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { units } = useContext(CartContext);
    const totalUnits = units();
    return(
        <div>
        <Link to='/cart' className="fa-solid fa-cart-shopping"></Link>
        <span> {totalUnits}</span>
        </div>
    )
}

export default CartWidget;