import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


function CartWidget() {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div className="cart-widget">
            <Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} /></Link>
            {totalQuantity > 0 && <a className="cart-count">{totalQuantity}</a>}
        </div>
    );
}

export default CartWidget;