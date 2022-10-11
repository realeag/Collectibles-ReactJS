import React from 'react';
import './styleItem.css';
import Item from './Item';

const ItemList = ({ datos }) => {
    return (
        <div className='tarjetaCard m-5'>
        {datos.map((figuritas) => {
        return <Item key={figuritas.id} figuritas={figuritas} />})}
        </div>
    );
};

export default ItemList;