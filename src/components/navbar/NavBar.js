import React from 'react';
import './Navbar.css'; 
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Matir</div>
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