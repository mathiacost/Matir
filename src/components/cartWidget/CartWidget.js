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
            <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
                <FontAwesomeIcon icon={faCartShopping} />
                { totalQuantity }
            </Link>
        </div>
    );
}

export default CartWidget;