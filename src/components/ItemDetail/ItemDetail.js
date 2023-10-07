import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
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
                    Categoria: ${category}
                </p>
                <p className='Info'>
                    ${description}
                </p>
                <p className='Info'>
                    precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={50} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
                <button className='Option'>Ver detalle</button>
            </footer>
        </article>
    )
}

export default ItemDetail