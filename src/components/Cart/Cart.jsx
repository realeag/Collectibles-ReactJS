import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Cart = () => {

    const { carrito, removeOne, removeAll} = useContext(CartContext);

    return(
        <div>
            <h2>Tu Carrito</h2>
            {carrito.map((producto) => (
            <div key={producto.id}>
                <h3>{producto.nombre}</h3>
                <i class="fa-solid fa-trash-xmark" onClick={()=> removeOne(producto.id)}></i>
            </div>
            ))};
            <input type='button' value='Remove All' onClick={removeAll} />
        </div>
    );    
};

export default Cart;