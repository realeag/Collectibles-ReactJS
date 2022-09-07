import React from 'react';
import favicon from "../../assets/imgs/vector.png";
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <div className="navbar-bar" id="navbarNav">
                    <ul className="navbar-nav mt-2 mb-2">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand" href="index.html"><img className='logo' src={favicon} alt='logo'></img></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="index.html"><CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}


export default Navbar;