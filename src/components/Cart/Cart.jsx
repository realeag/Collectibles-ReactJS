import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const Cart = () => {

    const { carrito, removeOne, removeAll, precioFinal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="cartItem text-center m-5">
                <h3>Tu carrito se encuentra vacío.</h3>
                <Link to='/'>Hace click aquí para agregar productos.</Link>
            </div>
        )
    } else {
        return (

            <div className="cartItem m-5 ">
                <h3>Tu Carrito</h3>
                {carrito.map((cromo) => (
                    <div className="cartCard" key={cromo.id}>
                        <h4 className="cartTitle">{cromo.nombre}</h4>
                        <img className="cartImg" src={cromo.imagen} alt="compra carrito figurita" />
                        <p>Cantidad: {cromo.cantidad}</p>
                        <p>Subtotal: $ {cromo.precio * cromo.cantidad}</p>
                        <button className="cartButton1 mb-3" onClick={() => removeOne(cromo.id)}>Borrar</button>
                    </div>
                ))}
                <h5 className="text-center">Precio final: $ { Math.round (precioFinal() * (1.21))}</h5>
                <p className="text-center">*Incluye 21% de IVA</p>
                <button className="text-center cartButton2 mb-2" onClick={removeAll}>Vaciar Carrito</button>
                <h4 className="text-center">PAGAR</h4>
            </div>
        );
    }
};

export default Cart;