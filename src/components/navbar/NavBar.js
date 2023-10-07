import React from 'react';
import LogoMatir from '../../logo.svg';
import './Navbar.css'; 
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar">
                <Link to='/'>
                    <img src={LogoMatir} alt="Logo del restoran" className="logo" />
                </Link>
            <div className='Categories'>
                <NavLink to={`/category/minutas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Minutas</NavLink>
                <NavLink to={`/category/sanguches`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sanguches</NavLink>
                <NavLink to={`/category/olla`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Olla</NavLink>
                <NavLink to={`/category/bebida`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bebida</NavLink>
            </div>
            <CartWidget /> 
        </nav>
    );
}

export default NavBar;