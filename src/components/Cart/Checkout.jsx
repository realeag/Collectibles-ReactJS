import { React, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Form from "./Form";

const Checkout = () => {
    const [orden, setOrden] = useState('');

    const inId = (identificador) => {
        setOrden(identificador);
    }

    const MySwal = withReactContent(Swal)

    
    if (orden) {
        return (
            MySwal.fire({
                icon: 'success',
                title: 'Tu compra fue completada.',
                text: `Tu número de orden es: ${ orden }`,
                footer: '<a href="index.html">Continuar comprando.</a>'
            })
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