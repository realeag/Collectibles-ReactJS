import React from 'react';
import Item from './Item';

const ItemList = ({ datos = [] }) => {
    return (
        <div className='tarjetaCard'>
        {datos.map(productos => <Item key={productos.id} figuritas={productos} />)}
        </div>
    );
}

export default ItemList;