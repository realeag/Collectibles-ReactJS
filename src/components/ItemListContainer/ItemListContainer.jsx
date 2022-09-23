import React from 'react';
import ItemList from './ItemList';
import { useEffect } from 'react';
import { useState } from 'react';
import { productos } from '../productos/productos';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);

    const { categoriaMundial } = useParams();

    useEffect(() => {
        const getData = () =>
        new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 1000);
        });
        if (categoriaMundial) {
            getData().then(res => setDatos(res.filter(productos => productos.categoria === categoriaMundial)));
        } else {
            getData().then(res => setDatos(res));
        }

       
    }, [categoriaMundial]);

    return (
        <div className='font-monospace m-3 itemListCont row'>
            <h2 className='text-decoration-underline'>{props.proyecto}</h2>
            <h3 className='text-decoration-underline'>{props.description}</h3>
            <ItemList datos={datos} />
        </div>
    )
}


export default ItemListContainer;