import React from 'react';
import Item from './Item';

const ItemList = ({ datos }) => {
    return (
        <div className='tarjetaCard'>
        {datos.map((figuritas) => {
        return <Item key={figuritas.id} figuritas={figuritas} />})}
        </div>
    );
};

export default ItemList;