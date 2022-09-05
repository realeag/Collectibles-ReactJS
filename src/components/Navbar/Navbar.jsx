import React from 'react';
import favicon from "../imgs/vector.png";
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid d-flex justify-content-center">
                <div class="navbar-bar" id="navbarNav">
                    <ul class="navbar-nav mt-2 mb-2">
                        <li class="nav-item">
                            <a class="nav-link navbar-brand" href="index.html"><img className='logo' src={favicon} alt='logo'></img></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Tienda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html"><CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}


export default Navbar;