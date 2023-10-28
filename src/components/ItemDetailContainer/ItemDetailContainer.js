import React from 'react'
import './ItemDetailContainer.css'
import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { itemId } = useParams()
    
useEffect(()=>{
    const collectionProd = collection(db,"products")
    const referenciaAlDoc= doc(collectionProd, itemId)
    getDoc(referenciaAlDoc)
    .then((res)=> setProduct({id:res.id, ...res.data()}))
    .catch((error)=> console.log(error))
},[])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer