import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ cromo }) => {

    const { removeOne } =  useContext(CartContext);
    return (
        <div className="cartCard m-2">
            <h4 className="cardTitle m-2">{cromo.nombre}</h4>
            <img className="cardImg m-2" src={cromo.imagen} alt="compra carrito figurita" />
            <p>Cantidad: <strong>{cromo.cantidad}</strong></p>
            <p>Subtotal: <strong> $ {cromo.precio * cromo.cantidad} .-</strong></p>
            <button className="cartButton1 mb-3" onClick={() => removeOne(cromo.id)}>Borrar</button>
        </div>
    )
};

export default ItemCart;