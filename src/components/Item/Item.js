//Item
import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock, description, category}) => {

    return (
    <div className='container'>
        <div className='card'>
            <div className='imgBx'>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            </div>
            <div className='contentBx'>
                <h2 className='ItemHeader'>{name}</h2>
                <h3 className='info'>Categoria: {category}</h3>
                <h3 className='info'>{description}</h3>
                <h3 className='info'>Precio: ${price}</h3>
                <h3 className='info'>Stock disponible: {stock}</h3>
                <div className='ItemFooter'>
                    <Link to={`/item/${id}`}><button className='btn option'>Ver Detalle</button></Link>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Item