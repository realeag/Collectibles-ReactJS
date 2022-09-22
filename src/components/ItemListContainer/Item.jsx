import React from 'react';
import './styleItem.css';
import { Link } from 'react-router-dom';

const Item = ({ figuritas }) => {
    return (

        < div className="tarjeta mb-2" >
            <img src={figuritas.imagen} className="card-img-top imagen" alt={figuritas.descripcion} />
            <div >
                <h5>{figuritas.nombre}</h5>
                <p>$ {figuritas.precio} -</p>
                <button className="itemButton">
                    <Link to={`/detalle/${figuritas.id}`}>VER</Link>
                </button>
            </div>
        </div>
    );
};

export default Item;