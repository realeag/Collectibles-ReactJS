import React from 'react';

const Cuerpo = (props) => {
    return (
        <div className='cuerpo row justify-content-center text-center pb-4'>
            <h1 >{props.proyecto}</h1>
            <h2 >{props.description}</h2>
        </div>
    )
}


export default Cuerpo;