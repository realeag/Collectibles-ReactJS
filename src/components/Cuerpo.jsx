import React from 'react';
import camiseta from './imgs/argentina86.jpg';
import camiseta2 from './imgs/argentinaSup86.jpg';

const Newsletter = () => <p>Suscribite a nuestro Newsletter</p>


const Cuerpo = () => {
    return (
    <div className='cuerpo row justify-content-center'>
        <h1 className='text-center pb-3'>SARASA</h1>
        <img className='camiseta' src={camiseta} alt='camiseta argentina'></img>
        <img className='camiseta' src={camiseta2} alt='camiseta argentina'></img>
        <Newsletter />
    </div>
    )
}

                
export default Cuerpo;