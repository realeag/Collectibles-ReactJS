import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemListContainer/ItemCount";

const ItemDetail = ({ figuritas }) => {

    const [addToCart, setAddToCart] = useState(false);

    const onAdd = (quantityToAdd) => {
        setAddToCart(true);
    }

    return (
        < div className="detalle" >
            <img src={figuritas.imagen} alt="cromos figuritas futbol" />
            <div >
                <h3>{figuritas.nombre}</h3>
                <p>{figuritas.descripcion}</p>
                <h4>$ {figuritas.precio} -</h4>
                { addToCart
                    ? <Link to='/cart'>Ir a Pagar</Link>
                    : <ItemCount stock={figuritas.stock} initial={1} onAdd={onAdd} />
                    }
            </div>
        </div>
    )
}

export default ItemDetail;