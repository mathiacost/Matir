import React, { useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    const [quantityAdded, serQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        serQuantityAdded(quantity)

        const item = {
            id,name,price,img
        }

        addItem(item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img scr={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    {description}
                </p>
                <p className='Info'>
                    precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='option'>Terminar compra</Link>
                    ):(
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/> 
                    )
                }
                
                {/* <button className='Option'>Ver detalle</button> */}
            </footer>
        </article>

//       
    )
}

export default ItemDetail