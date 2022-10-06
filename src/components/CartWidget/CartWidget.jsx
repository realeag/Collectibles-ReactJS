import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
    const totalUnits = totalItems();

    const renderCount = () => {
        return totalUnits ? <span>{totalUnits}</span> : false;
    }

    return (
        <div>
            <span className="fa-solid fa-cart-shopping text-decoration-none"></span>
            {''} { renderCount() }
        </div>
    )
};

export default CartWidget;