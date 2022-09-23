import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const sumarCarrito = (cromo, cantidad) => {

        const figuritas = { ...cromo, cantidad };

        if (InCart(figuritas.id)) {
            plusQuantity(figuritas);
        } else {
            setCarrito([...carrito, figuritas]);
        }

    };

    const InCart = (id) => {
        return carrito.some((producto) => producto.id === id);
    };

    const plusQuantity = (figuritas) => {
        const actualizaCarrito = carrito.map((figuritasCarrito) => {
            if (figuritas.id === figuritasCarrito.id) {
                const actualizaFiguritas = { ...figuritasCarrito, cantidad: figuritas.cantidad };
                return actualizaFiguritas;
            } else {
                return figuritasCarrito;
            }
         });
            setCarrito(actualizaCarrito);
        };

    const units = () => {
        const traerCarrito = [...carrito];
        let contador = 0;
        traerCarrito.forEach((figuritas) => {
            contador += figuritas.cantidad;
        });
        return contador;
    }

    const removeAll = () => {
        setCarrito([]);
    };

    const removeOne = (id) => {
        const filterFiguritas = carrito.filter((producto) => producto.id !== id);
        setCarrito(filterFiguritas);
    };

    

    return (
        <CartContext.Provider value={{carrito, sumarCarrito, removeAll, removeOne, units}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;