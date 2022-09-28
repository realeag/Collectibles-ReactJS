import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
    const totalUnits = totalItems();

    return (
        (totalUnits === 0)
            ?
            <Link to='/cart' className="fa-solid fa-cart-shopping"></Link>
            :
            <div>
                <Link to='/cart' className="fa-solid fa-cart-shopping"></Link>
                <span> {totalUnits}</span>
            </div>
    )
};

export default CartWidget;