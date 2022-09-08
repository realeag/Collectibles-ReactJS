import React from 'react';

const Item = ({ figuritas }) => {
    return (
        < div className="card tarjeta" >
            <img src={figuritas.imagen} className="card-img-top" alt={figuritas.descripcion}/>
                <div className="card-body">
                    <h5 className="card-title">{figuritas.nombre}</h5>
                    <p className="card-text">$ {figuritas.precio}</p>
                    <a className="btn btn-primary">AÑADIR</a>
                </div>
            </div>
    );
}

export default Item;