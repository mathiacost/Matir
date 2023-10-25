import './Cart.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
        {cart.length
        ?<div>
        {cart.map((p) => <CartItem key={p.id}{...p}/>)}
        <h3>Total: ${total}</h3>
        <div>
            <button onClick={() => clearCart} className='option'>Limpiar carrito</button>
            <Link to= '/checkout' className='option'>Checkout</Link>
        </div>
    </div>
        : <div>
            <h3>No hay items en el carrito</h3>
            <Link to='/' className='option'>Ir a comprar</Link>
        </div>
        }
    </div>
    )
}



export default Cart;