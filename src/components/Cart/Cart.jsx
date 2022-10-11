import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "./itemCart";

const Cart = () => {

    const { carrito, removeAll, precioFinal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="cartItem text-center m-5">
                <h2 className="m-2">Tu carrito se encuentra vacío.</h2>
                <Link className="addCart m-2" to='/'>Hace click aquí para agregar productos.</Link>
            </div>
        )
    } else {
        return (

            <div className="cartItem m-3">
                <h2 className="cartTitle text-center">Tu Carrito</h2>
                <div className="imgMapping text-center">
                    {carrito.map(cromo => <ItemCart key={cromo.id} cromo={cromo} />)};
                </div>
                <div className="cartView mt-5">
                    <h3 className="">Precio final: $ {Math.round(precioFinal() * (1.21))} .- *</h3>
                    <p className="">*Incluye 21% de IVA.</p>
                    <button className="cartButton2 m-2" onClick={removeAll}>Vaciar Carrito</button>
                    <Link to="/checkout" className="cartButton2 text-decoration-none">Continuar</Link>
                </div>
            </div>
        );
    }
};

export default Cart;