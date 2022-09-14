import React from 'react';
import ItemCount from './ItemCount';
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

        getData()
            .then((informacion) => {
                setDatos(informacion);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoriaMundial]);

    return (
        <div className='text-center font-monospace m-3 itemlistcontainer'>
            <h2 className='text-decoration-underline'>{props.proyecto}</h2>
            <h3 className='text-decoration-underline'>{props.description}</h3>
            <div className='align-center m-5 '>
                <ItemCount stock={10} initial={1} onAdd={0} />
            </div>
            <ItemList datos={datos} />
        </div>
    )
}

