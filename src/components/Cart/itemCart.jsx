import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ cromo }) => {

    const { removeOne } = useContext(CartContext);
    return (
        <div className="cartCard m-2 text-center">
            <div>
                <img className="cardImg m-2" src={cromo.imagen} alt="compra carrito figurita" />
            </div>
            <div>
                <h4 className="cardTitle m-2">{cromo.nombre}</h4>
                <p>Cantidad: <strong>{cromo.cantidad}</strong></p>
                <p>Subtotal: <strong> $ {cromo.precio * cromo.cantidad} .-</strong></p>
                <button className="cartButton2 mb-3" onClick={() => removeOne(cromo.id)}>Borrar</button>
            </div>
            <hr></hr>
        </div>
    )
};

export default ItemCart;