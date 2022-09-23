import React from 'react';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const sumarQuant = () => {
        quantity < stock && setQuantity(quantity + 1);
    };

    const restarQuant = () => {
        quantity > initial && setQuantity(quantity - 1);
    };

    const masProductos = () => {
        onAdd(quantity);
        }
    

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="btn-group col-md-3 pb-2 h-100" role="group" aria-label="Basic outlined example">
                        <input type="button" className="btn btn-dark" value="-" onClick={restarQuant}/>
                        <input type="text" className="form-control text-center" value={quantity} aria-label="Input group example" aria-describedby="btnGroupAddon" readOnly />
                        <input type='button' className="btn btn-dark" value="+" onClick={sumarQuant}/>
                        <button type="button" className="btn btn-secondary m-1" onClick={masProductos}>AÑADIR</button>
                    </div>
                </div>
            </div>
        </div>
    );
    };

export default ItemCount;