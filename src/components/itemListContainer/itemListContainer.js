import React from 'react'
import { useState, useEffect } from 'react'
import { getProductsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { db } from "../../services/firebase"
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    // useEffect(() => {
    //     const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
    //     asyncFunc(categoryId)
    //         .then(response =>{
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [categoryId])

    useEffect(()=>{
        const coleccionProducts = categoryId ? query(collection(db,"products"), where("category","==", categoryId)):collection(db,"products")
        getDocs(coleccionProducts)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            console.log(list)
            setProducts(list)
        })
        .catch((error)=> console.log(error))
    },[categoryId])
    
    return (
        <div>
            <h1>{greeting}</h1> 
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer