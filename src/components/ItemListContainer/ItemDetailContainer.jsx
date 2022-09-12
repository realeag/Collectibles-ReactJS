import React, { useEffect, useState} from 'react';
import { productos } from '../productos/productos';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({});

    useEffect(() => {
        const getProducto = () =>
            new Promise((res, rej) => {
                const unidad = productos.find((figuritas) => figuritas.id === 2 );
                setTimeout(() => {
                    res(unidad);
                }, 2000);
            });

        getProducto()
            .then((datos) => {
                setDatos(datos);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return(
        <div>
            <ItemDetail datos={datos} />
        </div>
    )
}

export default ItemDetailContainer;