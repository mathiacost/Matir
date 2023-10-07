import React from 'react';
import LogoMatir from '../../logo.svg';
import './Navbar.css'; 
import CartWidget from '../cartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
            <img src={LogoMatir} alt="Logo del restoran" className="logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Minutas</a></li>
                <li><a href="#">Sanguches</a></li>
                <li><a href="#">Olla</a></li>
                <li><a href="#">Bebida</a></li>
                <li><a href="#">Postre</a></li>
            </ul>
            <CartWidget /> {/* Agrega el componente CartWidget aquí */}
        </nav>
    );
}

export default NavBar;