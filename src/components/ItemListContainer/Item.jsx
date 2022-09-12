import React from 'react';
import './styleItem.css';

const Item = ({ figuritas }) => {
    return (
        < div className="tarjeta mb-2" >
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