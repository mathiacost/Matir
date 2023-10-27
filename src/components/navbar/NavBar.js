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
                <NavLink to={`/category/Minutas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Minutas</NavLink>
                <NavLink to={`/category/Sanguches`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Sanguches</NavLink>
                <NavLink to={`/category/Olla`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Olla</NavLink>
                <NavLink to={`/category/Bebida`} className={({ isActive}) => isActive ? 'ActiveOption' : 'option'}>Bebida</NavLink>
            </div>
            <NavLink style = {{textDecoration:'none'}} to='/cart'><CartWidget/> </NavLink>
            
        </nav>
    );
}

export default NavBar;