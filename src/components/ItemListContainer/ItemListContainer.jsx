import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect } from 'react';
import { useState } from 'react';
import { productos } from '../productos/productos';

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const getData = () =>
            new Promise((res, rej) => {
                setTimeout(() => { res(productos); }, 1000);
            });

        getData()
            .then((datos) => {
                setDatos(datos);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

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


export default ItemListContainer;