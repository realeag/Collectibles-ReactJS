import React from 'react';
import { useState } from 'react';

const ItemCount = ({ nombre, stock, initial, onAdd }) => {
    const [quant, setQuant] = useState(initial);
    const [agregar, setAgregar] = useState(onAdd);
    const [total, setTotal] = useState(stock);

    const sumarQuant = (valor) => {
        if (valor <= total) {
            setQuant(valor);
        }
    }
    
    const restarQuant = (valor) => {
        if (valor > 0) {
            setQuant(valor);
        }
    }

    const masProductos = () => {
        if (quant <= total) {
            setTotal(total - quant);
            setAgregar(agregar + quant);
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className='pb-2 text center'>{nombre}</h3>
                    <div className="btn-group col-md-4 pb-2" role="group" aria-label="Basic outlined example">
                        <input type="button" className="btn btn-dark" value="-" onClick={() => { restarQuant(quant - 1) }}/>
                        <input type="text" className="form-control" value={quant} aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
                        <input type='button' className="btn btn-dark" value="+" onClick={() => { sumarQuant(quant + 1) }}/>
                    </div>
                    <button type="button" className="btn btn-secondary d-grid col-md-4" onClick={() => { masProductos() }}>AÑADIR AL CARRITO</button>
                </div>
                <p>Seleccionaste: {agregar}</p>
            </div>
        </div>
    );
}

export default ItemCount