import React from 'react';




const Cuerpo = (props) => {
    return (
    <div className='cuerpo row justify-content-center'>
        <h1 className='text-center pb-3'>{props.proyecto}</h1>
        <h2>{props.descripcion}</h2>
    </div>
    )
}

                
export default Cuerpo;