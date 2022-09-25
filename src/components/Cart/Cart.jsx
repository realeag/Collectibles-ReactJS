import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const Cart = () => {

    const { carrito, removeOne, removeAll, precioFinal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div>
                <h3>Tu carrito se encuentra vacío.</h3>
                <Link to='/'>Hace click aquí para agregar productos.</Link>
            </div>
        )
    } else {
        return (

            <div className="cart">
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
                <h5>Precio final: $ { precioFinal() } *</h5>
                <p>*Incluye impuestos</p>
                <button className="cartButton2 mb-3" onClick={removeAll}>Vaciar Carrito</button>
                <h4>PAGAR</h4>
            </div>
        );
    }
};

export default Cart;