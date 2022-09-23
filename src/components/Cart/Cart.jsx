import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Cart = () => {

    const { carrito, removeOne, removeAll } = useContext(CartContext);
    return (
        
        <div>
            <h3>Tu Carrito</h3>
            {carrito.map((cromo) => (
                <div key={cromo.id}>
                    <h4>{cromo.nombre}</h4>
                    <h4>{cromo.imagen}</h4>
                    <button onClick={() => removeOne(cromo.id)}>Borrar</button>
                </div>
            ))}
            <button onClick={removeAll}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;