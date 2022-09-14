import React from 'react';
import './styleItem.css';
import { Link } from 'react-router-dom';

const Item = ({ figuritas }) => {
    return (
        <Link to={`/detalle/${figuritas.id}`}>
        < div className="tarjeta mb-2" >
            <img src={figuritas.imagen} className="card-img-top imagen" alt={figuritas.descripcion} />
            <div >
                <h5>{figuritas.nombre}</h5>
                <p>$ {figuritas.precio} -</p>
                <a className="btn btn-primary" href='/'>AÑADIR</a>
            </div>
        </div>
        </Link>
    );
};

export default Item;