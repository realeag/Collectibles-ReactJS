import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { getDoc, collection, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({});

    const { id } = useParams();

    useEffect(() => {
      
        const productosFB = collection(db, 'productos');
        const filtrado = doc(productosFB, id);

        getDoc(filtrado)
        .then((res) => {
            setDatos({
                id: res.id,
                ...res.data()
            });
        });

    }, [id]);

    return (
        <div>
            <ItemDetail datos={datos} />
        </div>
    )
}

export default ItemDetailContainer;