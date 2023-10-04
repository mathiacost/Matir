import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart-count">0</span>
        </div>
    );
}

export default CartWidget;
