import React from 'react';
import ItemList from './ItemList';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);

    const { categoriaMundial } = useParams();

    useEffect(() => {
        const productosFB = collection(db, 'productos')
        const filtrado = categoriaMundial ? query(productosFB, where('categoria', '==', categoriaMundial)) : productosFB ;

        getDocs(filtrado)
        .then((res) => {
            const productos = res.docs.map((figus) => {
                return {
                    id: figus.id,
                    nombre: figus.data().nombre,
                    descripcion: figus.data().descripcion,
                    precio: figus.data().precio,
                    categoria: figus.data().categoria,
                    imagen: figus.data().imagen,
                    stock: figus.data().stock,
                }
            });
            setDatos(productos);
        });       
    }, [categoriaMundial]);

    return (
        <div className='font-monospace m-3 itemListCont row'>
            <h2 className='text-decoration-underline'>{props.proyecto}</h2>
            <h3 className='text-decoration-underline'>{props.description}</h3>
            <ItemList datos={datos} />
        </div>
    );
};

export default ItemListContainer;
