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
                    <i className="fa-solid fa-trash-xmark" onClick={() => removeOne(cromo.id)}></i>
                </div>
            ))}
            <input type='button' value='Remove All' onClick={removeAll} />
        </div>
    );
};

export default Cart;