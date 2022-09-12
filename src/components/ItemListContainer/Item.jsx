import React from 'react';
import './Item.css';

const Item = ({ figuritas }) => {
    return (
        < div className="tarjeta" >
            <img src={figuritas.imagen} className="card-img-top imagen" alt={figuritas.descripcion} />
            <div >
                <h5>{figuritas.nombre}</h5>
                <p>$ {figuritas.precio} -</p>
                <a className="btn btn-primary">AÑADIR</a>
            </div>
        </div>
    );
};

export default Item;