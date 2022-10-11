import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetailContainer/styleDetail.css';

const ItemDetail = ({ datos }) => {

    const [agregado, setAgregado] = useState(0);
    const { sumarCarrito } = useContext(CartContext);

    const onAdd = (agregado) => {
        setAgregado(agregado);
        sumarCarrito(datos, agregado);
    };

    return (
        < div className="detalle" >
            <img className='imgDetail' src={datos.imagen} alt="cromos datos futbol" />
            <div >
                <h3 className='m-2'>{datos.nombre}</h3>
                <p className='m-2'>{datos.descripcion}</p>
                <h4 className='m-3'>$ {datos.precio} -</h4>
                {agregado === 0
                    ?
                    (<ItemCount stock={datos.stock} initial={1} onAdd={onAdd} />)
                    :
                    (<Link to='/cart' className='goPayment'>Ir a Pagar</Link>)
                }
            </div>
        </div>
    );
}

export default ItemDetail;