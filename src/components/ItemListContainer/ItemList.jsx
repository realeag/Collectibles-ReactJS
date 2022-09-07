import React from 'react';
import Item from './Item';

const ItemList = ({ datos = [] }) => {
    return (
        datos.map(productos => <Item key={productos.id} figuritas={productos} />)
    );
}

export default ItemList;