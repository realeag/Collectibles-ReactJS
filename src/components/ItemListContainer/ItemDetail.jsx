import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ figuritas }) => {
    return (
        < div >
            <img src={figuritas.imagen} alt="cromos figuritas futbol" />
            <div >
                <h3>{figuritas.nombre}</h3>
                <p>{figuritas.descripcion}</p>
                <h4>$ {figuritas.precio} -</h4>
            </div>
            <ItemCount stock={figuritas.stock} initial={1} onAdd={0} />
        </div>
    )
}

export default ItemDetail;