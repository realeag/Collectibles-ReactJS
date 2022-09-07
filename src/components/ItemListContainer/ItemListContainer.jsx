import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const productos = [
        {id: 1, nombre: "Figurita Diego Armando Maradona 86", descripcion: "Cromo de Diego Armando Maradona Mundial México '86",
            precio: 17999.99, stock: 10, imagen: "../imgs/diego86.jpg"},
        {id: 2, nombre: "Figurita Ronaldo 98", descripcion: "Cromo de Ronaldo Mundial Francia '98",
            precio: 12499.99, stock: 10, imagen: "../imgs/gornaldo98.jpg"},
        {id: 3, nombre: "Figurita Ruud Gullit 90", descripcion: "Cromo de Gullit Mundial Italia '90",
            precio: 5299.99, stock: 10, imagen:"../imgs/gullit90.jpg"},
        {id: 4, nombre: "Figurita Lionel Messi 14", descripcion: "Cromo de Messi Mundial Brasil '14",
            precio: 14899.99, stock: 10, imagen:"../imgs/messi14.jpg"},
        {id: 5, nombre: "Figurita Zinedine Zidane 98", descripcion: "Cromo de Zidane Mundial Francia '98",
            precio: 7199.99, stock: 10, imagen:"../imgs/zidane98.jpg"},
        {id: 6, nombre: "Figurita Roberto Carlos 98", descripcion: "Cromo de Roberto Carlos Mundial Francia '98",
            precio: 6499.99, stock: 10, imagen:"../imgs/robertocarlos98.jpg"}
    ]


    
        return (
            <div className='d-flex justify-content-center text-decoration-underline font-monospace m-3'>
            <h1>{this.props.proyecto}</h1> 
            <ItemCount nombre="Intel Celeron" stock={10} initial={1} onAdd={0} />
            <ItemList />
            </div>
        )
}


export default ItemListContainer;