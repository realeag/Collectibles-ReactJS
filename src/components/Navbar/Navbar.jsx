import React from 'react';
import favicon from "../../assets/imgs/vector.png";
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navegador">
            <div className="navConteiner">
                <div className="navLinks" id="navbarNav">
                    <div className='navIndex'>
                        <NavLink className="logoFont text-decoration-none" to="/"><img className='logo' src={favicon} alt='logo' />Collectibles</NavLink>
                    </div>
                    <ul className="navListas">
                        <li className="navItem ">
                            <NavLink className="nav-link text-decoration-none" to="/categoria">Tienda</NavLink>
                        </li>
                        <div className='d-flex navCategorias'>
                            <li className="navItem">
                                <NavLink className="nav-link" to="/categoria/Mundial1986">Mundial 1986</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink className="nav-link" to="/categoria/Mundial1990">Mundial 1990</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink className="nav-link" to="/categoria/Mundial1998">Mundial 1998</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink className="nav-link" to="/categoria/Mundial2014">Mundial 2014</NavLink>
                            </li>
                        </div>
                        <li className="navItem">
                            <NavLink className="nav-link text-decoration-none" to="/">Productos</NavLink>
                        </li>
                        <li className="navItem text-decoration-none">
                            <NavLink className="nav-link" to="/cart"><CartWidget /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default Navbar;