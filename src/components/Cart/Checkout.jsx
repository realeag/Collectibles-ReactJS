import { React, useState } from "react";
import Form from "./Form";

const Checkout = () => {
    const [orden, setOrden] = useState('');

    const inId = (identificador) => {
        setOrden(identificador);
    }

    if (orden) {
        return (
            <div>
                <h2>Tu compra se completó con éxito. Tu número de orden es: {''} {orden}. </h2>
                <h3>Gracias por comprar con nosotros.</h3>
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