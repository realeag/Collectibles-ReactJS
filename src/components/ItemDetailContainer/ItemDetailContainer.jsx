import React, { useEffect, useState } from 'react';
import { productos } from '../productos/productos';
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({});

    const {detalleID}= useParams();

    useEffect(() => {
        const getProducto = () =>
            new Promise((res, rej) => {
                const unidad = productos.find((figuritas) =>
                    figuritas.id === 2);
                setTimeout(() => {
                    res(unidad);
                }, 2000);
            });
        
            getProducto().then(res => setDatos(res.find(productos => productos.id === parseInt(detalleID))));

        getProducto()
            .then((informacion) => {
                setDatos(informacion);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [detalleID]);

    return (
        <div>
            <ItemDetail figuritas={datos} />
        </div>
    )
}

export default ItemDetailContainer;