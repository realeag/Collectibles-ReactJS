import { React, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const Checkout = () => {
    const [orden, setOrden] = useState('');

    const inId = (identificador) => {
        setOrden(identificador);
    }

    if (orden) {
        return (
            <div className="checkout">
                <h2 className="check1">Tu compra fue confirmada. Gracias por elegir Collectibles!</h2>
                <h3 className="check2" >Tu número de orden es:</h3><h2 className="check4">{orden}</h2>
                <Link to="/index.html" className="check3">Continuar comprando.</Link>
            </div>
        );
    } else {
        <h2>Revisá los datos ingresados nuevamente.</h2>
    };

    return (
        <div>
            <Form inId={inId} />
        </div>
    );
};

export default Checkout;