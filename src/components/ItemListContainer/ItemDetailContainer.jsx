import React, { useEffect, useState} from 'react';
import { productos } from '../productos/productos';
import ItemDetail from "../ItemListContainer/ItemDetail";

const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({});

    useEffect(() => {
        const getProducto = () =>
            new Promise((res, rej) => {
                const unidad = productos.find((figuritas) => 
                figuritas.id === 2 );
                setTimeout(() => {
                    res(unidad);
                }, 2000);
            });

        getProducto()
            .then((informacion) => {
                setDatos(informacion);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <div>
            <ItemDetail figuritas={datos} />
        </div>
    )
}

export default ItemDetailContainer;