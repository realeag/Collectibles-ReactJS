import React, { useEffect, useState } from 'react';
import { productos } from '../productos/productos';
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getProducto = () =>
            new Promise((res, rej) => {
                setTimeout(() => {
                    res(productos);
                }, 1000);
            });

        if (id) {
            getProducto().then(res => setDatos(res.find(productos => productos.id === Number(id))));
        } else {
            getProducto().then(res => setDatos(res));
        }

    }, [id]);

    return (
        <div>
            <ItemDetail datos={datos} />
        </div>
    )
}

export default ItemDetailContainer;