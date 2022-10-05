import React from 'react';
import favicon from "../../assets/imgs/vector.png";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                <div className="navbar-bar" id="navbarNav">
                <NavLink className="navbar-brand logoFont" to="/"><img className='logo' src={favicon} alt='logo'/>Collectibles</NavLink>
                    <ul className="navbar-nav mt-2 mb-2">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categoria">Tienda</NavLink>
                        </li>
                        <div className='d-flex'>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/Mundial1986">Mundial 1986</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/Mundial1990">Mundial 1990</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/Mundial1998">Mundial 1998</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categoria/Mundial2014">Mundial 2014</NavLink>
                            </li>
                        </div>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default Navbar;