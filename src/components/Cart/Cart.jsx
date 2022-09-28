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

            <div className="cartItem m-3">
                <h3 className="cartTitle">Tu Carrito</h3>
                {carrito.map((cromo) => (
                    <div className="cartCard m-2" key={cromo.id}>
                        <h4 className="cardTitle m-2">{cromo.nombre}</h4>
                        <img className="cardImg m-2" src={cromo.imagen} alt="compra carrito figurita" />
                        <p>Cantidad: <strong>{cromo.cantidad}</strong></p>
                        <p>Subtotal: <strong> $ {cromo.precio * cromo.cantidad} .-</strong></p>
                        <button className="cartButton1 mb-3" onClick={() => removeOne(cromo.id)}>Borrar</button>
                    </div>
                ))}
                <div className="cartView">
                    <h5 className="">Precio final: $ {Math.round(precioFinal() * (1.21))} .- *</h5>
                    <p className="">*Incluye 21% de IVA.</p>
                    <button className="cartButton2 m-2" onClick={removeAll}>Vaciar Carrito</button>
                    <Link to='/checkout' className="cartButton3">Pagar</Link>
                </div>
            </div>
        );
    }
};

export default Cart;